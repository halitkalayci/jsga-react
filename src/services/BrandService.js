import axios from "axios";

export default class BrandService {
  async getAll() {
    let response = await axios.get("https://localhost:7050/api/brands");
    return response.data;
  }
}
