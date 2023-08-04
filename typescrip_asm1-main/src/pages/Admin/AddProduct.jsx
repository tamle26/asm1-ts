import React, { useState } from 'react';

const AddProductPage = ({ addProduct }) => {
  const [data, setData] = useState({ name: '', price: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    const newData = { ...data, [name]: value };
    setData(newData);
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    if (!data.name || !data.price) {
      setSubmitError('Đã thêm thành công.');
      setIsSubmitting(false);
      return;
    }

    try {
      await addProduct(data);
      alert('thêm thành công!');
      setData({ name: '', price: '' });
    } catch (error) {
      console.error(error);
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input type="text" placeholder="Enter Product Name" value={data.name} onChange={onHandleChange} name="name" /><br />
        <input type="number" placeholder="Enter Product Price" value={data.price} onChange={onHandleChange} name="price" /><br />
        <input type="url" placeholder="Enter Product image" value={data.image} onChange={onHandleChange} name="image" /><br />
        <button disabled={isSubmitting}>{isSubmitting ? 'Adding...' : 'Add New'}</button>
      </form>
      {submitError && <div>Error adding product: {submitError}</div>}
    </div>
  );
};

export default AddProductPage;