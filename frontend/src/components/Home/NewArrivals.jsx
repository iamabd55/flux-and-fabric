import React from 'react';
import ProductCard from './ProductCard';

const NewArrivals = () => {
  const products = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs5mSQTc4Nc9wdKtBS3dPRvJ3AMEBH8oiYfU0RGLHU9b6u4pOZFGteAvdFsutrV7xqXuCPNhFmkMg0IgNbNoShflbLiD7jC6B9E2LDKUL5wdN1NYMs_4Arz72Yh8Yimspn1dX-33bBXHoIG0kRjvAs-FGBm2MZwGMcUHU2MAyKHHjQuCwabHBYlqqgrOWQ59b6mvaK4bPHiy7DfyrzthVmVjZCBceLfjFM0KuXHfwAxTcVq5hRFdcFVRw-PJdBpzHCY5tYO0fPv_Zc",
      name: "Linen Midi Dress",
      price: 129.00,
      color: "Natural White"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7wUyZfvqG7sp_eN1JigAYJ20ev_0JZDtkJBA8jAx-RvgKFmngKSqcAi_AeWcx_I-hhBmMjWGJdj52eYqVwoScto9yxnR2jvX5papryaTanq6QAMYFoipff3W6SxIsT9gGa7l_y2ZX3uutmoIyDgckk-ZrOdUQHcvZbX43k8QtG2-wL2ZUtYs0ITvTRBjy2-cuWLI8VOeCIB5krMp7X00QECOg4BlwsX71cJdsHkzG5YzmunDq_pGTnr3Z7Ce8JlQ3dESVcXBrZ2L3",
      name: "Structured Wool Jacket",
      price: 245.00,
      color: "Charcoal Grey"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeWsHo0mrOk_MHG-STs_-1TWkUoruV5fcU0vFSwYMQLdHNoVjK2u9ZNDhgoi2_H-wXd0-rWI6J56DgF1S90-bKtZLFIwBAxOTgI1NvbFVgQNwhT5dcBVeH01x5rKmDhEmbbYgcEzvw2Q8XaU9-vfLmIiwLpGsTtgvdFCeGY_7QuvFn3-ivK8wubAwse1DJYYn7QojaysN4r5LOWaZg1aUiuCYA6JWVeuKOdjSglzNIrJww-_Ak_ExDuscjHoLvDKMMhyAMzkQlR7My",
      name: "Merino Blend Knit",
      price: 89.00,
      originalPrice: 120.00,
      color: "Soft Beige",
      onSale: true
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWlSsl4XPrHiVw5WUkWrQ2f0QB501a7qnW0Nm-OKOyozhR18rznm7z3OAN7JmjRd3gNnKnxC49KQqlyo1sZUlhkyg3XTzez5QJ6M5gzk4h-hOkUgoOhv88U_2K9ezTbKGGKCxGe6MTvAnXpaTKEAUZJ6_CgFtAqexJIHxWvGUrcbTUBLJM6LADo0FZt3jLcz2neuD7ef6x2hPZddNqKDMPzqvtBHymWWSrjlJlNdsR6RXXMZ2TImbdyzycy9gH75Yd1kdAMN9vsMvQ",
      name: "Wide Leg Trousers",
      price: 155.00,
      color: "Ivory"
    }
  ];

  return (
    <section>
      <div className="flex items-end justify-between mb-12 border-b border-gray-100 pb-6">
        <div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-[#111318]  uppercase">
            New Arrivals
          </h2>
          <p className="text-gray-400 text-xs uppercase tracking-widest mt-2">Fresh looks just landed.</p>
        </div>
        <div className="hidden sm:flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
            Filters <span className="material-symbols-outlined text-[14px]">tune</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            color={product.color}
            onSale={product.onSale}
          />
        ))}
      </div>
      <div className="mt-20 flex justify-center">
        <button className="px-12 py-4 border-2 border-[#111318]  text-[#111318]  font-bold text-xs uppercase tracking-widest hover:bg-[#111318] hover:text-white transition-all cursor-pointer">
          View All Arrivals
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;