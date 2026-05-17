import React from 'react';

export default function Checkout() {
  return (
    <footer id="contacto" className="relative border-t border-white/10 bg-zinc-950/50 backdrop-blur-md pt-20 pb-12 px-6 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* UPPER CALL TO ACTION ROW */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[10px] uppercase tracking-[0.28em] text-white/30 font-mono mb-5">ARCHIVE PT.01</span>
          <h2
            className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-5 text-white"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            ARQUIVO 01
          </h2>
          <p className="max-w-sm text-sm text-zinc-400 leading-relaxed mb-8">
            Primeira edição feita à mão. Entra na pré-lista para seres avisado antes do lançamento e garantires o teu tamanho.
          </p>
          <a
            href="#pre-lista"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-black hover:bg-zinc-100 text-xs uppercase tracking-widest font-bold transition-all hover:scale-105 rounded-full"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            ENTRAR NA PRÉ-LISTA
          </a>
        </div>

        {/* BOTTOM MULTI-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pt-16 border-t border-white/5 text-left">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <span
              className="font-bold uppercase text-white text-base tracking-[0.22em] select-none"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              HANCELLI WORLD
            </span>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
              Jeans feito à mão. Memória cultural para vestir. Produzido em edições limitadas em Portugal.
            </p>
          </div>

          {/* Column 2: Contacto */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono font-bold">CONTACTO</span>
            <div className="flex flex-col gap-2.5 text-xs text-zinc-400">
              <a href="mailto:hancelliworld@gmail.com" className="flex flex-col hover:text-white transition-colors group">
                <span className="text-[10px] text-zinc-600 uppercase font-mono group-hover:text-zinc-400">Email</span>
                <span className="font-mono text-zinc-300">hancelliworld@gmail.com</span>
              </a>
              <a
                href="https://wa.me/351933108843?text=Ol%C3%A1%20HANCELLI%20WORLD%2C%20quero%20saber%20mais%20sobre%20a%20pr%C3%A9-lista%20do%20Archive%20PT.01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col hover:text-white transition-colors group"
              >
                <span className="text-[10px] text-zinc-600 uppercase font-mono group-hover:text-zinc-400">WhatsApp</span>
                <span className="font-mono text-zinc-300">+351 933 108 843</span>
              </a>
            </div>
          </div>

          {/* Column 3: Redes */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono font-bold">REDES SOCIAIS</span>
            <div className="flex flex-col gap-2 text-xs text-zinc-300">
              <a
                href="https://www.instagram.com/hancelliworld"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-zinc-400 hover:text-white transition-colors animate-pulse-subtle"
              >
                Instagram: <span className="font-mono text-zinc-300">@hancelliworld</span>
              </a>
              <a
                href="https://www.tiktok.com/@hancelliworld"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-zinc-400 hover:text-white transition-colors animate-pulse-subtle"
              >
                TikTok: <span className="font-mono text-zinc-300">@hancelliworld</span>
              </a>
            </div>
          </div>

          {/* Column 4: Links Legais */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono font-bold">LEGAL</span>
            <div className="flex flex-col gap-2 text-xs text-zinc-400">
              <a href="/termos" className="block hover:text-white transition-colors">
                Termos e Condições
              </a>
              <a href="/privacidade" className="block hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="/cookies" className="block hover:text-white transition-colors">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>

        {/* RIGHTS RESERVED ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-center md:text-left text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
          <span>© 2026 HANCELLI WORLD. Todos os direitos reservados.</span>
          <span className="text-zinc-600">EDITION PT.01 — MADE IN PORTUGAL</span>
        </div>
      </div>
    </footer>
  );
}
