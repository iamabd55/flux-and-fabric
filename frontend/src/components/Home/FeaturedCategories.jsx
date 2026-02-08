import useCategories from '../../hooks/useCategories';
import CategoryCard from './CategoryCard';

const FeaturedCategories = () => {
  const { categories, loading, error } = useCategories();
  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;

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
        {categories && categories.map((category) => (
          <CategoryCard 
            key={category._id}
            image={category.imageUrl}
            label={category.comment}
            title={category.name}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;