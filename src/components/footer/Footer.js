
import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="10px">
      <footer className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Designed & Customized with ❤️ by Harshani Medhavi")}
        </p>

        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Built with React | Always Learning, Always Growing ✨
        </p>

        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Based on{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            DeveloperFolio
          </a>
        </p>
      </footer>
    </Fade>
  );
}
