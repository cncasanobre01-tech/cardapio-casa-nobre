
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import MenuItemCard from './components/MenuItemCard';
import { MENU_DATA } from './constants';
import { Category } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>(Category.WHISKY);
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: Category.WHISKY, label: '🥃 Whisky', icon: '🥃' },
    { id: Category.COMBO_WHISKY, label: '📦 Combo Whisky', icon: '📦' },
    { id: Category.GIN, label: '🍹 Gin (Doses)', icon: '🍹' },
    { id: Category.COMBO_GIN, label: '📦 Combo Gin', icon: '📦' },
    { id: Category.GIN_GARRAFA, label: '🍾 Gin (Garrafa)', icon: '🍾' },
    { id: Category.CACHACA, label: '🥃 Cachaça', icon: '🥃' },
    { id: Category.CERVEJA, label: '🍺 Cervejas', icon: '🍺' },
    { id: Category.VINHO, label: '🍷 Vinhos', icon: '🍷' },
    { id: Category.CAIPIRINHA, label: '🍹 Caipirinhas', icon: '🍹' },
    { id: Category.SUCO, label: '🧃 Sucos', icon: '🧃' },
    { id: Category.NON_ALCOHOLIC, label: '🥤 Não Alcoólicos', icon: '🥤' },
    { id: Category.NARGUILE, label: '💨 Narguile', icon: '💨' },
  ];

  const scrollToActive = (tabId: Category) => {
    const el = document.getElementById(`tab-${tabId}`);
    if (el && scrollRef.current) {
      const offsetLeft = el.offsetLeft;
      const containerWidth = scrollRef.current.offsetWidth;
      const elWidth = el.offsetWidth;
      scrollRef.current.scrollTo({
        left: offsetLeft - containerWidth / 2 + elWidth / 2,
        behavior: 'smooth'
      });
    }
  };

  const handleTabClick = (tabId: Category) => {
    setActiveTab(tabId);
    scrollToActive(tabId);
  };

  return (
    <div className="min-h-screen pb-20 selection:bg-yellow-500/30">
      <Header />

      {/* Navegação por Abas Horizontal */}
      <div className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 mb-8 shadow-2xl">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar py-4 px-4 gap-2 max-w-5xl mx-auto scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`tab-${cat.id}`}
              onClick={() => handleTabClick(cat.id)}
              className={`flex-shrink-0 px-6 py-3 rounded-full text-xs font-black transition-all duration-300 border uppercase tracking-wider ${
                activeTab === cat.id
                  ? 'gold-bg text-black border-transparent shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Conteúdo Principal */}
      <main className="max-w-4xl mx-auto px-4">
        
        {activeTab === Category.WHISKY && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeader title="Doses de Whisky" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MENU_DATA.whiskies.map((item) => <MenuItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {activeTab === Category.COMBO_WHISKY && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeader title="Combos de Whisky" subtitle="Acompanha energético Vibe ou Red Bull" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MENU_DATA.comboWhiskies.map((item) => <MenuItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {activeTab === Category.GIN && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeader title="Doses de Gin" subtitle="Escolha seu sabor favorito" />
            <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-xl text-center">
              <p className="text-red-300 font-bold text-sm">🍓 Adicional Morango: <span className="text-white">+ R$ 2,00</span></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MENU_DATA.gins.map((item) => <MenuItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {activeTab === Category.COMBO_GIN && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeader title="Combos de Gin" subtitle="Sua garrafa acompanhada com gelo e frutas" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MENU_DATA.comboGins.map((item) => <MenuItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {activeTab === Category.GIN_GARRAFA && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeader title="Gins (Garrafa)" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MENU_DATA.ginGarrafas.map((item) => <MenuItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {activeTab === Category.CACHACA && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeader title="Doses de Cachaça" />
            <div className="bg-amber-900/20 border border-amber-500/30 p-4 rounded-xl text-center">
              <p className="text-amber-200 font-bold text-sm">🍋 Adicional Limão: <span className="text-white">+ R$ 0,50</span></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MENU_DATA.cachacas.map((item) => <MenuItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {activeTab === Category.CERVEJA && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeader title="Baldes de Cerveja" subtitle="10 unidades por balde" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MENU_DATA.cervejas.map((item) => <MenuItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {activeTab === Category.VINHO && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeader title="Carta de Vinhos" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MENU_DATA.vinhos.map((item) => <MenuItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {activeTab === Category.CAIPIRINHA && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeader title="Caipirinhas & Drinks" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MENU_DATA.caipirinhas.map((item) => <MenuItemCard key={item.id} item={item} />)}
            </div>
            <div className="glass-card p-4 rounded-xl border-dashed border-gold-border/20 text-center">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">Frutas Disponíveis</p>
              <p className="text-sm text-gray-300 font-medium">Limão, Morango, Kiwi, Maracujá</p>
            </div>
          </div>
        )}

        {activeTab === Category.SUCO && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeader title="Sucos Naturais" />
            <div className="grid grid-cols-1 gap-4">
              {MENU_DATA.sucos.map((item) => <MenuItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {activeTab === Category.NON_ALCOHOLIC && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section>
              <h3 className="text-xs font-black gold-text uppercase tracking-[0.3em] mb-6 px-2">Energéticos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MENU_DATA.nonAlcoholic.energeticos.map((item) => <MenuItemCard key={item.id} item={item} />)}
              </div>
            </section>
            <section>
              <h3 className="text-xs font-black gold-text uppercase tracking-[0.3em] mb-6 px-2">Refrigerantes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MENU_DATA.nonAlcoholic.refrigerantes.map((item) => <MenuItemCard key={item.id} item={item} />)}
              </div>
            </section>
            <section>
              <h3 className="text-xs font-black gold-text uppercase tracking-[0.3em] mb-6 px-2">Águas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MENU_DATA.nonAlcoholic.aguas.map((item) => <MenuItemCard key={item.id} item={item} />)}
              </div>
            </section>
          </div>
        )}

        {activeTab === Category.NARGUILE && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeader title="Sessão de Narguile" />
            <div className="grid grid-cols-1 gap-4">
              {MENU_DATA.narguile.map((item) => <MenuItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

      </main>

      {/* Rodapé com WhatsApp */}
      <footer className="mt-24 pb-12 text-center px-4">
        <p className="text-gray-600 text-[10px] mb-4 tracking-[0.4em] uppercase font-bold">Casa Nobre • Adega & Lounge</p>
        <p className="text-gray-400 font-serif italic text-xl mb-10">"Qualidade e Nobreza em cada dose."</p>
        
        <div className="flex flex-col items-center gap-4">
          <a 
            href="https://wa.me/5511970679590" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 gold-bg text-black font-black py-5 px-14 rounded-full hover:scale-105 transition-all shadow-[0_15px_40px_rgba(212,175,55,0.4)] active:scale-95 uppercase text-sm tracking-widest"
          >
            Fazer Pedido Agora
          </a>
        </div>
      </footer>
    </div>
  );
};

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-8 px-2">
    <div className="flex items-center gap-4 mb-2">
      <h2 className="font-serif text-3xl font-bold whitespace-nowrap uppercase tracking-tight">{title}</h2>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
    </div>
    {subtitle && <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">{subtitle}</p>}
  </div>
);

export default App;
