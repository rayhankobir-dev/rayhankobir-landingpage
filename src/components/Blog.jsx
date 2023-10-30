function Blog() {
  return (
    <section className="appie-blog-3-area pt-90 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="appie-section-title text-center">
              <h3 className="appie-title">Latest blog posts</h3>
              <p>The app provides design and digital marketing.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="appie-blog-item-3 mt-30">
              <div className="thumb">
                <img src="./images/blog-1.jpg" alt="" />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="/news/single-news">
                    How to Improve Your App Store Position
                  </a>
                </h5>
                <div className="meta-item">
                  <ul>
                    <li>
                      <i className="fal fa-clock" /> July 14, 2022
                    </li>
                    <li>
                      <i className="fal fa-comments" /> July 14, 2022
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="appie-blog-item-3 mt-30">
              <div className="thumb">
                <img src="./images/blog-2.jpg" alt="" />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="/news/single-news">
                    Introducing New App Design for our iOS App
                  </a>
                </h5>
                <div className="meta-item">
                  <ul>
                    <li>
                      <i className="fal fa-clock" /> July 14, 2022
                    </li>
                    <li>
                      <i className="fal fa-comments" /> July 14, 2022
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="appie-blog-item-3 mt-30">
              <div className="thumb">
                <img src="./images/blog-3.jpg" alt="" />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="/news/single-news">
                    Engineering job is Becoming More interesting.
                  </a>
                </h5>
                <div className="meta-item">
                  <ul>
                    <li>
                      <i className="fal fa-clock" /> July 14, 2022
                    </li>
                    <li>
                      <i className="fal fa-comments" /> July 14, 2022
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="appie-blog-item-3 mt-30">
              <div className="thumb">
                <img src="./images/blog-4.jpeg" alt="" />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="/news/single-news">
                    20 Myths About Mobile Applications
                  </a>
                </h5>
                <div className="meta-item">
                  <ul>
                    <li>
                      <i className="fal fa-clock" /> July 14, 2022
                    </li>
                    <li>
                      <i className="fal fa-comments" /> July 14, 2022
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="blog-btn text-center mt-60">
              <a className="main-btn" href="/blogs">
                View All Posts <i className="fal fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
