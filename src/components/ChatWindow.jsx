import { motion } from "motion/react";
import Composer from "./Composer";
import "./ChatWindow.css";

const ChatWindow = ({ onClose, position = "bottom-right", layoutId }) => {
  const positionClass = position === "bottom-right" ? "chat-window--bottom-right" : "chat-window--bottom-center";

  // When layoutId is provided, use layout transitions (for CentralCommand)
  // When layoutId is not provided, use initial/exit animations (for SideChat)
  const motionProps = layoutId
    ? {
        layoutId,
        animate: { borderRadius: 32 },
        exit: { y: 20, opacity: 0 },
        transition: { type: "spring", bounce: 0, duration: 0.35 }
      }
    : {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 20, opacity: 0 },
        transition: { type: "spring", bounce: 0, duration: 0.35 }
      };

  return (
    <motion.div 
      className={`chat-window ${positionClass}`}
      {...motionProps}
    >
      <div className="chat-window__container">
        <div className="chat-window__header">
          <p className="chat-window__title">New chat</p>
          <div 
            className="chat-window__close-btn"
            onClick={onClose}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClose();
              }
            }}
            aria-label="Close chat window"
          >
            <div className="chat-window__close-icon">
              <svg 
                width="15.42" 
                height="15.42" 
                viewBox="0 0 15.42 15.42" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M1 1L14.42 14.42M14.42 1L1 14.42" 
                  stroke="rgba(42, 52, 61, 1)" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="chat-window__conversation">
          <motion.div 
            className="chat-window__logo-container"
          >
            <motion.div 
              className="chat-window__skye-logo-container"
            >
              <img src="/SkyeLogo.png" alt="Skye Logo" className="chat-window__skye-logo" />
            </motion.div>
          </motion.div>
        </div>
        <div className="chat-window__composer-wrapper">
          <Composer />
        </div>
      </div>
    </motion.div>
  );
};

export default ChatWindow;

