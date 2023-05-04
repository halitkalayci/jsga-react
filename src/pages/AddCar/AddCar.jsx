import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import ColorService from "../../services/ColorService";
import { myValidation } from "./AddCarValidations";
import BrandService from "../../services/BrandService";
import CarService from "../../services/CarService";
// rfce
function AddCar() {
  // formik, yup

  const [initialForm, setinitialForm] = useState({
    modelYear: 0,
    brandId: 0,
    dailyPrice: 0,
    colorId: 0,
    plate: "",
    description: "",
    state: -1,
  });

  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetchColorsFromAPI();
    fetchBrandsFromAPI();
  }, []);

  const fetchColorsFromAPI = async () => {
    let colorService = new ColorService();
    let data = await colorService.getAll();
    setColors(data);
  };

  const fetchBrandsFromAPI = async () => {
    let brandService = new BrandService();
    let data = await brandService.getAll();
    setBrands(data);
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
              carService
                .addCar(values)
                .then((response) => {
                  // API'den başarılı cevap dönme durumu
                  alert("Araba başarıyla eklendi.");
                })
                .catch((error) => {
                  alert("Araba eklerken hata oluştu.");
                  // Error dönme durumu
                });
            }}
            validationSchema={myValidation}
          >
            <Form>
              <div className="form-group">
                <label>Model Yılı</label>
                <Field
                  className="form-control"
                  name="modelYear"
                  type="number"
                />
                <ErrorMessage name="modelYear">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="form-group">
                <label>Plaka</label>
                <Field className="form-control" name="plate" type="text" />
                <ErrorMessage name="plate">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="form-group">
                <label>Açıklama</label>
                <Field
                  className="form-control"
                  name="description"
                  type="text"
                />
                <ErrorMessage name="description">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Renk</label>
                {/* <Field className="form-control" name="colorId" type="number" /> */}
                <Field as="select" name="colorId" className="form-select">
                  <option value="0" disabled>
                    Lütfen seçiniz
                  </option>
                  {colors.map((color) => (
                    <option key={color.id} value={color.id}>
                      {color.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="colorId">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="form-group">
                <label>Durum</label>
                {/* <Field className="form-control" name="state" type="number" /> */}
                <Field className="form-select" name="state" as="select">
                  <option value="-1" disabled>
                    Lütfen seçiniz
                  </option>
                  <option value="0">Available</option>
                  <option value="1">Rented</option>
                  <option value="2">Maintenance</option>
                </Field>

                <ErrorMessage name="state">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="form-group">
                <label>Günlük Ücret</label>
                <Field
                  className="form-control"
                  name="dailyPrice"
                  type="number"
                />
                <ErrorMessage name="dailyPrice">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="form-group">
                <label>Marka</label>
                {/* <Field className="form-control" name="brandId" type="number" />
                 */}
                <Field as="select" name="brandId" className="form-select">
                  <option value={0} disabled>
                    Lütfen seçiniz
                  </option>
                  {brands.map((brand) => (
                    <option value={brand.id}>{brand.name}</option>
                  ))}
                </Field>
                <ErrorMessage name="brandId"></ErrorMessage>
              </div>

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
