import "./CustomerSay.css";
import ReviewsCard from "../../components/reviewsCard/ReviewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useGetCommentsQuery } from "../../services/foodApi";


function CustomerSay() {  

  const { data:comments } = useGetCommentsQuery(6);
  
  return (
    <section className="container-1248">
      <div
        className="reviews__header"
        style={{ textAlign: "center", marginTop: "115px" }}
      >
        <span className="highlight-text">Customer</span> Say
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "flex-start",
          marginTop: "80px",
        }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          speed={1000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {comments?.map((comment) => (
            <SwiperSlide>
              <ReviewsCard name={comment.username} text={comment.body} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default CustomerSay;
