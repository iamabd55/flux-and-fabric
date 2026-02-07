import React from 'react';
import CategoryCard from './CategoryCard';

const FeaturedCategories = () => {
  const categories = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNeFwyYSs0N54a_5A0AZ2NP4rVyKtkseFYVbzs1sBF7tuxi3PjBM8mft9n6cwl7G98ZNw1FnQsV5c07NU5pMnZt79XzfzL8T0eIQCrfhXgA8DSNQDs9-i84NU75_EZrGj2KoIoNwasXnD5tXD8CCsCJvzHlQbT-j43b5kffJ7mwfPWgWKWbOpMCD4OGlydnn2w0zKsE0oPV-LS7VMTnR75r_Goz8kw-0O1ZF9nAvqPU1GFwUc6BOLmtiwySRoSdhAg9coZj9HXrOZq",
      label: "Explore",
      title: "Outerwear"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2AEetUOtRxrgPr-4kAvCCvLgACsfzhbmouU9QmvTUyaKX6HX0nsp6-rT_Xu1NH4bZ81avSAPFnJfDrCPU7kMzIqZwqrowbmL3JmXP_vQTFYypfK2f4rIT8CEyr9ZCOfW5NfudxEA3xO2lQvkQcWeamlMnkb4e4Or8TCq3sRljsB3KCwZO3QroYjc2C_WbrcsfIIrhVGbXz6SCXmKmKGMc1bEH7Fie62OriyfqboBTbnJDb0aL8qA138vEeqLKI2t9Ba4VdJytxLNs",
      label: "Durable & Classic",
      title: "Denim"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTLP9vTPct8RgsYi2HcJEr6BEBtYlvtudIRH1hWGr0lQBE6kyO9XfobdXXszI2AwEtyUGnAc_Fwh-AP7FkVqP2GLlpgNYrPjtsdTuecfq62QyZvir5Rc8t5Ppq70rjiHi9kjU-XTGqE32rrUvFb7d42sL1Fq3_GaQjJaihVirIUsJmX6o7tlzmI7pZRNIh9BPj-mlziXIHUCjn8L-qPoKj1mpKraPMUh1i59oK-tXWf8zc6ZwhbWh1vwQDIvIr3snNO_RtgejkSzEY",
      label: "Everyday Comfort",
      title: "Essentials"
    }
  ];

  return (
    <section>
      <div className="flex items-end justify-between mb-12 border-b border-gray-100 pb-6">
        <div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-[#111318]  uppercase">
            Featured Categories
          </h2>
        </div>
        <a className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:opacity-70 transition-opacity" href="#">
          View all <span className="material-symbols-outlined text-[18px]">east</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {categories.map((category, index) => (
          <CategoryCard 
            key={index}
            image={category.image}
            label={category.label}
            title={category.title}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;