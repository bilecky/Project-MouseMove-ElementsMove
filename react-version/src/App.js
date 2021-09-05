import logo from "./logo.svg";
import "./App.css";
import Animated from "./Animated";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Mouse&Element Mover</p>
        
        <div className="balloon-animation">
          <Animated
            src="/cloud.png"
            className="anim-bg flyier"
            ratioX="0.36"
            ratioY="0.34"
          />
          <Animated
            src="/cloud.png"
            className="anim-bg flyier"
            ratioX="0.2"
            ratioY="0.23"
          />
          <Animated
            src="/cloud.png"      
            className="anim-bg flyier"
            ratioX="0.26"
            ratioY="0.23"
          />
          <Animated
            src="/cloud.png"
            className="anim-bg flyier"
            ratioX="0.13"
            ratioY="0.53"
          />
          <Animated
            src="/cloud.png"
            className="anim-bg flyier"
            ratioX="0.23"
            ratioY="0.41"
          />
          <Animated
            src="/ballon.png"
            className="anim-bg b-flyier"
            ratioX="0.07"
            ratioY="0.3"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
