import React from 'react';
import Link from 'next/link';

const BlogCard = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <div className="border p-4 rounded shadow cursor-pointer">
        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
        <h2 className="text-lg font-bold mt-2">{blog.title}</h2>
      </div>
    </Link>
  );
};

export default BlogCard;
