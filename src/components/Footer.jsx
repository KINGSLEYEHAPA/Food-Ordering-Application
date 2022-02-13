// import { AiOutlineTwitter } from "react-icons/ri";

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
        <span>twitter</span>
        <span>facebook</span>
        <span>linkedin</span>
        <span>instagram</span>
      </div>
      <div className="download">
        <h2>Payment Options</h2>
        <p>Mastercard, Visa,Applepay and Googlepay</p>

        <span>apple</span>
        <span>playstore</span>
      </div>
    </footer>
  );
};
export default Footer;
