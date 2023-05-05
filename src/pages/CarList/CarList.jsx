import React, { useEffect, useState } from 'react';
import CarCard from '../../components/CarCard/CarCard';
import CarService from '../../services/CarService';
import { useNavigate } from 'react-router-dom';

function CarList() {
    const [carArray, setcarArray] = useState([]);

    useEffect(() => {
        fetchCarsFromAPI();
    }, []);

    const fetchCarsFromAPI = async () => {
        let carService = new CarService();

        carService
            .getAll()
            .then((response) => {
                setcarArray(response.data);
            })
            .finally(() => {});
    };
    const navigate = useNavigate();

    const goToRental = () => {
        navigate('/rental');
    };

    return (
        <div className="container">
            <div className="row gx-1 gy-2 mt-5">
                <button onClick={goToRental} className="btn btn-primary">
                    Rental'e Git
                </button>
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
