'use client'
import React from 'react'
import Lookbook from '@/components/ui/lookbook'
import ArchiveDrop from '@/components/ui/archive-drop'

import Checkout from '@/components/ui/checkout'
import HancelliHeader from '@/components/landing/HancelliHeader'

export default function Home() {
    return (
        <main className="bg-black min-h-screen">
            {/* LIQUID NAVBAR (FIXED) */}
            <HancelliHeader />

            {/* HERO VIDEO */}
            <section id="inicio" className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center">
                {/* Overlay — z-10 */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/30 to-black/80 pointer-events-none"></div>

                {/* Mobile video — z-0 */}
                <video
                    className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-90 block md:hidden pointer-events-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                >
                    <source src="/videos/hancelli-hero-mobile.mp4" type="video/mp4" />
                </video>

                {/* Desktop video — z-0 */}
                <video
                    className="absolute inset-0 z-0 h-full w-full object-cover opacity-90 hidden md:block pointer-events-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                >
                    <source src="/videos/hancelli-hero.mp4" type="video/mp4" />
                </video>

                {/* Texto central — z-20, sem Framer Motion para garantir visibilidade iOS */}
                <div
                    className="relative z-20 flex min-h-[100svh] w-full flex-col items-center justify-center px-6 text-center pointer-events-none"
                    style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 96px)' }}
                >
                    <h1 className="font-oswald uppercase leading-[0.82] tracking-[-0.04em] text-white drop-shadow-[0_18px_60px_rgba(0,0,0,0.85)] text-[clamp(4rem,18vw,7rem)] md:text-[clamp(5rem,10vw,9rem)]">
                        HANCELLI<br />WORLD
                    </h1>
                    <p className="mt-6 max-w-xs text-[0.65rem] font-medium uppercase tracking-[0.34em] text-white/70 md:max-w-none md:text-xs">
                        Jeans feito à mão. Memória cultural para vestir.
                    </p>
                </div>
            </section>

            <ArchiveDrop />
            <Lookbook />

            <Checkout />
        </main>
    )
}
