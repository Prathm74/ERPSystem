import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProductForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    resetForm();
  }

  const validationSchema = Yup.object().shape({
    productName: Yup.string().required('Product Name is required'),
    category: Yup.string().required('Category is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    stock: Yup.number().required('Stock is required').integer('Stock must be an integer').positive('Stock must be positive')
  });

  return (
    <div>
      <h3>Add Product</h3>
      <Formik
        initialValues={{
          productName: '',
          category: '',
          price: '',
          stock: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className='product-form'>
            <div>
              <Field type="text" name="productName" placeholder="Product Name" />
              <ErrorMessage name="productName" component="div" className="error" />
            </div>
            <div>
              <Field type="text" name="category" placeholder="Category" />
              <ErrorMessage name="category" component="div" className="error" />
            </div>
            <div>
              <Field type="number" name="price" placeholder="Price" />
              <ErrorMessage name="price" component="div" className="error" />
            </div>
            <div>
              <Field type="number" name="stock" placeholder="Stock" />
              <ErrorMessage name="stock" component="div" className="error" />
            </div>
            <button type="submit">Add Product</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProductForm;
