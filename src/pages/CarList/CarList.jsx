import React, { useEffect, useState } from "react";
import CarCard from "../../components/CarCard/CarCard";
import CarService from "../../services/CarService";

function CarList() {
  useEffect(() => {
    fetchCarsFromAPI();
  }, []);

  const [carArray, setcarArray] = useState([]);

  const fetchCarsFromAPI = async () => {
    let carService = new CarService();
    let data = await carService.getAll();
    setcarArray(data);
  };
  return (
    <div className="container">
      <div className="row gx-1 gy-2">
        {carArray.map((car, index) => {
          return (
            <div key={index} className="col-4">
              <CarCard car={car}></CarCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CarList;
