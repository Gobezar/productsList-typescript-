import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Iproduct } from '../models'
import '../styles/modal.css'
import { Error } from './Error';

const ProductData: Iproduct = {
    
        title: '',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
            rate: 42, 
            count: 10,
        }
}

interface CreateProductProps {
    onCreate: (product: Iproduct) => void;
}


const CreateProduct = ({onCreate}: CreateProductProps) => {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError ('Please enter valid product')
            return
        }

        ProductData.title = value;
        const response = await axios.post<Iproduct>('https://fakestoreapi.com/products', ProductData)
        onCreate(response.data)

    }

    return (
        <div className='create_form'>
            <form onSubmit={submitHandler}>
                <h3>Do you want to create new product ? 🥺</h3>
                <input
                    type='text'
                    className='create_form_input'
                    placeholder='Enter your product...'
                    value={value}
                    onChange={(e) => setValue(e.target.value) }
                />
                {error && <Error error = {error} />}
                <button type='submit'>Create, please!</button>
            </form>
        </div>
    )
}

export default CreateProduct