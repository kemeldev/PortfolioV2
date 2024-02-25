import './Draggable.css'
import { useRef } from "react";
import { motion } from "framer-motion";

export default function DragWithConstrains() {
  return (
    <div className='draggable_mainContainer'>
      <h2>More WOrk</h2>
      <div className="example-container">
        <Example />
      </div>
    </div>
  );
}

export const Example = () => {
  const constraintsRef = useRef(null);

  return (
    <>
      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.div drag dragConstraints={constraintsRef} />
    </>
  );
};