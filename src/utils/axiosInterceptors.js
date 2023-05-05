// tek bir axios instance üreticez
// konfigurasyonlar sabit kalmalı
import toastr from 'toastr';

import axios from 'axios';
import { translationsTR } from './translations';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7050/api/'
});

axiosInstance.interceptors.request.use((config) => {
    // isteğe giderken yapılacak işlemler
    config.headers.Authorization = 'Deneme';
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        // cevap döndüğünde yapılacak işlemler
        return response;
    },
    (error) => {
        // hata döndüğünde yapılacak işlemler
        if (
            error.response &&
            error.response.data &&
            error.response.data.Message
        ) {
            let keyword = error.response.data.Message;
            toastr.error(translationsTR[keyword], '', {
                timeOut: 2000,
                extendedTimeOut: 1000,
                closeButton: true,
                progressBar: true,
                positionClass: 'toast-top-left'
            });
        } else {
            toastr.error('Bir hata oluştu');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
