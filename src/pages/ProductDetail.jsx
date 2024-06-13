import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ProductDetail = () => {

    const [product, setProduct] = useState({});
    const params = useParams();

    useEffect(() => {
        axios.get(`https://6666db46a2f8516ff7a54492.mockapi.io/product/${params.id}`)
            .then((res) => {
                setProduct(res.data)
            }).catch(err => console.log(err.message))
    }, [])

    return (
        <>

            <div className="container">
                <h1 className="text-center pt-3 pb-5">Product Detail</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-9">
                                <h4>{product.title}</h4>
                                <p className="text-secondary fst-italic">{product.desc}</p>
                            </div>
                            <div className="col-md-3">
                                <h6 className="text-danger">{product.price}</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetail