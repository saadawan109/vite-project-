import { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Edit = () => {

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [rating, setRating] = useState(0)
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(0)
    const [sale, setSale] = useState(0)
    const [onSale, setOnSale] = useState(0)
    const [category, setCategory] = useState("")
    const nevigate = useNavigate()
    const [productEdit, setProductEdit] = useState({})
    const params = useParams();

    const notify = () => toast("Successfully Edited !");


    const onEdit = () => {
        axios.put(`https://6666db46a2f8516ff7a54492.mockapi.io/product/${params.id}`, {

            "title": title,
            "image": image,
            "price": price,
            "rating": rating,
            "on_sale": onSale,
            "sale_price": sale,
            "category": category,
            "desc": desc

        }).then(() => {
            nevigate("/dashboard")
            notify()

        }).catch((err) => {

            console.log(err.meassage);

        }).finally(() => {

        })
    }

    useEffect(() => {
        axios.get(`https://6666db46a2f8516ff7a54492.mockapi.io/product/${params.id}`).then((res) => {

            setProductEdit(res.data);
            setTitle(res.data.title);
            setImage(res.data.image);
            setPrice(res.data.price);
            setRating(res.data.rating);
            setOnSale(res.data.onSale);
            setSale(res.data.sale);
            setCategory(res.data.category);
            setDesc(res.data.desc);

        }).catch(() => { })

    }, [])


    return (

        <>
            <div className="container">
                <h1 className="text-center py-3">Edit Product</h1>
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

                                            value={title}

                                        />

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">
                                            Image Url
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            onChange={(e) => { setImage(e.target.value) }}
                                            value={image}
                                        />

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">
                                            Rating
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            onChange={(e) => { setRating(e.target.value) }}
                                            value={rating}
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
                                            value={desc}
                                        />

                                        <button onClick={onEdit} className="btn btn-warning btn-sm mt-4"> Edit Detail</button>
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
                                            value={price}
                                        />

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">
                                            Sale
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            onChange={(e) => { setSale(e.target.value) }}
                                            value={sale}
                                        />

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">
                                            ON Sale
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            onChange={(e) => { setOnSale(e.target.value) }}
                                            value={onSale}
                                        />

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">
                                            Category
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            onChange={(e) => { setCategory(e.target.value) }}
                                            value={category}
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

export default Edit;