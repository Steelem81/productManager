import {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = props => {
    const {products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err)=> {console.log(err);
            })
    }, [])
    return (
        <div>
            {
                products.map((product, index) => {
                    return (
                        <div key={index}>
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                            <Link to={`/products/${product._id}`}>{product.title} Details</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList