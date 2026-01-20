
import React from 'react';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price;
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="glass-card p-5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.05] group">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-100 group-hover:gold-text transition-colors">
            {item.name}
          </h3>
          <div className="flex flex-wrap gap-x-2 items-center">
            {item.mixer && (
              <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                c/ {item.mixer}
              </span>
            )}
            {item.volume && (
              <span className="text-xs uppercase tracking-wider text-amber-500/70 font-bold">
                • {item.volume}
              </span>
            )}
          </div>
          {item.description && (
            <p className="text-sm text-gray-400 italic mt-1 leading-tight">{item.description}</p>
          )}
        </div>
        <div className="text-right shrink-0">
          <span className="text-lg font-bold gold-text font-serif whitespace-nowrap">
            {formatPrice(item.price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
