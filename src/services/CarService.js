import axios from "axios";
// axios
export default class CarService {
  async getAll() {
    let response = await axios.get("https://localhost:7050/details");
    return response.data;
  }

  addCar(car) {
    // let response = await axios.post("https://localhost:7050/api/cars", car);
    // return response;
    return axios.post("https://localhost:7050/api/cars", car);
  }
}
