import React from "react";
import { Link } from "react-router-dom";

export default function DrinkCard(props) {
  return (
    <div className="col-auto mb-4">
      <div className="card">
        <a href={`/drink/${props.id}`} className="card-link">
          <img src={props.img} className="card-img-top" alt="..."></img>
        </a>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <Link to={`/drink/${props.id}`} className="card-link">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
