import useProducts from '../../hooks/useProducts';
import ProductCard from './ProductCard';

const NewArrivals = () => {
  const { products, loading, error } = useProducts("?sort=createdAt&limit=8");

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

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
        {products.map((product) => (
          <ProductCard 
            key={product._id}
            image={product.images[0]}
            name={product.name}
            price={product.price}
            originalPrice={product.price}
            color={product.variants[0].color}
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