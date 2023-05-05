import axiosInstance from '../utils/axiosInterceptors';
// axios

// https://localhost:7050/api/
export default class CarService {
    getAll() {
        return axiosInstance.get('cars/details');
    }
    addCar(car) {
        return axiosInstance.post('cars', car);
    }
}
