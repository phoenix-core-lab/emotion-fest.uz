"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

import "./styles.sass";

const Card = ({ i, title, description1, description2, src, url, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='cardContainer'
    >
      <motion.div
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
        className='card'
      >
        <h2>{title}</h2>
        <div className='body'>
          <div className='description'>
            <p>{description1}</p>
            <p>{description2}</p>
          </div>

          <div className='imageContainer'>
            <motion.div
              className='inner'
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={`/${src}`}
                alt='image'
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
