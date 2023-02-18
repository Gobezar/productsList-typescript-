import { AxiosError } from 'axios';
import {useState, useEffect} from 'react';
import { Iproduct } from '../models';
import axios from 'axios';



function useProducts() {

    const [products, setProducts] = useState<Iproduct[]>([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    
    function addProduct(product:Iproduct) {
      setProducts(prev => [...prev, product])
    }

    async function FetchProducts () {
        try {
        setError('')
        setIsLoading(true)
        const response = await axios.get<Iproduct[]> ('https://fakestoreapi.com/products')
        setProducts(response.data)
        setIsLoading(false)
        } catch(e:unknown) {
          const error = e as AxiosError
          setIsLoading(false)
          setError(error.message)
        }
      }
    
    useEffect(() => {
      FetchProducts()
    }, [])

    return (
        {products, isLoading, error, addProduct}
    )

}

export default useProducts;