import React from 'react'
import './Blog.css'

function Blog() {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="blog-post">
        <h2>Post Title 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, quam eget malesuada tincidunt, metus nisl fringilla justo, ac egestas nisl ipsum id ligula.</p>
      </div>
      <div className="blog-post">
        <h2>Post Title 2</h2>
        <p>Phasellus fermentum luctus nunc, a vestibulum orci vestibulum a. Nullam lacinia tortor felis, a iaculis ipsum dictum non. Donec aliquet, velit vitae suscipit volutpat, metus tortor volutpat nunc, in tristique velit libero et lacus.</p>
      </div>
    </div>
  )
}

export default Blog