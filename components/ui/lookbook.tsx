'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WAITLIST_ENDPOINT = "https://formspree.io/f/mdajoapb";
const isWaitlistDisabled =
  !WAITLIST_ENDPOINT || WAITLIST_ENDPOINT.includes("COLOCAR_ENDPOINT");

const imgTransition = { duration: 1.1, ease: [0.22, 1, 0.36, 1] };
const textTransition = { duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] };

export default function Lookbook() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'disabled'>('idle');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [size, setSize] = useState('Ainda não sei');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isWaitlistDisabled) {
      setFormStatus('disabled');
      return;
    }

    setFormStatus('loading');
    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          whatsapp,
          size,
          source: "HANCELLI_WORLD_PRE_LISTA",
          interest: "ARCHIVE_PT_01_HANCELLI_JEANS",
          launchDiscountInterest: true,
          submittedAt: new Date().toISOString()
        })
      });
      if (res.ok) setFormStatus('success');
      else setFormStatus('error');
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <section id="historia" className="relative overflow-hidden bg-black text-white border-t border-white/5">
      
      {/* MANIFESTO BLOCK */}
      <motion.div 
        id="conceito"
        initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative min-h-auto lg:min-h-[115svh] flex flex-col items-center justify-center py-24 md:py-36 lg:py-44 px-6 overflow-hidden max-md:!opacity-100 max-md:!transform-none max-md:!filter-none"
      >
        <h2 className="font-oswald uppercase text-[clamp(2.4rem,5.6vw,6.4rem)] leading-[0.98] tracking-[-0.025em] text-white text-center max-w-[1120px] mx-auto">
          <span className="block">A roupa conta uma história.</span>
          <span className="block mt-4 md:mt-5">A história expõe uma cultura.</span>
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-center text-sm md:text-base text-white/58 leading-7">
          HANCELLI WORLD transforma memória cultural em luxury streetwear — peças feitas para vestir, ler e lembrar.
        </p>
      </motion.div>

      {/* CHAPTER 01 BLOCK */}
      <motion.div 
        initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative min-h-auto lg:min-h-[115svh] flex items-center py-24 md:py-36 lg:py-44 px-6 overflow-hidden max-md:!opacity-100 max-md:!transform-none max-md:!filter-none"
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={imgTransition}
              className="relative w-full max-w-[480px] aspect-[3/4] overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/[0.06] group max-md:!opacity-100 max-md:!transform-none"
            >
              <img src="/images/hancelli/lookbook-archive.png?v=20260516-2" alt="Poster do Arquivo HANCELLI" className="object-cover object-center w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={textTransition}
            className="flex flex-col items-center text-center lg:items-start lg:text-left order-1 lg:order-2 max-w-md mx-auto lg:mx-0 max-md:!opacity-100 max-md:!transform-none"
          >
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/40 font-mono mb-4">CAPÍTULO 01</span>
            <h3 className="font-oswald uppercase text-[clamp(2.2rem,4.4vw,5.2rem)] leading-[0.95] tracking-[-0.02em] text-white mb-6">
              Nascida do arquivo.<br/>Feita para a rua.
            </h3>
            <p className="mt-6 max-w-md text-white/60 leading-7">
              Cada detalhe parte de cartazes antigos, referências visuais e fragmentos de cultura popular. No jeans, esses sinais deixam de ser apenas memória — tornam-se presença.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* CHAPTER 02 BLOCK */}
      <motion.div 
        initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative min-h-auto lg:min-h-[115svh] flex items-center py-24 md:py-36 lg:py-44 px-6 overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.03),transparent_42%)] before:pointer-events-none max-md:!opacity-100 max-md:!transform-none max-md:!filter-none"
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={textTransition}
            className="flex flex-col items-center text-center lg:items-end lg:text-right max-w-md mx-auto lg:mx-0 lg:ml-auto max-md:!opacity-100 max-md:!transform-none"
          >
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/40 font-mono mb-4">CAPÍTULO 02</span>
            <h3 className="font-oswald uppercase text-[clamp(2.2rem,4.4vw,5.2rem)] leading-[0.95] tracking-[-0.02em] text-white mb-6">
              A cultura move-se através das pessoas.
            </h3>
            <p className="mt-6 max-w-md text-white/60 leading-7">
              A peça ganha vida quando sai do arquivo e entra na rua. Imagem, atitude e identidade encontram-se numa presença visual própria.
            </p>
          </motion.div>
          <div className="flex justify-center lg:justify-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={imgTransition}
              className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)] bg-[#0a0a0a] max-md:!opacity-100 max-md:!transform-none"
            >
              <img src="https://i.ibb.co/bR6M0rfx/d5b14a82-9c58-4d61-aaf9-e1017bc078aa.png" alt="Campanha Cultural HANCELLI" className="object-cover object-center w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* PRESAVE BLOCK */}
      <motion.div 
        id="pre-lista"
        initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative min-h-auto lg:min-h-[115svh] flex items-center justify-center py-24 md:py-36 lg:py-44 px-6 overflow-hidden max-md:!opacity-100 max-md:!transform-none max-md:!filter-none"
      >
        <div className="w-full max-w-lg bg-white/[0.025] border border-white/[0.08] p-8 md:p-12 rounded-[2rem] shadow-[0_32px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.28em] text-white/40 font-mono mb-4">ARCHIVE PT.01 — PRIMEIRO DROP</span>
          <h3 className="font-oswald text-2xl md:text-4xl leading-[0.95] tracking-tight text-white mb-4 uppercase">ENTRA NA PRÉ-LISTA DO PRIMEIRO DROP</h3>
          <p className="font-sans text-sm leading-7 text-white/58 max-w-md text-center mb-8">
            Recebe primeiro a data de lançamento, disponibilidade de tamanhos e acesso ao desconto de lançamento.
          </p>

          {formStatus === 'success' ? (
            <div className="flex flex-col items-center justify-center py-8 w-full border border-white/10 rounded-2xl bg-white/5 px-6 text-center">
              <p className="text-sm text-white font-medium tracking-wide">Estás na pré-lista.</p>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Enviámos uma confirmação para o teu email com os próximos passos do Archive PT.01.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-left">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">EMAIL</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-white/30 transition-colors"
                  placeholder="teu@email.com"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="whatsapp" className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">WHATSAPP (OPCIONAL)</label>
                  <input 
                    type="tel" 
                    id="whatsapp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-white/30 transition-colors"
                    placeholder="+351..."
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="size" className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">TAMANHO PREFERIDO</label>
                  <select 
                    id="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-colors appearance-none"
                  >
                    {['Ainda não sei', '28', '30', '32', '34', '36', '38', '40', '42', '44', '46', '48'].map(s => (
                      <option key={s} value={s} className="bg-zinc-900">{s}</option>
                    ))}
                  </select>
                  <span className="text-[9px] text-zinc-500 ml-1 leading-normal">
                    Escolhe o tamanho que costumas usar em jeans. Se não tiveres certeza, seleciona ‘Ainda não sei’.
                  </span>
                </div>
              </div>

              {formStatus === 'disabled' && (
                <p className="text-xs text-amber-500/80 text-center mt-2">A lista ainda está a ser ativada. Volta em breve ou contacta-nos pelo botão CONTACTO.</p>
              )}
              {formStatus === 'error' && (
                <p className="text-xs text-red-500/80 text-center mt-2">Não foi possível guardar a tua inscrição. Tenta novamente.</p>
              )}

              <button 
                type="submit" 
                disabled={formStatus === 'loading' || formStatus === 'disabled'}
                className="w-full mt-4 py-4 bg-[#F2F0E9] text-black font-semibold text-[11px] uppercase tracking-[0.22em] rounded-full hover:bg-white hover:-translate-y-0.5 transition-all shadow-lg disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {formStatus === 'loading' ? 'A CARREGAR...' : 'ENTRAR NA PRÉ-LISTA'}
              </button>

              <p className="text-[10px] text-zinc-500 leading-normal text-center mt-3 font-sans">
                Depois da inscrição, vais receber um email de confirmação com os próximos passos da HANCELLI WORLD.
              </p>

              <p className="text-[9px] text-zinc-600 leading-normal text-center mt-1.5 font-sans">
                Ao entrares na pré-lista, aceitas ser contactado pela HANCELLI WORLD sobre o lançamento. Consulta a{' '}
                <a href="/privacidade" className="underline hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                .
              </p>
            </form>
          )}

          {/* Benefits */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-10 w-full pt-8 border-t border-white/[0.08]">
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] tracking-[0.28em] text-white/80 mb-1 uppercase font-mono">ACESSO ANTECIPADO</span>
              <span className="text-xs text-white/40 leading-tight font-sans mt-1">Recebe os detalhes antes do público.</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] tracking-[0.28em] text-white/80 mb-1 uppercase font-mono">DESCONTO DE LANÇAMENTO</span>
              <span className="text-xs text-white/40 leading-tight font-sans mt-1">Acesso a desconto exclusivo de lançamento.</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] tracking-[0.28em] text-white/80 mb-1 uppercase font-mono">PRIORIDADE NO TAMANHO</span>
              <span className="text-xs text-white/40 leading-tight font-sans mt-1">Ajuda-nos a preparar os tamanhos mais pedidos.</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
