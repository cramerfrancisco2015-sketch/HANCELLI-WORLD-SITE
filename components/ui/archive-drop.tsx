'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Globe, Lock, PlayCircle } from 'lucide-react'
import { type Language, translations } from '@/lib/translations'

interface ArchiveDropProps {
    lang: Language;
}

export default function ArchiveDrop({ lang }: ArchiveDropProps) {
    const t = translations[lang].archiveDrop;

    return (
        <section id="produto" className="relative w-full bg-black py-24 md:py-32 flex flex-col items-center justify-center border-t border-white/5">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0,rgba(0,0,0,1)_70%)] pointer-events-none"></div>
            
            {/* TOPO DA SECÇÃO */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mb-12 md:mb-20 flex flex-col items-center text-center">
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase mb-4 max-md:!opacity-100 max-md:!transform-none"
                >
                    {t.firstDrop}
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 max-md:!opacity-100 max-md:!transform-none"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                    {t.title}
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-sm md:text-base text-zinc-400 font-light tracking-wide max-w-md max-md:!opacity-100 max-md:!transform-none"
                >
                    {t.desc}
                </motion.p>
            </div>

            {/* LAYOUT PRINCIPAL */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                
                {/* COLUNA ESQUERDA — STORY / NARRATIVE */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-3 flex flex-col order-3 lg:order-1 mt-8 lg:mt-0 bg-white/[0.025] border border-white/[0.08] backdrop-blur-xl rounded-3xl p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] max-md:!opacity-100 max-md:!transform-none"
                >
                    <div className="flex items-center gap-2 mb-8">
                        <span className="text-[10px] tracking-[0.2em] text-zinc-300 uppercase font-medium">{t.culturalArchive}</span>
                    </div>
                    
                    <h3 className="text-2xl font-medium leading-snug mb-5 text-white">
                        {t.storyTitle}
                    </h3>
                    
                    <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                        {t.storyDesc}
                    </p>
                    
                    <ul className="flex flex-col gap-3 mb-8 pb-8 border-b border-white/[0.08]">
                        {t.bullets.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-xs text-zinc-300">
                                <span className="text-zinc-600">/</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Ficha editorial / Product Note */}
                    <div className="flex flex-col gap-2 mb-10">
                        <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-mono text-zinc-500">
                            <span>{t.drop}</span>
                            <span className="text-zinc-300">PT.01</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-mono text-zinc-500">
                            <span>{t.format}</span>
                            <span className="text-zinc-300">HANCELLI JEANS</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-mono text-zinc-500">
                            <span>{t.status}</span>
                            <span className="text-zinc-300">{t.statusValue}</span>
                        </div>
                    </div>
                    
                    <a href="#historia" className="text-[10px] uppercase tracking-[0.2em] text-white/80 hover:text-white transition-all w-fit pb-1 border-b border-white/20 hover:border-white group flex items-center gap-2">
                        {t.exploreStory} 
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </motion.div>

                {/* CENTRO — HERO OBJECT (360 Video) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-6 relative flex justify-center items-center order-1 lg:order-2 h-[50vh] md:h-[60vh] lg:h-[70vh] w-full rounded-2xl overflow-hidden bg-black border border-white/5 group max-md:!opacity-100 max-md:!transform-none"
                >
                    {/* 360 Video Object */}
                    <video 
                        className="relative z-10 block h-full w-full bg-black object-contain opacity-90 lg:opacity-100 transition-opacity duration-700"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        preload="metadata"
                    >
                        <source src="/videos/hancelli-360.mp4" type="video/mp4" />
                    </video>

                    {/* Museum-like label inside the box */}
                    <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-md">
                            <PlayCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">
                            {lang === 'zh' ? '360° 视图' : lang === 'fr' ? 'VUE 360°' : lang === 'de' ? '360° ANSICHT' : lang === 'en' ? '360° VIEW' : 'VISTA 360°'}
                        </span>
                    </div>
                </motion.div>

                {/* COLUNA DIREITA — ACTION / CTA */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-3 flex flex-col gap-4 order-2 lg:order-3 mt-8 lg:mt-0 max-md:!opacity-100 max-md:!transform-none"
                >
                    {/* Primary CTA Card */}
                    <div className="bg-white/[0.025] border border-white/[0.08] p-8 rounded-3xl backdrop-blur-xl flex flex-col shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-[10px] tracking-[0.2em] text-zinc-300 uppercase font-medium">WAITLIST</span>
                        </div>
                        
                        <h4 className="text-xl font-medium text-white mb-3">{t.waitlistCardTitle}</h4>
                        
                        <p className="text-xs text-zinc-400 leading-relaxed mb-8">
                            {t.waitlistCardDesc}
                        </p>
                        
                        <a href="#pre-lista" className="w-full py-4 bg-[#F2F0E9] text-black font-semibold text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-white hover:-translate-y-0.5 transition-all mb-3 shadow-lg text-center">
                            {t.btnWaitlist}
                        </a>
                        <a href="#pre-lista" className="w-full py-4 border border-white/15 text-white/80 font-medium text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-white/10 hover:text-white transition-all text-center">
                            {t.btnSaveDrop}
                        </a>
                    </div>

                    {/* Mini Info Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                        <div className="bg-white/[0.02] border border-white/[0.06] p-5 rounded-2xl flex flex-col justify-center transition-colors hover:bg-white/[0.04]">
                            <Lock className="w-4 h-4 text-zinc-400 mb-4" strokeWidth={1.5} />
                            <span className="text-xs text-white font-medium mb-1.5">{t.limitedTitle}</span>
                            <span className="text-[10px] text-zinc-500 leading-tight">{t.limitedDesc}</span>
                        </div>
                        <div className="bg-white/[0.02] border border-white/[0.06] p-5 rounded-2xl flex flex-col justify-center transition-colors hover:bg-white/[0.04]">
                            <Globe className="w-4 h-4 text-zinc-400 mb-4" strokeWidth={1.5} />
                            <span className="text-xs text-white font-medium mb-1.5">{t.portugalTitle}</span>
                            <span className="text-[10px] text-zinc-500 leading-tight">{t.portugalDesc}</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* FAIXA INFERIOR DA SECÇÃO */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-16 md:mt-24 pt-8 border-t border-white/10 flex flex-wrap justify-center md:justify-between items-center gap-6 max-md:!opacity-100 max-md:!transform-none"
            >
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">{t.originLabel}</span>
                    <span className="text-xs text-white font-medium tracking-wide">{t.originValue}</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-white/20"></div>
                
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">{t.editionLabel}</span>
                    <span className="text-xs text-white font-medium tracking-wide">{t.editionValue}</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-white/20"></div>
                
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">{t.accessLabel}</span>
                    <span className="text-xs text-white font-medium tracking-wide">{t.accessValue}</span>
                </div>
            </motion.div>
        </section>
    )
}
