import React, { useEffect } from "react";
import * as Homes from "./page-styles/HomeStyle";
import leafImg from "../assets/plant.png";
import Hero from "../components/Hero/Hero";
import Offers from "../components/Offers/Offers";
import Banner from "../components/Banner/Banner";
import Testimonial from "../components/Testimonials/Testimonial";
import Gallery from "../components/Gallery/Gallery";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 500, once: true, delay: 200 });
  }, []);

  return (
    <Homes.Wrapper>
      <Homes.Leaf data-aos="zoom-in"  data-aos-delay="1000">
        <img src={leafImg} alt="leaf" />
      </Homes.Leaf>
      <Hero  />
      <Homes.LeafTwo >
        <img src={leafImg} alt="leaf" />
      </Homes.LeafTwo>
      <Offers />
      <Banner />
      <Testimonial />
      <Gallery />
    </Homes.Wrapper>
  );
};

export default Home;
