'use client'
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function HancelliLanding() {
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
            {/* NAVBAR */}
            <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <span className="text-xl font-bold tracking-[0.2em] uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>HANCELLI</span>
                    <span className="hidden md:block text-xs font-mono text-zinc-500 tracking-widest">38.7223° N, 9.1393° W</span>
                </div>
            </nav>

            <main className="overflow-x-hidden">
                {/* HERO CINEMATIC */}
                <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://www.w3schools.com/html/mov_bbb.mp4"></video>
                    
                    <div className="relative z-20 flex flex-col items-center mt-20">
                        <motion.h1 
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                            className="text-6xl md:text-8xl font-black uppercase tracking-tighter"
                            style={{ fontFamily: 'Oswald, sans-serif' }}
                        >
                            Hancelli<br/>World
                        </motion.h1>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className="mt-6 text-sm md:text-base tracking-[0.3em] font-light text-zinc-300">
                            GLOBAL VISION. TIMELESS STYLE.
                        </motion.p>
                    </div>
                </section>

                {/* LOOKBOOK PARALLAX */}
                <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
                    <p className="text-2xl md:text-4xl font-light leading-relaxed mb-24 max-w-3xl mx-auto text-zinc-300">
                        A roupa conta uma história.<br/>A história expõe uma cultura.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                        <motion.div style={{ y: yParallax }} className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-md">
                            <img src="https://i.ibb.co/jvX9JHp6/9211f496-5c79-425b-9850-2e63a6445685.png" alt="Hancelli Saint" className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                        </motion.div>
                        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }} className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-md md:mt-32">
                            <img src="https://i.ibb.co/bR6M0rfx/d5b14a82-9c58-4d61-aaf9-e1017bc078aa.png" alt="Hancelli Shadow" className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                        </motion.div>
                    </div>
                </section>

                {/* THE ANTIGRAVITY ARTIFACT */}
                <section className="relative min-h-[120vh] flex items-center justify-center py-32 overflow-hidden bg-black">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,rgba(0,0,0,1)_50%)]"></div>
                    <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 z-10 px-6">
                        
                        <div className="hidden md:flex flex-col gap-12 flex-1">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-lg">
                                <h3 className="text-xl text-[#a68b6a] font-bold mb-3 uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>01. A Tradição Intocável</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">Curadoria de design icónico. A estética resistente das antigas farmácias portuguesas, recontextualizada.</p>
                            </div>
                        </div>

                        <motion.div 
                            animate={{ y: ["-20px", "20px", "-20px"], rotateZ: [-1, 1, -1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative flex-1 flex justify-center drop-shadow-[0_0_50px_rgba(255,255,255,0.15)]"
                        >
                            <img src="https://pngimg.com/uploads/jeans/jeans_PNG5756.png" alt="Archive PT.01 Jeans" className="h-[70vh] object-contain" />
                        </motion.div>

                        <div className="flex flex-col gap-12 flex-1">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-lg mt-0 md:mt-48">
                                <h3 className="text-xl text-[#a68b6a] font-bold mb-3 uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>02. Alma do Norte</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">Tipografia clássica do comércio portuense. A exportação da cultura nacional.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CHECKOUT DROP */}
                <section className="py-40 px-6 flex flex-col items-center text-center border-t border-white/10">
                    <h2 className="text-5xl md:text-7xl font-black uppercase mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>THE LUSITANIAN CANVAS</h2>
                    <button className="mt-8 px-12 py-5 bg-white text-black hover:bg-zinc-200 text-lg uppercase tracking-widest font-bold transition-transform hover:scale-105" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        Adquirir Arquivo 01
                    </button>
                </section>
            </main>
        </div>
    )
}
