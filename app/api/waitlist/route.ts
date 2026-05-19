import { NextResponse } from "next/server";
import { translations, Language } from "@/lib/translations";

const WAITLIST_ENDPOINT = "https://formspree.io/f/mdajoapb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      contactCountry,
      contactDialCode,
      contactNumber,
      contactFull,
      whatsapp,
      size,
      source,
      interest,
      launchDiscountInterest,
      submittedAt,
      language,
    } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 1. Send data to Formspree
    let formspreeSuccess = false;
    try {
      const formspreeRes = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          contactCountry,
          contactDialCode,
          contactNumber,
          contactFull,
          whatsapp,
          size,
          source,
          interest,
          launchDiscountInterest,
          submittedAt,
          language,
        }),
      });
      formspreeSuccess = formspreeRes.ok;
      if (!formspreeSuccess) {
        console.error("Formspree submittal failed status:", formspreeRes.status);
      }
    } catch (err) {
      console.error("Error submitting to Formspree:", err);
    }

    // 2. Send automatic confirmation email using Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    let resendSuccess = false;

    if (resendApiKey) {
      const lang: Language = (language as Language) || "pt";
      const t = translations[lang].lookbook;

      const subject = t.emailSubject;
      const title = name ? `${name.trim()}, ${t.emailTitle.toLowerCase()}` : t.emailTitle;
      const bodyText = t.emailBody;
      const signature = t.emailSignature;

      const htmlContent = `
        <div style="background-color: #000000; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 60px 20px; text-align: center; min-height: 100%;">
          <div style="max-width: 500px; margin: 0 auto; background-color: #000000; padding: 20px;">
            <!-- Logo -->
            <div style="margin-bottom: 40px; text-align: center;">
              <img src="https://www.hancelliworld.com/apple-touch-icon.png" alt="HL Logo" width="60" height="60" style="width: 60px; height: 60px; border-radius: 12px; border: 1px solid #222222; background-color: #000000; display: inline-block;" />
            </div>
            <!-- Title -->
            <h1 style="font-size: 18px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.15em; color: #ffffff; margin-bottom: 24px; line-height: 1.4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; text-align: center;">
              ${title}
            </h1>
            <!-- Body -->
            <p style="font-size: 13px; line-height: 1.8; color: #a1a1aa; margin-bottom: 40px; font-weight: 300; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; text-align: center;">
              ${bodyText}
            </p>
            <!-- Divider -->
            <div style="height: 1px; background-color: #1f1f1f; margin: 40px auto; width: 60px;"></div>
            <!-- Footer / Signature -->
            <p style="font-size: 10px; line-height: 1.6; color: #71717a; letter-spacing: 0.05em; text-transform: uppercase; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; text-align: center;">
              ${signature}
            </p>
          </div>
        </div>
      `;

      const fromEmail = process.env.WAITLIST_FROM_EMAIL || "HANCELLI WORLD <onboarding@resend.dev>";

      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [email],
            subject: subject,
            html: htmlContent,
          }),
        });

        if (resendRes.ok) {
          resendSuccess = true;
        } else {
          const resendError = await resendRes.json().catch(() => ({}));
          console.error("Waitlist email send failed", {
            status: resendRes.status,
            error: resendError?.message || resendError?.name || "Unknown Resend error"
          });
        }
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Network error";
        console.error("Waitlist email send failed", {
          error: errorMsg
        });
      }
    } else {
      console.warn("RESEND_API_KEY is not configured. Email confirmation was skipped.");
    }

    // Return status
    if (formspreeSuccess) {
      return NextResponse.json({
        success: true,
        emailSent: resendSuccess,
      });
    } else {
      return NextResponse.json(
        { error: "Formspree submission failed" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Internal server error in waitlist route:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
