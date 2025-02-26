// File: client/src/components/products/ProductForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../actions/product';
import { toast } from 'react-toastify';

const ProductForm = ({ addProduct, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    condition: '',
    photos: []
  });

  const { title, description, category, price, condition } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFileChange = e => {
    setFormData({ ...formData, photos: e.target.files });
  };

  const onSubmit = e => {
    e.preventDefault();
    const productData = new FormData();
    productData.append('title', title);
    productData.append('description', description);
    productData.append('category', category);
    productData.append('price', price);
    productData.append('condition', condition);
    
    // Append all photos
    for (let i = 0; i < formData.photos.length; i++) {
      productData.append('photos', formData.photos[i]);
    }
    
    addProduct(productData, history);
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Add Product</h1>
      <p className="lead">List a product you want to sell</p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Description"
            name="description"
            value={description}
            onChange={onChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <select name="category" value={category} onChange={onChange} required>
            <option value="">* Select Category</option>
            <option value="Textbooks">Textbooks</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothing">Clothing</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={price}
            onChange={onChange}
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <select name="condition" value={condition} onChange={onChange} required>
            <option value="">* Select Condition</option>
            <option value="New">New</option>
            <option value="Like New">Like New</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="file"
            name="photos"
            onChange={onFileChange}
            multiple
          />
          <small className="form-text">Upload up to 5 images (optional)</small>
        </div>
        <input type="submit" className="btn btn-primary" value="List Product" />
      </form>
    </section>
  );
};

export default connect(null, { addProduct })(ProductForm);