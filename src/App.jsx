import Header from "./components/Header";
import Menu from "./components/Menu";
import TypingContainer from "./components/TypingContainer";
import restartLogo from "./assets/restart.svg";

const App = () => {
  return (
    <div className="container">
      <Header score="30" />
      <Menu />
      <div className="long-divider"></div>
      <TypingContainer />
      <div className="long-divider"></div>
      <button className="restart-button">
        Restart Test
        <img src={restartLogo} alt="restart icon" />
      </button>
    </div>
  );
};

export default App;
