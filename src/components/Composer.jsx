import { useState, useRef, useEffect } from "react";
import WaveformIcon from "../assets/icons/WaveformSmallStroked.svg?react";
import ArrowUpIcon from "../assets/icons/ArrowUpStroked.svg?react";
import "./Composer.css";

const Composer = ({ placeholder = "Ask anything..." }) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);
  const MIN_ROWS = 1;
  const MAX_ROWS = 10;
  const LINE_HEIGHT = 24; // matches line-height in CSS

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Reset height to auto to get the correct scrollHeight
    textarea.style.height = "auto";
    
    // Get the scroll height (content height)
    const scrollHeight = textarea.scrollHeight;
    
    // Calculate number of lines based on line-height
    const lines = Math.ceil(scrollHeight / LINE_HEIGHT);
    
    // Clamp between min and max rows
    const clampedLines = Math.max(MIN_ROWS, Math.min(lines, MAX_ROWS));
    const newHeight = clampedLines * LINE_HEIGHT;
    
    // Set the height
    textarea.style.height = `${newHeight}px`;
    
    // Enable scrolling if content exceeds max rows
    if (lines > MAX_ROWS) {
      textarea.style.overflowY = "auto";
      textarea.style.height = `${MAX_ROWS * LINE_HEIGHT}px`;
    } else {
      textarea.style.overflowY = "hidden";
    }
  }, [value]);

  // Set initial height on mount
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `${MIN_ROWS * LINE_HEIGHT}px`;
    }
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="composer">
      <div className="composer__container">
        <div className="composer__text-area">
          <div className="composer__input">
            <div className="composer__content">
              <textarea 
                ref={textareaRef}
                className="composer__textarea"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                rows={MIN_ROWS}
              />
            </div>
          </div>
        </div>
        <div className="composer__actions-row">
          <div className="composer__actions">
            <button className="composer__action-btn composer__voice-btn" aria-label={value ? "Send message" : "Voice input"}>
              {value ? (
                <ArrowUpIcon />
              ) : (
                <WaveformIcon />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Composer;

