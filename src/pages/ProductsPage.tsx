import { useState } from 'react';
import useProducts from '../hooks/useProducts';
import Product from '../components/Product';
import { Error } from '../components/Error';
import Modal from '../components/Modal';
import CreateProduct from '../components/CreateProduct';
import { Iproduct } from '../models';
import  '../styles/main.css'


const ProductsPage = () => {

    const {products, isLoading, error, addProduct} = useProducts();
    const [modalVisible, setModalVisible] = useState(false);
    
    const CreateHandler = (product:Iproduct) => {
      setModalVisible(false)
      addProduct(product)
    }
    
      return (
        <div className="App">
          {isLoading && <h3 style={{textAlign:'center'}}>Идет загрузка...<br />Пожалуйста, подождите :)</h3>}
          {error && <Error error = {'Произошла непредвиденная ошибка :( Повторите попытку позднее.'}/>}
          {products.map(product => <Product product = {product} key = {product.id}/> )}
          {modalVisible && <Modal onClose={() => setModalVisible(false)}>
            <CreateProduct onCreate={CreateHandler}/>
          </Modal>}
          <button className='addProduct_button'
          onClick={() => setModalVisible(true)}
          >Add new product +</button>
        </div>
      );
    }

export default ProductsPage