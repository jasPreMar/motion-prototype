import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./MiniInput.css";
import ChatWindow from "./ChatWindow";

const MiniInput = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleClick = () => {
    setIsChatOpen(true);
  };

  const handleClose = () => {
    setIsChatOpen(false);
  };

  return (
    <AnimatePresence>
      {isChatOpen ? (
        <ChatWindow 
          key="chat-window"
          onClose={handleClose} 
          position="bottom-center" 
          layoutId="chat-mini-input" 
        />
      ) : (
        <motion.div 
          key="mini-input"
          className="mini-input" 
          onClick={handleClick} 
          style={{ cursor: "pointer" }}
          layoutId="chat-mini-input"
          transition={{ type: "spring", bounce: 0, duration: 0.25 }}
        >
          <div className="mini-input__base" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MiniInput;

