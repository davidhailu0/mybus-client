import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {images} from './imagesList'

export default function ImageSlider(){
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
      };

    return (<Slider {...settings}>
        {images.map(({id,src,alt}) => (
          <div key={id}>
            <img src={src}  alt={alt} />
          </div>
        ))}
      </Slider>);
}