import Slider from "react-slick";
import SliderData from "./Products"

function AppSlider() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#ffff", }}
                onClick={onClick}
            >
            </div>
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#ffff" }}
                onClick={onClick}
            >
            </div>
        );

    }
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        // autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <Slider {...settings}>
            {SliderData && SliderData.map((items, index) => {
                const percent = ((items.Acctual_Price - items.Rates) / items.Acctual_Price) * 100
                const final = Math.ceil(percent)
                return (
                    <div className="slider-card" >
                        <div className="slider-img">
                            <img className="img-fluid" src={items.imgurl} alt="" />
                        </div>
                        <div className="text-center mt-1">
                            <h6>
                                RS {items.Rates}
                            </h6>
                            <div className="d-flex align-items-center justify-content-center">
                                <del>RS {items.Acctual_Price}</del>
                                <span className="parcent">({final}%)</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Slider>
    );
}

export default AppSlider;