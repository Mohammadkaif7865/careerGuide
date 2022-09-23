import React from 'react';
import "./Home.css"
function Home() {
    return (
        <>
            <div className="home">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="whatsApp" className='whatapp' />
                <img src="https://e7.pngegg.com/pngimages/169/794/png-clipart-ios-message-icon-iphone-message-computer-icons-text-messaging-messenger-electronics-grass.png" alt="message" className='messageme' />
                <img src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" alt="search2" className='search2' />
                <div className="topone">
                    <b>Student's Choice Awards</b> - Inspirational Education Institute of the year
                    <button className='btn btn-light' style={{ marginLeft: "5px" }}>Vote now</button>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.postimg.cc/pTLw91ZG/11-12.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.postimg.cc/kXbktSQm/cllg.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.postimg.cc/mgwRtM4r/Career-Counselling.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="circlePics">
                    <div className="itemInit">
                        <img src="http://app.careerguide.com/api/user_dir/5e91b29fd4d611586606751.jpeg" alt="sir" />
                        <h2>Adnan</h2>
                        <p>Exp : 15 yeaars</p>
                        <button className='btn btn-danger'>Talk <i className="bi bi-camera-video-fill"></i></button>
                    </div>
                    <div className="itemInit">
                        <img src="http://app.careerguide.com/api/user_dir/5e91b29fd4d611586606751.jpeg" alt="sir" />
                        <h2>Adnan</h2>
                        <p>Exp : 15 yeaars</p>
                        <button className='btn btn-danger'>Talk <i className="bi bi-camera-video-fill"></i></button>
                    </div>
                    <div className="itemInit">
                        <img src="http://app.careerguide.com/api/user_dir/5e91b29fd4d611586606751.jpeg" alt="sir" />
                        <h2>Adnan</h2>
                        <p>Exp : 15 yeaars</p>
                        <button className='btn btn-danger'>Talk <i className="bi bi-camera-video-fill"></i></button>
                    </div>
                    <div className="itemInit">
                        <img src="http://app.careerguide.com/api/user_dir/5e91b29fd4d611586606751.jpeg" alt="sir" />
                        <h2>Adnan</h2>
                        <p>Exp : 15 yeaars</p>
                        <button className='btn btn-danger'>Talk <i className="bi bi-camera-video-fill"></i></button>
                    </div>
                    <div className="itemInit">
                        <img src="http://app.careerguide.com/api/user_dir/5e91b29fd4d611586606751.jpeg" alt="sir" />
                        <h2>Adnan</h2>
                        <p>Exp : 15 yeaars</p>
                        <button className='btn btn-danger'>Talk <i className="bi bi-camera-video-fill"></i></button>
                    </div>
                    <div className="itemInit">
                        <img src="http://app.careerguide.com/api/user_dir/5e91b29fd4d611586606751.jpeg" alt="sir" />
                        <h2>Adnan</h2>
                        <p>Exp : 15 yeaars</p>
                        <button className='btn btn-danger'>Talk <i className="bi bi-camera-video-fill"></i></button>
                    </div>
                </div>
                <h1 style={{ color: "purple" }} className="text-center">
                    <b>Psychometric Assessment</b>
                </h1>
                <div className="rrww">
                    <button className='btn btn-danger'>
                        Psychometric Career Test
                    </button>
                    <button className='btn btn-light'>
                        21st Century Skills & Learning Test
                    </button>
                </div>
                <p className='text-center' style={{ width: "50%", margin: "auto" }}>
                    CareerGuide brings to you scientific and meticulously designed Psychometric Assessments

                    to discover your true potential and interest ,learning styles and skills to excel in 21st Century
                </p>
                <div className="container cardCon">
                    <div className="card">
                        <img src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" alt="course" />
                        <h5 className='text-center'>IDEAL CAREER TEST™</h5>
                        <p > <i className="bi bi-journal"></i> 180 Questions

                        </p>
                        <p ><i className="bi bi-alarm-fill"></i> 60 Minutes</p>
                        <p >₹ 2000</p>
                        <button className='btn btn-danger'>For all The age group</button>
                    </div>
                    <div className="card">
                        <img src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" alt="course" />
                        <h5 className='text-center'>IDEAL CAREER TEST™</h5>
                        <p > <i className="bi bi-journal"></i> 180 Questions

                        </p>
                        <p ><i className="bi bi-alarm-fill"></i> 60 Minutes</p>
                        <p >₹ 2000</p>
                        <button className='btn btn-danger'>For all The age group</button>
                    </div>
                    <div className="card">
                        <img src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" alt="course" />
                        <h5 className='text-center'>IDEAL CAREER TEST™</h5>
                        <p > <i className="bi bi-journal"></i> 180 Questions

                        </p>
                        <p ><i className="bi bi-alarm-fill"></i> 60 Minutes</p>
                        <p >₹ 2000</p>
                        <button className='btn btn-danger'>For all The age group</button>
                    </div>
                    <div className="card">
                        <img src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" alt="course" />
                        <h5 className='text-center'>IDEAL CAREER TEST™</h5>
                        <p > <i className="bi bi-journal"></i> 180 Questions

                        </p>
                        <p ><i className="bi bi-alarm-fill"></i> 60 Minutes</p>
                        <p >₹ 2000</p>
                        <button className='btn btn-danger'>For all The age group</button>
                    </div>
                    <div className="card">
                        <img src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" alt="course" />
                        <h5 className='text-center'>IDEAL CAREER TEST™</h5>
                        <p > <i className="bi bi-journal"></i> 180 Questions

                        </p>
                        <p ><i className="bi bi-alarm-fill"></i> 60 Minutes</p>
                        <p >₹ 2000</p>
                        <button className='btn btn-danger'>For all The age group</button>
                    </div>
                    <div className="card">
                        <img src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" alt="course" />
                        <h5 className='text-center'>IDEAL CAREER TEST™</h5>
                        <p > <i className="bi bi-journal"></i> 180 Questions

                        </p>
                        <p ><i className="bi bi-alarm-fill"></i> 60 Minutes</p>
                        <p >₹ 2000</p>
                        <button className='btn btn-danger'>For all The age group</button>
                    </div>
                   
                </div>
            </div>
        </>
    )
}
export default Home;