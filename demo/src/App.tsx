import "./App.css";
import "animate.css";
import { AnimationWrapper } from "../../dist";

function App() {
  return (
    <>
      <h1>Animation Wrapper Demo</h1>
      <AnimationWrapper
        initialClassName="hidden"
        onEnterAnimation="animate__animated animate__fadeInLeft"
        onExitAnimation="animate__animated animate__fadeOutLeft"
      >
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </AnimationWrapper>
    </>
  );
}

export default App;
