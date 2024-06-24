import { useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const ProductAdd = () => {

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [rating, setRating] = useState(0)
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(0)
    const [sale, setSale] = useState(0)
    const [onSale, setOnSale] = useState(0)
    const [category, setCategory] = useState("")
    const nevigate = useNavigate()

    const notify = () => toast("Successfully Added !");

    



    const onSubmit = () => {
        axios.post("https://6666db46a2f8516ff7a54492.mockapi.io/product", {

            "title": title,
            "image": image,
            "price": price,
            "rating": rating,
            "on_sale": onSale,
            "sale_price": sale,
            "category": category,
            "desc": desc

        }).then(() => {
            nevigate("/")
            notify()

        }).catch((err) => {

            console.log(err.meassage);

        }).finally(() => {

        })
    }


    return (

        <>
            <div className="container">
                <h1 className="text-center py-3">Create Product</h1>
                <div className="row">
                    <div className="col-md-10">

                        <>


                            <>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            onChange={(e) => { setTitle(e.target.value) }}



                                        />

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">
                                            Image Url
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            onChange={(e) => { setImage(e.target.value) }}

                                        />

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">
                                            Rating
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            onChange={(e) => { setRating(e.target.value) }}
                                        />


                                        <label htmlFor="exampleFormControlTextarea1" className="form-label mt-2">
                                            Description
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            onChange={(e) => { setDesc(e.target.value) }}
                                            rows={3}
                                            defaultValue={""}
                                        />

                                        <button onClick={onSubmit} className="btn btn-warning btn-sm mt-4"> View Detail</button>
                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="exampleFormControlInput1" className="form-label">
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            onChange={(e) => { setPrice(e.target.value) }}
                                        />

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">
                                            Sale
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            onChange={(e) => { setSale(e.target.value) }}
                                        />

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">
                                            ON Sale
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            onChange={(e) => { setOnSale(e.target.value) }}
                                        />

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">
                                            Category
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            onChange={(e) => { setCategory(e.target.value) }}
                                        />
                                    </div>
                                </div>



                            </>




                        </>


                    </div>
                </div>
            </div >

        </>
    )
}

export default ProductAdd;