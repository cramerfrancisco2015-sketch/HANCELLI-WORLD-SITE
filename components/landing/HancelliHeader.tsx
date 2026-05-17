'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'

const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Produto', href: '#produto' },
    { name: 'História', href: '#historia' },
    { name: 'Pré-lista', href: '#pre-lista' }
]

export default function HancelliHeader() {
    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (value) => {
            setScrolled(value > 20)
        })
        return () => unsubscribe()
    }, [scrollY])

    return (
        <>
            {/* ============================================
                VERSÃO MOBILE — md:hidden
                Barra simples, direta e focada em conversão.
                Sem hamburger, sem drawer, sem estado React.
            ============================================ */}
            <header
                className="md:hidden fixed left-4 right-4 z-[2147483647] pointer-events-auto isolate overflow-visible"
                style={{ top: 'calc(env(safe-area-inset-top, 0px) + 12px)' }}
            >
                <div className="relative z-[2147483647] pointer-events-auto flex items-center justify-between h-14 rounded-full bg-black/90 border border-white/15 backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,0.55)] px-5">
                    {/* Logo/wordmark à esquerda */}
                    <a
                        href="#inicio"
                        className="font-bold uppercase text-white text-sm tracking-[0.22em] whitespace-nowrap pointer-events-auto"
                        style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                        HANCELLI WORLD
                    </a>

                    {/* Botão CTA à direita: PRÉ-LISTA */}
                    <a
                        href="#pre-lista"
                        className="rounded-full bg-white text-black px-4 py-2 text-[0.65rem] font-bold tracking-[0.18em] uppercase pointer-events-auto transition-transform active:scale-95 duration-200"
                        style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                        PRÉ-LISTA
                    </a>
                </div>
            </header>

            {/* ============================================
                VERSÃO DESKTOP — hidden md:block
                Preserva o design cinematográfico aprovado.
                Framer Motion com entrada suave.
            ============================================ */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                className="hidden md:block fixed top-4 left-1/2 z-[9999] w-[calc(100%-24px)] max-w-7xl -translate-x-1/2"
            >
                <div
                    className={`flex items-center justify-between rounded-full border px-6 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-all duration-500 ${
                        scrolled
                            ? 'h-16 border-white/20 bg-black/80'
                            : 'h-[72px] border-white/15 bg-black/45'
                    }`}
                >
                    {/* Wordmark */}
                    <div className="flex items-center">
                        <span className="font-oswald text-lg font-bold uppercase tracking-[0.2em] text-white whitespace-nowrap drop-shadow-md">
                            HANCELLI WORLD
                        </span>
                    </div>

                    {/* Menu desktop */}
                    <nav className="flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="rounded-full px-3 py-2 font-mono text-[11px] lg:text-xs uppercase tracking-[0.18em] text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Botão CONTACTO */}
                    <a
                        href="#contacto"
                        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 font-oswald text-xs font-bold uppercase tracking-[0.2em] text-white/85 hover:bg-white/20 hover:text-white hover:border-white/30 transition-all duration-300"
                    >
                        CONTACTO
                    </a>
                </div>
            </motion.header>
        </>
    )
}
