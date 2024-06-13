import image from '../assets/images/plate.png'

function Head() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="pic_div">
                                <img src={image} alt="" className='img-fluid head_img' />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div className='head_wholeText'>
                                <h2 className='head_text fw-normal'>The Spectacle Before Us 
                                Was Indeed Sublime.</h2>
                                <p className='head_para text-secondary fw-light pt-3'>Apparently, we had reached a great height in the atmosphere, for the sky was a dead black, and which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                                <button className='btn btn-warning text-secondary btn1 fw-bold px-5 me-3 border-2 mt-3'>ORDER ONLINE</button>
                                <button className='btn btn-outline-warning btn2 fw-bold px-5 border-2 mt-3'>OUR LOCATION</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Head;