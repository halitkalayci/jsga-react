import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import ColorService from '../../services/ColorService';
import { myValidation } from './AddCarValidations';
import BrandService from '../../services/BrandService';
import CarService from '../../services/CarService';
import toastr from 'toastr';
import BaseInput from '../../components/BaseInput/BaseInput';
import BaseSelect from '../../components/BaseSelect/BaseSelect';
// rfce
function AddCar() {
 // formik, yup

 const [initialForm, setinitialForm] = useState({
  modelYear: 0,
  brandId: 0,
  dailyPrice: 0,
  colorId: 0,
  plate: '',
  description: '',
  state: -1
 });

 const [colors, setColors] = useState([]);
 const [brands, setBrands] = useState([]);
 useEffect(() => {
  fetchColorsFromAPI();
  fetchBrandsFromAPI();
 }, []);

 const fetchColorsFromAPI = async () => {
  let colorService = new ColorService();
  colorService.getAll().then((response) => setColors(response.data));
 };

 const fetchBrandsFromAPI = async () => {
  let brandService = new BrandService();
  brandService.getAll().then((response) => setBrands(response.data));
 };
 // Interceptor
 return (
  <div className="container">
   <div className="row">
    <div className="col-12">
     <Formik
      initialValues={initialForm}
      onSubmit={(values) => {
       let carService = new CarService();
       carService.addCar(values).then((response) => {
        // API'den başarılı cevap dönme durumu
        toastr.success('Araba başarıyla eklendi.', '', {
         positionClass: 'toast-bottom-right'
        });
       });
      }}
      validationSchema={myValidation}
     >
      <Form>
       <BaseInput label="Model Yılı" name="modelYear" type="number" />
       <BaseInput label="Plaka" name="plate" type="text" />
       <BaseInput label="Açıklama" name="description" type="text" />
       <BaseInput label="Günlük Ücret" name="dailyPrice" type="number" />
       <BaseSelect
        data={colors}
        name="colorId"
        label="Renk"
        placeHolder="Lütfen renk seçiniz"
       />
       <BaseSelect
        name="state"
        label="Durum"
        placeHolder="Lütfen durum seçiniz"
        placeHolderValue="-1"
        data={[
         { id: 0, name: 'Available' },
         { id: 1, name: 'Rented' },
         { id: 2, name: 'Maintenance' }
        ]}
       />

       <BaseSelect
        name="brandId"
        data={brands}
        label="Marka"
        placeHolder="Lütfen marka seçiniz"
       />

       <button type="submit" className="btn btn-secondary mt-2">
        Ekle
       </button>
      </Form>
     </Formik>
    </div>
   </div>
  </div>
 );
}

export default AddCar;
