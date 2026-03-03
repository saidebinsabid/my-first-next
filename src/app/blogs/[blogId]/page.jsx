import React from 'react';
import blog from '../../data/blog.json';


const BlogDetailsPage = async({ params }) => {
    const id = parseInt((await params).blogId)
  const singleBlog = blog.find(b => b.id === id);
  console.log(singleBlog);
  if (!singleBlog) return <p>Blog not found!</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{singleBlog.title}</h1>
      <img
        src={singleBlog.image}
        alt={singleBlog.title}
        className="w-full h-64 object-cover my-4"
      />
      <p>{singleBlog.details}</p>
    </div>
  );
};

export default BlogDetailsPage;
