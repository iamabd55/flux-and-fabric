import React from 'react';

const CategoryCard = ({ image, label, title, href = "#" }) => {
  return (
    <a className="group relative block h-125 w-full overflow-hidden bg-gray-100" href={href}>
      <img 
        alt={title} 
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        src={image}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
      <div className="absolute bottom-0 p-10 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-[10px] font-bold text-white/80 mb-2 uppercase tracking-widest">{label}</p>
        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">
          {title}
        </h3>
      </div>
    </a>
  );
};

export default CategoryCard;