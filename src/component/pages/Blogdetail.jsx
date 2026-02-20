import { useParams, Link } from 'react-router-dom';
import techimg from '../../assets/tech.jpg';
import laptop from '../../assets/laptop.jpg';
import newtech from '../../assets/newtech.jpg';
import comp from '../../assets/comp.jpg';
import machine from '../../assets/machine.png';
import techy from '../../assets/techillustration.png';
const blogs = [
  { id: 1, title: "The Rise of AI: Transforming Industries", category: "Technology", author: "John Doe", date: "Feb 17, 2026", slug: "rise-of-ai", image: machine, content: "Artificial intelligence is transforming industries across the globe. From healthcare to creative arts, AI is making significant impacts. In healthcare, AI helps diagnose diseases earlier and more accurately. In creative industries, AI assists artists and designers in creating stunning visuals. The future of AI is bright, and we are just beginning to scratch the surface of what's possible." },
  { id: 2, title: "Modern Web Development Trends", category: "Programming", author: "Jane Smith", date: "Feb 15, 2026", slug: "web-development-trends", image: techy, content: "Web development is constantly evolving. New frameworks like React, Vue, and Svelte are changing how we build websites. Server-side rendering and static site generation are becoming mainstream. Progressive Web Apps (PWAs) are bridging the gap between web and mobile. Stay updated with these trends to build better websites." },
  { id: 3, title: "UX Principles for 2026", category: "Design", author: "Mike Johnson", date: "Feb 13, 2026", slug: "ux-principles-2026", image: newtech, content: "User experience design continues to evolve. In 2026, the focus is on accessibility, personalization, and micro-interactions. Users expect websites to be fast, intuitive, and inclusive. Good UX design can make or break a product. Keep these principles in mind when designing your next project." },
  { id: 4, title: "The Future of Blockchain", category: "Technology", author: "Sarah Lee", date: "Feb 11, 2026", slug: "future-of-blockchain", image: techimg, content: "Blockchain technology is more than just cryptocurrency. It's revolutionizing supply chain, voting systems, and digital identity. Smart contracts are automating business processes. Decentralized apps (dApps) are gaining popularity. The potential of blockchain is immense." },
  { id: 5, title: "Building Scalable APIs", category: "Programming", author: "David Kim", date: "Feb 9, 2026", slug: "building-scalable-apis", image: comp, content: "A well-designed API is crucial for scalable applications. REST and GraphQL are popular choices. Focus on clear endpoints, proper error handling, and authentication. Use caching and rate limiting to improve performance. Document your API thoroughly for developers." },
  { id: 6, title: "Mobile-First Design Strategy", category: "Design", author: "Emily Chen", date: "Feb 7, 2026", slug: "mobile-first-design", image: laptop, content: "Mobile-first design is no longer optional. More people browse on mobile than desktop. Start with mobile designs and scale up. Focus on touch-friendly interfaces and fast load times. Test on real devices to ensure compatibility. A good mobile experience is essential for success." },
];

const Blogdetail = () => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) return <div className="pt-24 text-center">Blog not found</div>;

  return (
    <div className="min-h-screen pt-24 px-6 bg-stone-50">
      <div className="max-w-3xl mx-auto">
        <Link to="/blogs" className="text-orange-500 hover:underline">← Back to Blogs</Link>
        
        <img src={blog.image} alt={blog.category} className="w-full h-64 object-cover rounded-lg mt-6" />
        
        <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase px-3 py-1 mt-6">{blog.category}</span>
        <h1 className="text-3xl font-bold text-stone-900 mt-4">{blog.title}</h1>
        <p className="text-stone-500 mt-2">{blog.author} • {blog.date}</p>
        
        <div className="mt-8 text-stone-700 leading-relaxed">
          <p>{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Blogdetail;
