import { useEffect, useState } from "react";
import axios from "axios";

function Features() {

    const [features, setFeatures] = useState([])


    useEffect(() => {


        axios.get("https://6666db46a2f8516ff7a54492.mockapi.io/product")
            .then((response) => {
                setFeatures(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            
            });
    })




    return (
        <>
            <section className="py-5 bg-light-subtle">
                <div className="container">

                    <h2 className="text-center fw-bold">Menu </h2>

                    <h5 className="text-center pt-2 text-secondary fst-italic">Savor the moment, one bite at a time.</h5>


                    <div className="row">
                        {
                            features.map((feature, index) => {
                                return (
                                    <>
                                        <div className="col-md-4 pt-5">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <h4>{feature.title}</h4>
                                                    <p className="text-secondary fst-italic">{feature.desc}</p>
                                                </div>
                                                <div className="col-md-3">
                                                    <h6 className="text-danger">{feature.price}</h6>
                                                </div>
                                            </div>

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

export default Features;