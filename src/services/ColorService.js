import axios from "axios";

export default class ColorService {
  async getAll() {
    let response = await axios.get("https://localhost:7050/api/colors");
    return response.data;
  }
}
