import "./Navbar.css";
import {SiBitcoinsv} from "react-icons/si"

export const Navbar = () => {

    return (
      <div className="navbar">
        <SiBitcoinsv className="icon" />
        <h1>
          Crypto <span className="color">Rate</span>
        </h1>
      </div>
    );
};
