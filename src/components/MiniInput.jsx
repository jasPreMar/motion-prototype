import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./MiniInput.css";
import ChatWindow from "./ChatWindow";
import WaveformIcon from "../assets/icons/WaveformSmallStroked.svg?react";

const MiniInput = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsHovered(false); // Reset hover state before opening chat
    setIsChatOpen(true);
  };

  const handleClose = () => {
    setIsChatOpen(false);
  };

  // Small state values
  const smallWidth = 140;
  const smallHeight = 32;
  const smallBorderRadius = 9999;
  const smallPaddingLeft = 12;
  const smallPaddingRight = 8;
  const smallLeft = "calc(50% - 70px)"; // half of 140px
  const smallBoxShadow = "1px 1px 2px -1px rgba(0, 19, 51, 0.08) inset, 0 3px 8px -2px rgba(0, 19, 51, 0.08) inset, 2px 4px 4px -4px rgba(0, 19, 51, 0.16) inset";

  // Large state values (matching Composer)
  const largeWidth = 384;
  const largeHeight = 56;
  const largeBorderRadius = 24;
  const largePaddingLeft = 16;
  const largePaddingRight = 16;
  const largeLeft = "calc(50% - 192px)"; // half of 384px
  const largeBoxShadow = "1px 1px 2px 0 rgba(0, 19, 51, 0.08), 0 3px 16px 0 rgba(0, 19, 51, 0.08), 2px 4px 6px -3px rgba(0, 19, 51, 0.16)";

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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ cursor: "pointer" }}
          layoutId="chat-mini-input"
          animate={{
            width: isHovered ? largeWidth : smallWidth,
            height: isHovered ? largeHeight : smallHeight,
            borderRadius: isHovered ? largeBorderRadius : smallBorderRadius,
            boxShadow: isHovered ? largeBoxShadow : smallBoxShadow,
            left: isHovered ? largeLeft : smallLeft,
          }}
          transition={{
            type: "spring",
            bounce: 0,
            duration: isHovered ? 0.3 : 0.15,
          }}
        >
          <motion.div 
            className="mini-input__base"
            animate={{
              paddingLeft: isHovered ? largePaddingLeft : smallPaddingLeft,
              paddingRight: isHovered ? largePaddingRight : smallPaddingRight,
            }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: isHovered ? 0.3 : 0.15,
            }}
          >
            <span className="mini-input__placeholder">Ask Skye...</span>
            <motion.div 
              className={`mini-input__icon-wrapper ${isHovered ? 'mini-input__icon-wrapper--large' : ''}`}
              animate={{
                width: isHovered ? 34 : 20,
                height: isHovered ? 34 : 20,
                borderRadius: isHovered ? 16 : 50,
                backgroundColor: isHovered ? "transparent" : "#9ca3af",
              }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: isHovered ? 0.3 : 0.15,
              }}
            >
              <motion.div
                animate={{
                  width: isHovered ? 24 : 12,
                  height: isHovered ? 24 : 12,
                }}
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: isHovered ? 0.3 : 0.15,
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <WaveformIcon 
                  className={`mini-input__icon ${isHovered ? 'mini-input__icon--large' : ''}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    color: isHovered ? "#005DFF" : undefined,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MiniInput;

