
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [remove, setRemove] = useState(false)
    const [search, setSearch] = useState("")


    useEffect(() => {

        axios.get("https://6666db46a2f8516ff7a54492.mockapi.io/product").then((res) => {

            setProducts(res.data);
            setRemove(false);
        })
    }, [remove]);



    const handleSearch = () => {
        axios.get(`https://6666db46a2f8516ff7a54492.mockapi.io/product?title=${search}`).then((ser) => {

            setProducts(ser.data)

        }).catch((err) => {
            console.log(err);
        })

    }



    const handleDelete = (id) => {

        axios.delete(`https://6666db46a2f8516ff7a54492.mockapi.io/product/${id}`).then(
            (res) => {

                setRemove(true)

            }

        ).catch((err) => {
            console.log(err)
        })

    }




    return (
        <div>

            <div className="container">

                <h1 className='text-center py-3'> Dashboard Products </h1>


                <div className='text-end mb-4'>
                    <input onKeyUp={ handleSearch } onChange={(e) => { setSearch(e.target.value) }} type="text" />
                    <button onClick={handleSearch} className='btn btn-dark ms-2'>Search</button>
                </div>


                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                            <th scope="col">price</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => {

                                return (
                                    <>
                                        <tr>
                                            <td >{product.id}</td>
                                            <td>{product.title}</td>
                                            <td>{product.desc}</td>
                                            <td><img src="https://images.saymedia-content.com/.image/t_share/MTk4MDQzMTI5NzY3NTM1ODA2/short-captions-for-profile-pictures.png" style={{ height: "50px", width: "50px" }} className='rounded-circle' alt="" /></td>
                                            <td>{product.price}</td>
                                            <td>
                                                <span>
                                                    <button className='btn btn-danger d-inline-block mx-1' onClick={() => { handleDelete(product.id) }}>Dell</button>
                                                    <Link to={`/edit/${product.id}`} className='btn btn-info d-inline-block mx-1' onClick={() => { }}>Edit</Link>
                                                </span>


                                            </td>
                                        </tr>

                                    </>
                                )

                            })

                        }

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Dashboard