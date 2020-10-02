import React,{useState,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
export const HomeScreen = () => {
    const [products,setProducts] = useState([]) 
    useEffect(() =>{
        const fetchDataProducts = async() => {
            const {data} =  await axios.get('/api/products')
            setProducts(data)

        }
        fetchDataProducts()
    },[])
    return (
        <>
            <h1>Lastest Product</h1>
            <Row>
                {products.map(product => (
                     <Col  key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product  product={product} /> 
                    </Col>
                ))}
            </Row>
        </>
    )
}
