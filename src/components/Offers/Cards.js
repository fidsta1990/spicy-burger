import React, { useEffect, useState } from "react";
import Card from "./Card";
import { offerDetails } from "./offerDetails";
import { CardWrapper } from "./CardStyle";
import Button from "../UI/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = () => {
  const [visible, setVisible] = useState(3);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const showMore = () => setVisible((prevState) => prevState + 3);

  const fetchMeals = () => {
    try {
      setTimeout(() => {
        setPosts(offerDetails);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const mealList = posts.slice(0, visible).map((meal) => {
    return <Card key={meal.id} {...meal} />;
  });

  useEffect(() => {
    fetchMeals();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 500, once: true, delay: 200, easing: "ease-in-out" });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <CardWrapper
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-duration="500"
    >
      {mealList}
      {visible < posts.length && (
        <Button type="button" onClick={showMore} className="offer-btn">
          View More
        </Button>
      )}
    </CardWrapper>
  );
};

export default Cards;
