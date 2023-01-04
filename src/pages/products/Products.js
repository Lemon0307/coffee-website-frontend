import "../.././css/base.css";
import TestImage from '../../product_pictures/testing.jpg';
import {useState, useEffect} from 'react';

const Products = () => {

    const [products, setProducts] = useState([{}])

    useEffect(() => {
        fetch("http://localhost:8000/").then(
            res => res.json()
        ).then(
            data => {
            setProducts(data)
            console.log(data)
        }
        ).catch(
            err => console.log(err)
        );
    }, [])

    return (
        <div className="content">
            <h1>Welcome!</h1>
        <div className="graphic">
            <h1>graphic</h1>
        </div>
        <h1>Trending:</h1>
        <div className="product-group">
            {products.map((product, i) => (
                <div className="product">
                    <h2 key={i}>{product.name}</h2>
                    <img src={TestImage} alt="" key={i}/>
                    <p key={i}>${product.price}</p>
                </div>
            ))}
        </div>
        </div>
    );
}
 
export default Products;