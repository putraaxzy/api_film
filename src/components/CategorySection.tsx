'use client';

const categories = [
  { id: 'action', name: 'Action', color: 'from-red-500 to-orange-500' },
  { id: 'drama', name: 'Drama', color: 'from-blue-500 to-purple-500' },
  { id: 'scifi', name: 'Sci-Fi', color: 'from-cyan-500 to-blue-500' },
  { id: 'thriller', name: 'Thriller', color: 'from-green-500 to-teal-500' },
];

export default function CategorySection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-75`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
              {category.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
