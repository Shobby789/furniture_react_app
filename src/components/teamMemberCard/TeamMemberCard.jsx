import React from "react";
import { Link } from "react-router-dom";

export default function TeamMemberCard({ id, name, designation, image }) {
  return (
    <>
      <div
        className="card border-0"
        style={{ width: "18rem", background: "#F6F0F0" }}
        id={id}
      >
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body text-left ps-0">
          <h5 className="card-title text-decoration-underline">{name}</h5>
          <h6 className="card-text mt-3">{designation}</h6>
          <p className="card-text mb-2 mt-3" style={{ fontSize: "15px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo
            rem quis eveniet fugit voluptatum.
          </p>
          <Link to="/" className="text-dark text-decoration-underline">
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
}
