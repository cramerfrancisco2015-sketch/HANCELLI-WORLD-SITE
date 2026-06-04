import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: 'Política de Privacidade',
    description: 'Como a HANCELLI WORLD recolhe, utiliza e protege dados pessoais.'
}

export default function PrivacidadePage() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#f5f2ea] py-16 md:py-24 px-6 font-sans antialiased">
            <div className="max-w-3xl mx-auto flex flex-col gap-12">
                
                {/* BACK LINK */}
                <div>
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
                        Voltar ao Site
                    </Link>
                </div>

                {/* HEADER */}
                <div className="border-b border-white/10 pb-8">
                    <h1 
                        className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4"
                        style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                        Política de Privacidade
                    </h1>
                    <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
                        Última atualização: Maio de 2026
                    </p>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col gap-8 text-sm text-zinc-400 leading-relaxed">
                    
                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">1. Responsável pelo Tratamento dos Dados</h2>
                        <p>
                            O responsável pelo tratamento dos dados recolhidos neste site é a marca <strong>HANCELLI WORLD</strong>, contactável diretamente através do e-mail oficial: <a href="mailto:hancelliworld@gmail.com" className="text-white underline hover:text-zinc-300 transition-colors">hancelliworld@gmail.com</a>.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">2. Dados Pessoais Recolhidos</h2>
                        <p>
                            Recolhemos apenas os dados estritamente necessários para as finalidades da nossa waitlist:
                        </p>
                        <ul className="list-disc pl-5 flex flex-col gap-1 text-zinc-400">
                            <li><strong>Nome</strong> (obrigatório) — para personalização de contactos.</li>
                            <li><strong>Email</strong> (obrigatório) — para comunicações por e-mail.</li>
                            <li><strong>WhatsApp / Telemóvel</strong> (opcional, se fornecido) — para contacto direto ou alertas rápidos.</li>
                            <li><strong>Tamanho Preferido</strong> (opcional, se selecionado) — para nos ajudar a planejar a produção do stock de jeans.</li>
                            <li><strong>Dados Técnicos Básicos e Navegação:</strong> Cookies essenciais para estabilidade técnica e, caso consinta explicitamente no banner de cookies, dados técnicos de navegação e eventos de utilização, incluindo identificadores técnicos associados ao navegador ou dispositivo (como o evento de visualização de página ou confirmação de registo na waitlist) transmitidos ao Meta Pixel. Nenhum nome, email ou telemóvel inserido no formulário de inscrição é enviado para a Meta.</li>
                        </ul>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">3. Finalidades do Tratamento</h2>
                        <p>
                            Os dados fornecidos voluntariamente pelo utilizador serão utilizados pela HANCELLI WORLD para contactar o utilizador por e-mail e, se fornecido, por WhatsApp. Estas comunicações são estritamente relacionadas ao lançamento, disponibilidade de stock e tamanhos, gestão de pré-lista e envio de informações sobre o desconto de lançamento do Archive PT.01 / HANCELLI Jeans.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">4. Base Legal para o Tratamento</h2>
                        <p>
                            O tratamento dos seus dados baseia-se no seu <strong>Consentimento expresso e voluntário</strong> ao preencher e submeter o formulário de pré-lista. O utilizador é livre de retirar o seu consentimento a qualquer momento.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">5. Conservação dos Dados</h2>
                        <p>
                            Os dados recolhidos serão conservados apenas pelo período estritamente necessário para a gestão da pré-lista e até à conclusão das comunicações relativas ao drop do Archive PT.01. A qualquer momento, o utilizador poderá solicitar a eliminação imediata de todos os seus dados e a interrupção das comunicações enviando um e-mail de remoção para: <a href="mailto:hancelliworld@gmail.com" className="text-white underline hover:text-zinc-300 transition-colors">hancelliworld@gmail.com</a>.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">6. Partilha de Dados com Terceiros</h2>
                        <p>
                            Não comercializamos, vendemos nem alugamos os seus dados pessoais a quaisquer terceiros. Os seus dados poderão ser processados por ferramentas técnicas de formulário e e-mail necessárias à gestão da pré-lista (como a plataforma Formspree ou Resend). Adicionalmente, caso autorize os cookies de marketing, dados técnicos de navegação e eventos de utilização, incluindo identificadores técnicos associados ao navegador ou dispositivo, são partilhados com a Meta Platforms para otimização de anúncios. Nenhum dado pessoal introduzido na waitlist (como nome, email ou número telefónico) é enviado para o Meta Pixel.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">7. Direitos do Titular dos Dados</h2>
                        <p>
                            Nos termos da legislação aplicável (RGPD), assistem-lhe os seguintes direitos fundamentais:
                        </p>
                        <ul className="list-disc pl-5 flex flex-col gap-1 text-zinc-400">
                            <li>Direito de <strong>Acesso</strong> e de <strong>Retificação</strong> dos seus dados;</li>
                            <li>Direito ao <strong>Apagamento</strong> (Esquecimento) e <strong>Limitação</strong> do tratamento;</li>
                            <li>Direito de <strong>Oposição</strong> ao tratamento e portabilidade dos dados, quando aplicável;</li>
                            <li>Direito de <strong>Retirar o Consentimento</strong> a qualquer momento, sem comprometer a licitude do tratamento efetuado até essa data.</li>
                        </ul>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">8. Como Exercer os seus Direitos</h2>
                        <p>
                            Para exercer qualquer um dos seus direitos legais ou pedir esclarecimentos sobre a nossa gestão de dados, basta enviar um e-mail com o seu pedido explícito para: <a href="mailto:hancelliworld@gmail.com" className="text-white underline hover:text-zinc-300 transition-colors">hancelliworld@gmail.com</a>.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">9. Segurança</h2>
                        <p>
                            Implementamos medidas de segurança técnicas e organizativas razoáveis e adequadas para proteger os seus dados pessoais contra acessos não autorizados, perdas acidentais ou destruição. Lembramos contudo que, embora façamos todos os esforços, nenhum sistema informático transmitido pela internet é 100% inviolável.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">10. Reclamação junto da Autoridade de Controlo</h2>
                        <p>
                            Se considera que o tratamento dos seus dados viola a legislação vigente, tem o direito de apresentar uma reclamação perante a autoridade de controlo competente do seu local de residência. Em Portugal, a autoridade de controlo é a <strong>Comissão Nacional de Proteção de Dados (CNPD)</strong>.
                        </p>
                    </section>

                </div>

                {/* FOOTER */}
                <div className="border-t border-white/10 pt-8 flex justify-between items-center text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                    <span>© 2026 HANCELLI WORLD.</span>
                    <span>Política de Privacidade</span>
                </div>

            </div>
        </main>
    )
}
