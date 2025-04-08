// import { Children } from "react";
import "./buttonStyle.css";
export default function TaButton({ title, children }) {
  return (
    <div>
      {title == null || title === "" ? (
        <div></div>
      ) : (
        <button className="tagButton">
          {title}
          {children}
        </button>
      )}
    </div>
  );
}
