import {
  FaLinkedinIn,
  FaGooglePlay,
  FaAppStore,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="about">
        <h3 id="about">
          About{" "}
          <span className="logo2">
            Kay-<span>Foods</span>
          </span>
        </h3>
        <p>
          Your first thought when hungry. Delicious cusines and several african
          and chinese dishes{" "}
        </p>
      </div>

      <div className="social-links">
        <span>
          <FaTwitter />
        </span>
        <span>
          <FaFacebookF />
        </span>
        <span>
          <FaLinkedinIn />
        </span>
        <span>
          <FaInstagram />
        </span>
      </div>
      <div className="download">
        <h2>Payment Options</h2>
        <p>Mastercard, Visa,Applepay and Googlepay</p>

        <span>
          <FaAppStore />
        </span>
        <span>
          <FaGooglePlay />
        </span>
      </div>
    </footer>
  );
};
export default Footer;
