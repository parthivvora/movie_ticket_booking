import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/main.css";
import apiRoutes from "../../constant/apiRoutes";
import BlogSidebar from "../../components/BlogSidebar";
import { BiConversation, BiShareAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const { blogId } = useParams();
  const { isLoading, blogData } = useSelector((state) => state.blog);

  const filteredBlogData = blogData.filter((blog) => blog._id === blogId);

  return (
    <div className="blog-details-part">
      <Navbar />
      {isLoading && <h1>Loading</h1>}
      <section className="main-page-header speaker-banner bg_img">
        <div className="container">
          <div className="speaker-banner-content">
            <h2 className="title">blog single</h2>
            <ul className="breadcrumb">
              <li>
                <a href={apiRoutes.HOME}>Home</a>
              </li>
              <li>
                <a href={apiRoutes.BLOG}>blog</a>
              </li>
              <li>blog single</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="blog-section padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center mb-30-none">
            <div className="col-lg-8 mb-50 mb-lg-0">
              <article>
                <div className="post-item post-details">
                  <div className="post-thumb">
                    <img src={filteredBlogData[0]?.blogImage} alt="blog-img" />
                  </div>
                  <div className="post-content">
                    <div className="post-meta text-center">
                      <div className="item">
                        <a href="#0">
                          <BiConversation className="comment-icon" />
                          <span>30</span>
                        </a>
                      </div>
                      <div className="item">
                        <a href="#0">
                          <BiShareAlt className="share-icon" />
                          <span>22</span>
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="entry-content p-0">
                        <div className="left">
                          <span className="date">
                            {new Date(
                              filteredBlogData[0]?.createdAt
                            ).toLocaleString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}{" "}
                            BY{" "}
                          </span>
                        </div>
                      </div>
                      <div className="post-header">
                        <h4 className="m-title">
                          {filteredBlogData[0]?.blogTitle}
                        </h4>
                        <p>{filteredBlogData[0]?.blogDescription}</p>
                      </div>
                      <div className="tags-area">
                        <ul className="social-icons">
                          <li>
                            <a href="#0">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#0" className="active">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#0">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#0">
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a href="#0">
                              <i className="fab fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-comment">
                  <h5 className="title">comments</h5>
                  <ul className="comment-area">
                    <li>
                      <div className="blog-thumb">
                        <a href="#0">
                          <img
                            src={require("../../images/blog/author.jpg")}
                            alt="blog"
                          />
                        </a>
                      </div>
                      <div className="blog-thumb-info">
                        <span>13 days ago</span>
                        <h6 className="title">
                          <a href="#0">carl morgan</a>
                        </h6>
                      </div>
                      <div className="blog-content">
                        <p>
                          Maecenas at velit eu erat egestas vestibulum id ut
                          tellus. Sed et semper mauris. Quisque eu lorem libero.
                          Donec finibus metus tellus, eget rutrum est mattis
                          non.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="leave-comment">
                    <h5 className="title">leave comment</h5>
                    <form className="blog-form">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Enter Your Full Name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Enter Your Email Address"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <textarea placeholder="Write A Message" required />
                      </div>
                      <div className="form-group">
                        <input type="submit" defaultValue="Submit Now" />
                      </div>
                    </form>
                  </div>
                </div>
              </article>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BlogDetails;
