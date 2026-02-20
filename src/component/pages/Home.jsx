import LatestStories from '../LatestStories';
import Who_we_are from '../Who_we_are';
import techimg from '../../assets/tech.jpg';
import Footer from '../Footer';

const Home = () => {
  return (
    
    <div>
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${techimg})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        {/* Now create div for adding */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-orange-500 italic text-xs md:text-sm tracking-[0.3em] uppercase font-medium mb-6">
            Welcome to the future
          </p>

          <h1 className="italic text-7xl font-bold mb-8 leading-[0.95]">
            <span className="block text-white">The Tech</span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-200">
              Chronicles
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light">
            Curated insights on technology, programming, and the ideas shaping tomorrow's digital landscape.
          </p>
          
          <button className="px-10 py-4 bg-transparent border border-white/30 text-white font-medium tracking-wider uppercase text-sm hover:bg-white hover:text-black transition">
            Explore Articles
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>
        {/* All other sections*/}
      <LatestStories />
      <Who_we_are />
    </div>
  );
};

export default Home;
