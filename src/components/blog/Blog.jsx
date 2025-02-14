import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      date: "Feb 14, 2025",
      excerpt: "Learn the fundamentals of React and start building modern web applications.",
      image: "blog1.jpg",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Modern Web Development Practices",
      date: "Feb 10, 2025",
      excerpt: "Explore the latest trends and best practices in web development.",
      image: "blog2.jpg",
      readTime: "7 min read"
    },
    // Add more blog posts here
  ];

  return (
    <section className="blog section" id="blog">
      <h2 className="section__title">Blog</h2>
      <span className="section__subtitle">My Latest Posts</span>

      <div className="blog__container container grid">
        {blogPosts.map((post) => (
          <article className="blog__card" key={post.id}>
            <div className="blog__image">
              <img src={post.image} alt={post.title} />
              <span className="blog__date">{post.date}</span>
            </div>
            <div className="blog__content">
              <h3 className="blog__title">{post.title}</h3>
              <p className="blog__excerpt">{post.excerpt}</p>
              <div className="blog__footer">
                <span className="blog__read-time">{post.readTime}</span>
                <a href="#" className="blog__read-more">
                  Read More <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
