
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center pt-20 pb-12 px-4 text-center">
      {/* Container do Nome Centralizado */}
      <div className="relative z-10 flex flex-col items-center group">
        
        {/* Elemento Decorativo Superior (Opcional, para estética premium) */}
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
          <div className="w-1.5 h-1.5 rounded-full gold-bg"></div>
          <div className="w-12 h-[1px] gold-bg"></div>
          <div className="w-1.5 h-1.5 rounded-full gold-bg"></div>
        </div>

        {/* Nome Principal Reto e Centralizado */}
        <h1 className="font-serif text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
          <span className="gradient-gold drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            Casa Nobre
          </span>
        </h1>

        {/* Subtítulo e Divisores */}
        <div className="flex items-center justify-center gap-4 w-full max-w-xs md:max-w-md">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold-border/40"></div>
          <p className="text-gray-400 font-light tracking-[0.6em] text-[10px] md:text-xs uppercase whitespace-nowrap">
            Adega & Lounge
          </p>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold-border/40"></div>
        </div>

        {/* Detalhe de Ano de Fundação */}
        <div className="mt-4 opacity-30 group-hover:opacity-60 transition-opacity duration-700">
           <span className="text-[9px] text-gray-400 tracking-[0.4em] font-medium uppercase border-t border-white/10 pt-2 px-4">
             Premium Experience • Since 2025
           </span>
        </div>
      </div>
      
      {/* Brilho de Fundo Sutil para Profundidade */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-yellow-600/5 blur-[120px] pointer-events-none"></div>
    </header>
  );
};

export default Header;
