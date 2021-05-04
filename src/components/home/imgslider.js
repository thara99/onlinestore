import React from 'react'


import img1 from "../../img/slider/img1.jpg"
import img2 from "../../img/slider/img2.jpg"
import img3 from "../../img/slider/img3.jpg"




const imgslider = () => {
    return (
        <div className="">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* <!-- Indicators --> */}
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                {/* <!-- Wrapper for slides --> */}
                <div className="carousel-inner">
                    <div className="item active">
                        <img src={img1} alt="Los Angeles" />
                    </div>

                    <div className="item">
                        <img src={img2} alt="Chicago" />
                    </div>

                    <div className="item">
                        <img src={img3} alt="New york" />
                    </div>
                </div>

                {/* <!-- Left and right controls --> */}
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default imgslider



