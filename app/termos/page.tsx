import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: 'Termos e Condições',
    description: 'Termos e condições de utilização da HANCELLI WORLD.'
}

export default function TermosPage() {
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
                        Termos e Condições
                    </h1>
                    <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
                        Última atualização: Maio de 2026
                    </p>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col gap-8 text-sm text-zinc-400 leading-relaxed">
                    
                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">1. Identificação</h2>
                        <p>
                            Este site é operado sob a marca <strong>HANCELLI WORLD</strong>. Para qualquer questão relacionada com estes Termos e Condições, poderá entrar em contacto através do e-mail oficial: <a href="mailto:hancelliworld@gmail.com" className="text-white underline hover:text-zinc-300 transition-colors">hancelliworld@gmail.com</a>.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">2. Natureza do Site</h2>
                        <p>
                            O presente website é uma plataforma puramente informativa e de captação de interesse através de uma pré-lista (waitlist). A inscrição nesta lista não constitui uma compra, uma reserva garantida de stock, um pagamento adiantado ou um contrato comercial de promessa de compra e venda.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">3. Produto (HANCELLI Jeans / Archive PT.01)</h2>
                        <p>
                            As peças apresentadas no site pertencem à primeira edição limitada (Archive PT.01), caracterizando-se por ser jeans feito à mão. Todas as informações comerciais definitivas sobre o produto — incluindo disponibilidade de stock por tamanho, tabelas de medidas, preço de venda ao público e a data oficial de lançamento — serão oportunamente comunicadas através dos canais oficiais da marca.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">4. Funcionamento da Pré-lista</h2>
                        <p>
                            Ao preencher e submeter o formulário de pré-lista, o utilizador manifesta o seu interesse voluntário no produto. A inscrição na pré-lista não constitui qualquer garantia de compra, reserva de stock, preço final ou reserva garantida do produto. O desconto de lançamento associado à pré-lista poderá estar sujeito a condições específicas, prazos de duração determinados e limites de disponibilidade.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">5. Propriedade Intelectual</h2>
                        <p>
                            Todos os conteúdos exibidos neste website — incluindo, mas não se limitando a, imagens, vídeos, fotografias, textos editoriais, logótipos, wordmarks, design e a própria identidade visual — são propriedade exclusiva da <strong>HANCELLI WORLD</strong>. É expressamente proibida qualquer reprodução, cópia, distribuição ou utilização comercial de qualquer elemento do site sem autorização prévia por escrito.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">6. Limitação de Responsabilidade</h2>
                        <p>
                            A HANCELLI WORLD envida todos os esforços razoáveis para garantir a precisão da informação no site. Contudo, reserva-se o direito de atualizar, modificar ou remover qualquer secção do conteúdo a qualquer momento sem aviso prévio. A marca não se responsabiliza por eventuais falhas temporárias de acesso ou problemas de rede que possam impedir a submissão correta do formulário de pré-lista.
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <h2 className="text-white font-bold uppercase tracking-wider text-xs font-mono">7. Contacto</h2>
                        <p>
                            Caso necessite de esclarecimentos adicionais sobre os nossos Termos e Condições, por favor envie uma mensagem para o e-mail: <a href="mailto:hancelliworld@gmail.com" className="text-white underline hover:text-zinc-300 transition-colors">hancelliworld@gmail.com</a>.
                        </p>
                    </section>

                </div>

                {/* FOOTER */}
                <div className="border-t border-white/10 pt-8 flex justify-between items-center text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                    <span>© 2026 HANCELLI WORLD.</span>
                    <span>Termos e Condições</span>
                </div>

            </div>
        </main>
    )
}
