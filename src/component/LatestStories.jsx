import techimg from '../assets/tech.jpg';

export default function LatestStories() {
  
  return (
    // Section and then div for content
    <section className="py-24 px-6 bg-stone-50"> 
      <div className="max-w-6xl mx-auto">

          <div className="w-12 h-0.5 bg-orange-500 mb-4" />
          <span className="block text-orange-500 text-sm tracking-widest uppercase mb-10">Featured</span>
        
        <h2 className="text-4xl font-bold text-stone-900 mb-12">
          Latest <span className="text-orange-500">Stories</span>
        </h2>

        {/* Grid columns for stories */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-sm shadow-lg overflow-hidden group">
            <img src={techimg} alt="Technology" className="w-full h-80 object-cover group-hover:scale-105 transition" />
            
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute bottom-0 p-6">
              <span className="bg-orange-500 text-white text-xs font-bold uppercase px-3 py-1">Technology</span>
              <h3 className="text-2xl text-white font-bold mt-3">The Rise of AI: Transforming Industries</h3>
              <p className="text-gray-300 text-sm mt-2">John Doe • Feb 17, 2026</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex bg-white rounded-sm shadow-lg overflow-hidden group">
              <img src={techimg} alt="Programming" className="w-32 h-full object-cover group-hover:scale-105 transition" />
              <div className="p-5">
                <span className="text-orange-500 text-xs font-bold uppercase">Programming</span>
                <h3 className="text-lg font-bold text-stone-900 mt-1">Modern Web Development Trends</h3>
              </div>
            </div>

            <div className="flex bg-white rounded-sm shadow-lg overflow-hidden group">
              <img src={techimg} alt="Design" className="w-32 h-full object-cover group-hover:scale-105 transition" />
              <div className="p-5">
                <span className="text-orange-500 text-xs font-bold uppercase">Design</span>
                <h3 className="text-lg font-bold text-stone-900 mt-1">UX Principles for 2026</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 border-2 border-stone-900 text-stone-900 font-semibold uppercase text-sm hover:bg-stone-900 hover:text-white transition">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
}
