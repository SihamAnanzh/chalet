import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardImg from "./Card";
import { motion } from "framer-motion";

const Filter = () => {
  const [activeCategory, setActiveCategory] = useState([]);

  let rental = [
    {
      id: 1,
      title: "House",
      img: "/assets/img/2.jpg",
      description:
        "Far far away, behind the word mountains, far from the countries",
    },
    {
      id: 2,
      title: "House",
      img: "/assets/img/6.jpg",
      description:
        "Far far away, behind the word mountains, far from the countries",
    },
    {
      id: 3,
      title: "House",
      img: "assets/img/3.jpg",
      description:
        "Far far away, behind the word mountains, far from the countries",
    },

    {
      id: 4,
      title: "House ",
      img: "assets/img/7.png",
      description:
        "Far far away, behind the word mountains, far from the countries",
    },
    {
      id: 5,
      title: "House",
      img: "assets/img/2.jpg",
      description:
        "Far far away, behind the word mountains, far from the countries",
    },
  ];

  let catering = [
    {
      id: 1,
      title: "Appetizer",
      img: "assets/img/c1.jpg",
      description: "",
      activitis: true,
    },
    {
      id: 2,
      title: "Appetizer ",
      img: "assets/img/c3.jpg",
      description: "",
      activitis: true,
    },
    {
      id: 3,
      title: "Appetizer ",
      img: "assets/img/c4.jpg",
      description: "",
      activitis: true,
    },

    {
      id: 4,
      title: "Dessert  ",
      img: "assets/img/c5.jpg",
      description: "",
      activitis: true,
    },
    {
      id: 5,
      title: "Dessert ",
      img: "assets/img/c6.jpg",
      description: "",
      activitis: true,
    },
  ];

  let activities = [
    {
      id: 1,
      title: "Adventurer",
      img: "assets/img/a1.jpg",
      description: "",
      activitis: true,
    },
    {
      id: 2,
      title: "Diving ",
      img: "assets/img/a4.jpg",
      description: "",
      activitis: true,
    },
    {
      id: 3,
      title: "climbing ",
      img: "assets/img/a5.jpg",
      description: "",
      activitis: true,
    },

    {
      id: 4,
      title: "Balloon  ",
      img: "assets/img/a6.jpg",
      description: "",
      activitis: true,
    },
    {
      id: 5,
      title: "Spa ",
      img: "assets/img/a7.jpg",
      description: "",
      activitis: true,
    },
    {
      id: 4,
      title: "fly boards  ",
      img: "assets/img/a3.jpg",
      description: "",
      activitis: true,
    },
    {
      id: 5,
      title: "Skydiving",
      img: "assets/img/a2.jpg",
      description: "",
    },
  ];
  const [product, setProduct] = useState(rental);

  useEffect(() => {
    setProduct(product);
  }, [activeCategory]);
  return (
    <div className="filterContanier">
      <div className="contanierContent">
        {" "}
        <div className="headingFilter">
          Once a year go someplace you've <br /> never been before.
        </div>
        <div className="header">
          <div
            className="category active"
            onClick={() => {
              setActiveCategory(1);
              setProduct(rental);
            }}
          >
            Rentals
          </div>
          <div
            className="category"
            onClick={() => {
              setActiveCategory(2);
              setProduct(activities);
            }}
          >
            Activities
          </div>
          <div
            className="category"
            onClick={() => {
              setActiveCategory(3);
              setProduct(catering);
            }}
          >
            Catering
          </div>
        </div>
        <motion.dev className="cardSecion">
          {product.map((item) => (
            <CardImg key={item.id} item={item} />
          ))}
        </motion.dev>
      </div>
    </div>
  );
};

export default Filter;
