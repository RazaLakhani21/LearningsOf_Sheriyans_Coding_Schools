import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data,reference }) {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className="relative flex-shrink-0 w-60 h-72 bg-zinc-900 rounded-[40px] px-8 py-10 overflow-hidden">
        <FaRegFileAlt />
        <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0 ">
          <div className="text-zinc-400 px-7 flex items-center py-3 justify-between">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 text-9xl rounded-full flex items-center justify-center">
              {data.close ? <IoClose /> : <MdDownloadForOffline />}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 flex items-center justify-center ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              }`}
            >
              {/* //Learnt a New way to Apply any Color "bg-${data.tag.tagColor}-600 (AweSome 😲 !)
                Edited: It's Not Working BTW 😐" 
                Edited: Atlast "Conditional rendering, which is this part -> (${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}), 😌 only worked ! */}
              <h3 className="text-sm font-semibold">{data.tag.tagtitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
