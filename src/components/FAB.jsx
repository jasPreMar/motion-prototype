import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./FAB.css";
import ChatWindow from "./ChatWindow";

const FAB = () => {
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
          position="bottom-right" 
          layoutId="chat-fab" 
        />
      ) : (
        <motion.div 
          key="fab"
          className="chat-fab" 
          onClick={handleClick} 
          style={{ cursor: "pointer" }}
          layoutId="chat-fab"
          transition={{ type: "spring", bounce: 0, duration: 0.25 }}
        >
          <div className="chat-fab__base" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FAB;

