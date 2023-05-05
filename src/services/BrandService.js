import axiosInstance from '../utils/axiosInterceptors';

export default class BrandService {
    getAll() {
        return axiosInstance.get('brands');
    }
}
