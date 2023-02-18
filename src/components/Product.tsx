import React, { useState } from 'react';
import { Iproduct } from '../models';
import '../styles/main.css'

interface ProductProps {
    product: Iproduct
}


function Product({ product }: ProductProps) {

    const [showDetails, setShowDetails] = useState(false)

    return (
        <div className='product_item'>
            <img className= 'product_img' style={{ maxWidth: '150px' }} src={product.image} alt='product image' />
            <p className='product_title'>{product.title}</p>
            <span>{product.price}</span>
            <div>
                <button className='my_button'
                    onClick={() => setShowDetails(prev => !prev)}
                >
                    {showDetails 
                    ? 'Hide details'
                    : 'Show details'
                }
                </button>
            </div>
            {showDetails &&
                <div>
                    <p className='product_description'>{product.description}</p>
                    <p className='product_rate'>Rate: {product?.rating?.rate}</p>
                </div>

            }
        </div>
    );
}

export default Product;
