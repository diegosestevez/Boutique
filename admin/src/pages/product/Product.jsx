import React from 'react';
import './product.css';
import {Link} from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import {productData} from '../../dummyData';
import {Publish} from '@material-ui/icons';
// import Sidebar from './../../components/sidebar/Sidebar';

const Product = () => {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newproduct'>
        <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart data={productData} dataKey='Sales' title='Sales Performance'/>
        </div>
        <div className='productTopRight'>
          <div className= 'productInfoTop'>
            <img className='productInfoImg' src='https://cdn.shopify.com/s/files/1/2404/0041/products/blue2_1200x.png?v=1633109112' alt=''/>
            <span className='productName'>Raycon Earbuds</span>
          </div>
          <div className= 'productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'>5123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>active:</span>
              <span className='productInfoValue'>yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
            <form className='productFormLeft'>
              <label>Product Name</label>
              <input type='text' placeholder='Raycon Earbuds'/>
              <label>In Stock</label>
              <select name='inStock' id='inStock'>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
              </select>
              <label>Active</label>
              <select name='active' id='active'>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
              </select>
            </form>
            <form className='productFormRight'>
              <div className='productUpload'>
                <img className='productUploadImg' src='https://cdn.shopify.com/s/files/1/2404/0041/products/blue2_1200x.png?v=1633109112' alt=''/>
                <label for='file'>
                  <Publish/>
                </label>
                <input type='file' id='file' style={{display:"none"}}/>
              </div>
              <button className='productButton'>Update</button>
            </form>
        </form>
      </div>
    </div>
  )
}

export default Product;
