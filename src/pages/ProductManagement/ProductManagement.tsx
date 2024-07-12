
import './ProductManagement.css'; // Import CSS file for styling

import ProductList from '../../components/ProductManagementComponent/ProductList';


const ProductManagement = () => {


  return (
    // <div className="product-management-container py-16">
    //   <h2>Product Management</h2>

    //   <form onSubmit={handleSubmit} className="product-form">
    //     <div className="form-group">
    //       <label htmlFor="name">Name:</label>
    //       <input
    //         type="text"
    //         id="name"
    //         name="name"
    //         value={product.name}
    //         onChange={handleInputChange}
    //         className="form-control"
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="price">Price:</label>
    //       <input
    //         type="number"
    //         id="price"
    //         name="price"
    //         value={product.price}
    //         onChange={handleInputChange}
    //         className="form-control"
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="description">Description:</label>
    //       <textarea
    //         id="description"
    //         name="description"
    //         value={product.description}
    //         onChange={handleInputChange}
    //         className="form-control"
    //         rows={3}
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="category">Category:</label>
    //       <input
    //         type="text"
    //         id="category"
    //         name="category"
    //         value={product.category}
    //         onChange={handleInputChange}
    //         className="form-control"
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="images">Images:</label>
    //       <input
    //         type="url"
    //         id="images"
    //         name="images"
    //         value={product.images}
    //         onChange={handleInputChange}
    //         className="form-control"
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="stock">Stock:</label>
    //       <input
    //         type="number"
    //         id="stock"
    //         name="stock"
    //         value={product.stock}
    //         onChange={handleInputChange}
    //         className="form-control"
    //         required
    //       />
    //     </div>
    //     <button type="submit" className="btn-submit">Submit</button>
    //   </form>
    // </div>
    <div>
      <ProductList/>
    </div>
  );
};

export default ProductManagement;
