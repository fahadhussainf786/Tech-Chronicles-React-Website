import { Link } from 'react-router-dom';

const blogs = [
  { id: 1, title: "Getting Started with React", summary: "Learn the basics of React and how to build your first app.", slug: "getting-started-react" },
  { id: 2, title: "JavaScript ES6 Features", summary: "Discover the powerful features introduced in ES6.", slug: "javascript-es6" },
  { id: 3, title: "CSS Grid vs Flexbox", summary: "When to use Grid and when to use Flexbox.", slug: "css-grid-flexbox" },
  { id: 4, title: "Building a Blog App", summary: "Step by step guide to create a blog application.", slug: "building-blog-app" },
];
//Now design one card component for all blogs
const BlogCard = () => {
  return (//first create container for all blogs
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-10">Latest Blogs</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-3">{blog.summary}</p>
            <Link to={`/blogs/${blog.slug}`} className="text-blue-500 hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
