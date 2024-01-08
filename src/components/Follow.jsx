"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Follow() {
  return (
    <div>
      <Box />
    </div>
  );
}

const css = {
  box: {
    width: "100%",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
  },
  fly: {
    position: "absolute",
    width: "300px",
    height: "300px",
    margin: "-10px",
    backgroundColor: "red",
    borderRadius: "50%",
    zindex: "10",
  },
};

function getRelativeCoordinates(event, referenceElement) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  console.log(offset, position);
  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - (offset.left + 150),
    y: position.y - (offset.top + 150),
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY:
      (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}

const Box = () => {
  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef();
  const handleMouseMove = (e) => {
    console.log(mousePosition);
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };
  return (
    <motion.div
      ref={boxRef}
      style={{ ...css.box, perspective: 600 }}
      className="w-full h-full"
      onMouseMove={(e) => handleMouseMove(e)}
      animate={{
        rotateX: mousePosition.centerX * 50,
        rotateY: mousePosition.centerY * 50,
      }}
    >
      <motion.div
        style={{ ...css.fly, backgroundColor: "black" }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring" }}
        className="z-0"
      />
      <div className="">
        <div className="flex flex-col items-center justify-between p-24 z-100">
          <h1 className="text-9xl z-30">Code component</h1>
          <h1 className="text-9xl z-10">POs </h1>
        </div>
      </div>
      {/* <motion.div
        style={{ ...css.fly, backgroundColor: "black" }}
        animate={{
          x: mousePosition.centerX,
          y: mousePosition.y,
        }}
        transition={{ type: "spring" }}
      /> */}
    </motion.div>
  );
};
