import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div>

<Header/>
<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExampleCaptions" className="carousel slide">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="https://img.freepik.com/premium-photo/contemporary-spotless-fitness-gym-center-interiorgenerative-ai_391052-10889.jpg" className="d-block w-100" alt="..." height="600" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>First slide label</h5>
                                                <p>Some representative placeholder content for the first slide.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victor-freitas-841130.jpg&fm=jpg" class="d-block w-100" alt="..." height="600" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Second slide label</h5>
                                                <p>Some representative placeholder content for the second slide.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://t4.ftcdn.net/jpg/03/50/81/89/360_F_350818949_lJTfzSTDr79e9Kn55PUVZjN19ct20uGc.jpg" className="d-block w-100" alt="..." height="600" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Third slide label</h5>
                                                <p>Some representative placeholder content for the third slide.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <p><b><i><h2><center>Why Choose Us</center></h2></i></b></p>
                        </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div className="card">
                                    <img src="https://img.freepik.com/premium-photo/3d-rendering-black-dumbbells-floor-dark-concept-fitness-room-with-training-equipments-back_67155-14961.jpg" className="card-img-top" alt="..." d-flex align-items-stretch height="300" />
                                    <div className="card-body">
                                        <h5 class="card-title">Quality Equipment</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div className="card">
                                    <img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528" className="card-img-top" alt="..." d-flex align-items-stretch height="300" />
                                    <div className="card-body">
                                        <h5 className="card-title">Healthy Nutrition Plan</h5>
                                        <p clasNames="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div className="card">
                                    <img src="https://t4.ftcdn.net/jpg/03/50/81/91/360_F_350819106_LbLK84HxhiwoLBjnVeM0OTft0YZvaAGm.jpg" className="card-img-top" alt="..." d-flex align-items-stretch height="300" />
                                    <div className="card-body">
                                        <h5 className="card-title">Shower Service</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div className="card">
                                    <img src="https://besthqwallpapers.com/Uploads/29-8-2016/6671/training-bodybuilding-fitness-gym-sport.jpg" className="card-img-top" alt="..." d-flex align-items-stretch height="300" />
                                    <div className="card-body">
                                        <h5 className="card-title">Unique To Your Needs</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


    </div>
  )
}

export default Home