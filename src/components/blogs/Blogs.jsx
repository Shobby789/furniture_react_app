import React from "react";
import "./Blogs.css";
import blog1 from "../../images/blog1.jpg";
import blog2 from "../../images/blog2.jpg";
import blog3 from "../../images/blog3.jpg";

export default function Blogs() {
  return (
    <>
      <div className="container-fluid mb-5" style={{ fontFamily: "ui-serif" }}>
        <div className="container d-flex justify-content-between">
          <h3 className="text-dark fw-semibold">Recent Blog</h3>
          <a href="/blog" className="text-dark fw-semibold fs-5">
            View All Posts
          </a>
        </div>
        <div className="container-fluid blogs-container d-flex justify-content-evenly flex-wrap mt-3">
          {/* Blog 1 */}
          <div
            className="card border-0"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <img src={blog1} className="card-img-top rounded" alt="..." />
            <div
              className="card-body fw-semibold"
              style={{ background: "#F6F0F0" }}
            >
              <p className="card-text mb-1 fs-6" style={{ fontSize: "15px" }}>
                Firt Time Home Owner Ideas
              </p>
              <p className="card-text fs-6" style={{ fontSize: "13px" }}>
                by <span className="fw-semibold"> Kritin Watson</span> on{" "}
                <span className="fw-semibold">Dec 19, 2021</span>
              </p>
            </div>
          </div>

          {/* Blog 2 */}
          <div
            className="card border-0"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <img src={blog2} className="card-img-top rounded" alt="..." />
            <div className="card-body" style={{ background: "#F6F0F0" }}>
              <p
                className="card-text fw-semibold mb-1 fs-6"
                style={{ fontSize: "15px" }}
              >
                How to Keep Your Furniture Clean
              </p>
              <p className="card-text fs-6" style={{ fontSize: "13px" }}>
                by <span className="fw-semibold"> Robert Fox </span>on
                <span className="fw-semibold"> Dec 15, 2021</span>
              </p>
            </div>
          </div>

          {/* Blog 3 */}
          <div
            className="card border-0"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <img src={blog3} className="card-img-top rounded" alt="..." />
            <div className="card-body" style={{ background: "#F6F0F0" }}>
              <p
                className="card-text fw-semibold mb-1 fs-6"
                style={{ fontSize: "15px" }}
              >
                Small Space Furniture Apartment Ideas
              </p>
              <p className="card-text fs-6" style={{ fontSize: "13px" }}>
                by <span className="fw-semibold"> Kritin Watson</span> on{" "}
                <span className="fw-semibold">Dec 17, 2021</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
