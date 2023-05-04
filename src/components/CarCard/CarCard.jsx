import React from "react";

function CarCard(props) {
  const getImgUrl = (imagePath) => {
    return "https://localhost:7050/images/" + imagePath;
  };

  return (
    <>
      <div></div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={getImgUrl(props.car.imagePath)} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.car.brandName}</h5>
          <p className="card-text">
            Günlük Ücret: {props.car.dailyPrice}₺ <br />
            Yıl: {props.car.modelYear} <br />
            Renk: {props.car.colorName}
          </p>
          <a href="#" className="btn btn-primary">
            Kirala
          </a>
        </div>
      </div>
    </>
  );
}

export default CarCard;
