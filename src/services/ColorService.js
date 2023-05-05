import axiosInstance from '../utils/axiosInterceptors';

export default class ColorService {
    getAll() {
        return axiosInstance.get('colors');
    }
}
