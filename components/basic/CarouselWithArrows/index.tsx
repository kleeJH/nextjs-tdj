"use client";
import React, { useState, useRef } from "react";
import { Carousel } from "antd";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CarouselRef } from "antd/es/carousel";

const CarouselWithArrows = () => {
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <div>
      <ArrowLeft
        aria-hidden="true"
        size={40}
        onClick={() => {
          carouselRef.current?.prev();
        }}
      />
      <Carousel ref={carouselRef} dots autoplay infinite>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
      <ArrowRight
        aria-hidden="true"
        size={40}
        onClick={() => {
          carouselRef.current?.next();
        }}
      />
    </div>
  );
};

export default CarouselWithArrows;
