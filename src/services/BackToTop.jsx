import { useEffect } from "react";
import TopToBottom from "../lib/TopToBottom";

// eslint-disable-next-line react/prop-types
function BackToTop({ className }) {
  useEffect(() => {
    TopToBottom(".back-to-top");
  });
  return (
    <>
      <div className={`back-to-top ${className}`}>
        <a href="#">
          <i className="fal fa-arrow-up" />
        </a>
      </div>
    </>
  );
}

export default BackToTop;
