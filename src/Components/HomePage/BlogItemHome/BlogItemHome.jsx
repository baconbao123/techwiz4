import React, { useState } from "react";
import "./BlogItemHome.scss";
import { blog } from "../../../Data/Blog";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BlogItemHome.scss";
import BlogItem from "../../BlogPage/BlogItem";
function BlogItemHome() {
  const [numPosts, setNumPosts] = useState(3);
  return (
    <div className="container">
        
      <div className="row ">
        {blog.slice(0, numPosts).map((item, index) => (
          <>
            <Col lg={4} md={6} sm={12} className="contain">
              <Link
                to={`/blog/${item.id}`}
                className="link-direct d-inline-block mb-4"
              >
                <BlogItem key={item.id} item={item} />
              </Link>
            </Col>
          </>
        ))}
      </div>
      <div className="row ">
         <Link to="/blog" className="text-center">
        <button className="learn-more mb-5">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text" >All Posts</span>
        </button>
      </Link>
      </div>
     
    </div>
  );
}

export default BlogItemHome;
