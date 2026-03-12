import reactLogo from "../assets/react.svg"
import "./Header.css"

const Header = ({score}) => {
  return (
    <div className="header">
      <div className="header-text-container">
        <img src={reactLogo} alt="Logo" />
        <div className="header-text">
          <p className="heading">Typing Speed Test</p>
          <p className="sub-heading">Type as fast as you can</p>
        </div>
      </div>
      <div className="heading-score">
        <p>
          🏆<span>Personal Best : </span>
          {score} WPM
        </p>
      </div>
    </div>
  );
}

export default Header