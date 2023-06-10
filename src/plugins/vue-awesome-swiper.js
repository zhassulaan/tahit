import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
} from "swiper/swiper.esm";

import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import "swiper/swiper-bundle.min.css";

SwiperClass.use([Pagination, Mousewheel, Autoplay]);
export default getAwesomeSwiper(SwiperClass);
