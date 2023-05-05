import * as Yup from 'yup';
export const myValidation = Yup.object().shape({
    modelYear: Yup.number()
        .required('Bu alan zorunludur.')
        .min(2010, 'Model yılı en az 2010 olmalıdır.')
        .max(2023, 'Model yılı en fazla 2023 olmalıdır.'),
    brandId: Yup.number().required().min(1),
    dailyPrice: Yup.number().required().min(100),
    colorId: Yup.number().required().min(1),
    plate: Yup.string()
        .required()
        .matches(/\d{2}\s[A-Z]{1,3}\s\d{2,4}/, 'Plaka düzgün girilmedi.'),
    description: Yup.string().required().min(1),
    state: Yup.number().required().min(0, 'Lütfen geçerli bir durum seçiniz.')
});
