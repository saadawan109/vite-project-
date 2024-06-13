

function Icons (){
    return(
        <>

            <section className="py-5 bg-light-subtle">
                
                <div className="container">
                 <h2 className="d-flex justify-content-center">Our Features</h2>
                 <h5 className="d-flex justify-content-center pt-2 text-secondary fst-italic">Where every bite tells a delicious story.</h5>
                    <div className="row">

                        <div className="col-md-3">
                            <div className="meal mt-5 text-center">

                                <i class="ri-truck-line ri-lg icon"></i>
                                <h3 className="pt-4 fw-light">Free & Fast <br/> Delivery</h3>

                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="meal mt-5 text-center">

                                <i class="ri-questionnaire-line ri-lg icon"></i>
                                <h3 className="pt-4 fw-light">Culinary <br/>  Diversity</h3>

                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="meal mt-5 text-center">

                                <i class="ri-chat-download-line ri-lg icon"></i>
                                <h3 className="pt-4 fw-light">Contactless<br/>  Convenience </h3>

                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="meal mt-5 text-center">

                                <i class="ri-chat-download-line ri-lg icon"></i>
                                <h3 className="pt-4 fw-light">Personalized  <br/> Experience</h3>

                            </div>

                        </div>

                    </div>
                </div>

            </section>
        
        </>
    )
}

export default Icons;