import { useEffect, useState } from "react";


function Categories() {

    const [categories, setCategories] = useState([])


    useEffect(() => {
        const getCategories = () => {
            fetch("https://6666db46a2f8516ff7a54492.mockapi.io/Categories").then((res) => {
                return res.json();
            }).then((data) => {
                setCategories(data);
            })
        }
        getCategories();
    }, []);

    return (
        <>
            <section className="categories py-5">
                <div className="container">

                    <h2 className="mt-4 text-center">Meal Categories</h2>
                    <h5 className="my-4 text-center text-secondary fst-italic">Indulge in our diverse culinary lineup, where every dish tells its own delicious story.</h5>

                    <div className="row">
                        {
                            categories.map((category,index)=>{
                                return(
                                    <>
                                        <div className="col-md-4" key={index}>
                                            <div className="top_img">
                                                <img src={category.Image} alt="" className="img-fluid category_img"/>
                                            </div>
                                            <h2 className="text-center">{category.name}</h2>
                                             
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>

                </div>

            </section>
        </>
    )
}

export default Categories;