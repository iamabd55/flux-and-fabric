import React from 'react';

const ProductCard = ({ image, name, price, originalPrice, color, onSale = false }) => {
  originalPrice+=1100;
  return (
    <div className="flex flex-col gap-4">
      <div className="group relative aspect-3/4 w-full overflow-hidden bg-gray-50 cursor-pointer">
        {onSale && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-primary text-white text-[9px] font-black uppercase tracking-[0.2em]">
              Sale
            </span>
          </div>
        )}
        <img 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:blur-xs" 
          src={image}
        />
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button className="w-full bg-primary text-white py-3 font-bold text-[10px] uppercase tracking-widest group-hover:bg-black transition-colors shadow-lg group-hover:cursor-pointer">
            View Details
          </button>
        </div>
        {!onSale && (
          <div className="absolute top-4 right-4">
            <button className="p-2 bg-white/80 backdrop-blur-sm text-gray-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">favorite</span>
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 px-1">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-bold text-[#111318] uppercase tracking-tight">
            {name}
          </h3>
          <div className="flex flex-row-reverse gap-3 items-end">
            <p className="text-sm font-medium text-primary">Rs.{price.toFixed(2)}</p>
            {originalPrice && (
              <p className="text-[10px] text-gray-400 line-through tracking-widest">
                Rs.{originalPrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>
        <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">{color}</p>
      </div>
    </div>
  );
};

export default ProductCard;