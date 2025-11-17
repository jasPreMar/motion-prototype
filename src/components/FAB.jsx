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
        />
      ) : (
        <motion.div
          key="fab"
          className="chat-fab"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: "tween", ease: [0.4, 0, 0.2, 1], duration: 0.3 }}
        >
          <motion.div 
            className="skye-logo-container"
          >
            <img src="/SkyeLogo.png" alt="Skye Logo" className="skye-logo" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FAB;

