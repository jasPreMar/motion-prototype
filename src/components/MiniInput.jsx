import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./MiniInput.css";
import ChatWindow from "./ChatWindow";
import ArrowUpIcon from "../assets/icons/ArrowUpStroked.svg";

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
          <div className="mini-input__base">
            <span className="mini-input__placeholder">Ask Skye...</span>
            <div className="mini-input__icon-wrapper">
              <img src={ArrowUpIcon} alt="Arrow up" className="mini-input__icon" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MiniInput;

