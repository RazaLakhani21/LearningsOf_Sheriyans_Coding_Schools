import React from "react";
import Card from "./Card";
// import { motion } from "framer-motion"
import { useRef } from "react";

// OK, So here's an Amazing 🙆‍♂️ thing, we're now going to be applying a "Drag Motion" using 'Framer Motion' which is only for "React" to implement motions, don't you think it's amazing 🎉.

// Edited: As I want to apply drag motion on the 'Card.jsx'  Component, that's why we'll be shifting the import to that component !

function Foreground() {

  const ref = useRef(null)

  const data = [
    {
      id: 1,
      desc: "Hello by Sheriyans Coding Schoolll !",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagtitle: "Download Now", tagColor: "green" },
    },
    {
      id: 2,
      desc: "Hello by Sheriyans Coding Schoolll !",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: false, tagtitle: "Download Now", tagColor: "blue" },
    },
    {
      id: 3,
      desc: "Hello by Sheriyans Coding Schoolll !",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagtitle: "Upload", tagColor: "blue" },
    },
  ];

  return (
    <>
      <div ref={ref} className="fixed flex gap-10 p-5 flex-wrap top-0 left-0 z-[3] w-full h-full">
        {data.map((item, index) => (
          <Card reference={ref} key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
