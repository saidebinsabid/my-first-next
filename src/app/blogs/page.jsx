import React from 'react';
import blog from '../../app/data/blog.json';
import BlogCard from '../components/BlogCard';


const BlogPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      {blog.map(b => (
        <BlogCard key={b.id} blog={b} />
      ))}
    </div>
  );
};

export default BlogPage;
