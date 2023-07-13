import React from 'react';
import placeholderImage from '../images/island_beach_aerial_view.jpg';
import { useNavigate } from "react-router-dom";

const ResultsRow = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    // we must send data also
    navigate("/packageinfo");
  };

  return (
    <div className="row product" onClick={handleClick}>
      <div className="col-md-2">
        <img src={placeholderImage} alt="Placeholder Image" height="150" />
      </div>
      <div className="col-md-8 product-detail">
        <h4>Blue T-Shirt </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="col-md-2 product-price">
        $19.99
      </div>
    </div>
  );
}

export default ResultsRow;