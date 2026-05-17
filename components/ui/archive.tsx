import React from 'react';
import { motion } from 'framer-motion';

export default function Archive() {
  return (
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
          animate={{ y: ["-20px", "20px", "-20px"], rotateZ: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex-1 flex justify-center drop-shadow-[0_0_50px_rgba(255,255,255,0.15)]"
        >
          <img src="https://pngimg.com/uploads/jeans/jeans_PNG5756.png" alt="Archive Jeans" className="h-[70vh] object-contain" />
        </motion.div>
        <div className="flex flex-col gap-12 flex-1">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-lg mt-0 md:mt-48">
            <h3 className="text-xl text-[#a68b6a] font-bold mb-3 uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>02. Alma do Norte</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Tipografia clássica do comércio portuense. A exportação da cultura nacional.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
