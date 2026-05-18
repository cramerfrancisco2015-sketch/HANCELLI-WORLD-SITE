import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: 'Política de Cookies',
    description: 'Informação sobre o uso de cookies técnicos no site HANCELLI WORLD.'
}

export default function CookiesPage() {
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
                        Política de Cookies
                    </h1>
                    <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
                        Última atualização: Maio de 2026
                    </p>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col gap-8 text-sm text-zinc-400 leading-relaxed">
                    
                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">1. O que são Cookies</h2>
                        <p>
                            Cookies são pequenos ficheiros de texto ou fragmentos de informação que são descarregados e guardados no seu dispositivo (computador, smartphone ou tablet) quando visita e navega em determinados websites. Estes ficheiros permitem ao site lembrar-se de dados de navegação ou preferências técnicas, melhorando a estabilidade da sua sessão.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">2. Como Usamos os Cookies</h2>
                        <p>
                            Nesta fase inicial de lançamento e recolha de interesse para a nossa pré-lista, a HANCELLI WORLD utiliza apenas <strong>cookies estritamente técnicos e necessários</strong>. Estes cookies garantem o funcionamento correto e seguro do site e a submissão estável dos formulários. Caso, no futuro, venhamos a integrar ferramentas externas de análise estatística de visitas, pixels de conversão ou ferramentas de publicidade, esta política será atualizada e o seu consentimento prévio será expressamente solicitado.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">3. Tipos de Cookies</h2>
                        <ul className="list-disc pl-5 flex flex-col gap-3 text-zinc-400">
                            <li>
                                <strong>Cookies Necessários:</strong> Fundamentais para a segurança do site, estabilidade do servidor e proteção contra spam ou ataques na submissão de formulários. Não requerem consentimento prévio por serem essenciais para a navegação.
                            </li>
                            <li>
                                <strong>Cookies de Análise (Futuro):</strong> Utilizados de forma anónima para compreender a origem das visitas, páginas mais visualizadas e taxas de conversão de pré-lista. Só serão ativados após autorização.
                            </li>
                            <li>
                                <strong>Cookies de Marketing (Futuro):</strong> Utilizados para ligar a sua visita a plataformas externas de publicidade (e.g. Meta Ads, Google Ads). Só serão ativados com consentimento explícito.
                            </li>
                        </ul>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">4. Cookies de Terceiros</h2>
                        <p>
                            Determinados serviços externos integrados (como as plataformas de entrega de e-mails de formulário, e-commerce básico ou fontes carregadas) podem descarregar os seus próprios cookies técnicos no navegador. Além disso, ao clicar em links que apontam para as nossas redes sociais oficiais (Instagram, TikTok), essas plataformas externas utilizarão cookies governados pelas suas respetivas políticas de privacidade de terceiros.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">5. Gestão de Cookies pelo Utilizador</h2>
                        <p>
                            Poderá gerir, bloquear ou apagar os cookies armazenados no seu dispositivo a qualquer momento, ajustando as definições de privacidade e cookies diretamente no painel do seu navegador (Browser). Note que a desativação completa de cookies estritamente necessários poderá impactar a capacidade de preencher e submeter o formulário de pré-lista com sucesso.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">6. Contacto</h2>
                        <p>
                            Se tiver alguma dúvida sobre a nossa utilização de cookies, envie-nos uma mensagem de correio eletrónico para: <a href="mailto:hancelliworld@gmail.com" className="text-white underline hover:text-zinc-300 transition-colors">hancelliworld@gmail.com</a>.
                        </p>
                    </section>

                </div>

                {/* FOOTER */}
                <div className="border-t border-white/10 pt-8 flex justify-between items-center text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                    <span>© 2026 HANCELLI WORLD.</span>
                    <span>Política de Cookies</span>
                </div>

            </div>
        </main>
    )
}
