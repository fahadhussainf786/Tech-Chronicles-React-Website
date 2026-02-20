import { Link } from 'react-router-dom';
import techimg from '../../assets/tech.jpg';
import laptop from '../../assets/laptop.jpg';
import newtech from '../../assets/newtech.jpg';
import comp from '../../assets/comp.jpg';
import machine from '../../assets/machine.png';
import techy from '../../assets/techillustration.png';
const blogs = [
  { id: 1, title: "The Rise of AI: Transforming Industries", category: "Technology", summary: "Explore how artificial intelligence is revolutionizing everything from healthcare to creative arts.", slug: "rise-of-ai", image: machine, content: "Artificial intelligence is transforming industries across the globe. From healthcare to creative arts, AI is making significant impacts. In healthcare, AI helps diagnose diseases earlier and more accurately. In creative industries, AI assists artists and designers in creating stunning visuals. The future of AI is bright, and we are just beginning to scratch the surface of what's possible." },
  { id: 2, title: "Modern Web Development Trends", category: "Programming", summary: "Stay ahead with cutting-edge frameworks and methodologies.", slug: "web-development-trends", image: techy, content: "Web development is constantly evolving. New frameworks like React, Vue, and Svelte are changing how we build websites. Server-side rendering and static site generation are becoming mainstream. Progressive Web Apps (PWAs) are bridging the gap between web and mobile. Stay updated with these trends to build better websites." },
  { id: 3, title: "UX Principles for 2026", category: "Design", summary: "Creating memorable digital experiences that resonate.", slug: "ux-principles-2026", image: newtech, content: "User experience design continues to evolve. In 2026, the focus is on accessibility, personalization, and micro-interactions. Users expect websites to be fast, intuitive, and inclusive. Good UX design can make or break a product. Keep these principles in mind when designing your next project." },
  { id: 4, title: "The Future of Blockchain", category: "Technology", summary: "Understanding blockchain beyond cryptocurrency.", slug: "future-of-blockchain", image: techimg, content: "Blockchain technology is more than just cryptocurrency. It's revolutionizing supply chain, voting systems, and digital identity. Smart contracts are automating business processes. Decentralized apps (dApps) are gaining popularity. The potential of blockchain is immense." },
  { id: 5, title: "Building Scalable APIs", category: "Programming", summary: "Best practices for designing robust APIs.", slug: "building-scalable-apis", image: comp, content: "A well-designed API is crucial for scalable applications. REST and GraphQL are popular choices. Focus on clear endpoints, proper error handling, and authentication. Use caching and rate limiting to improve performance. Document your API thoroughly for developers." },
  { id: 6, title: "Mobile-First Design Strategy", category: "Design", summary: "Why mobile-first is essential for modern websites.", slug: "mobile-first-design", image: laptop, content: "Mobile-first design is no longer optional. More people browse on mobile than desktop. Start with mobile designs and scale up. Focus on touch-friendly interfaces and fast load times. Test on real devices to ensure compatibility. A good mobile experience is essential for success." },
];

const Blogs = () => {
  return (
    <div className='min-h-screen pt-30 bg-stone-100'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold mb-12 text-black'>
          Latest <span className='text-orange-400'>Blogs</span>
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-9 text-stone-500 mb-10'>
          {blogs.map((blog) => (
            <Link key={blog.id} to={`/blogs/${blog.slug}`} className="bg-white rounded-sm shadow-lg overflow-hidden group block">
              <img src={blog.image} alt={blog.category} className="w-full h-48 object-cover group-hover:scale-105 transition" />
              <div className='p-6'>
                <span className='text-orange-400 text-sm font-bold'>{blog.category}</span>
                <h3 className='text-lg font-bold '>{blog.title}</h3>
                <p className=' text-stone-800'>{blog.summary}</p>
              </div>
            </Link>
          ))}  
        </div>
      </div>
    </div>
  );
};

export default Blogs;
