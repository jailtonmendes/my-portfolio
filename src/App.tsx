import "./App.css";
import BackgroundBeamsDemo from "./components/example/background-beams-demo";
import HoverBorderGradientDemo from "./components/example/hover-border-gradient-demo";
import InfiniteMovingCardsDemo from "./components/example/infinite-moving-cards-demo";

function App() {
  return (
    <div>
      <BackgroundBeamsDemo />
      {/* <HoverBorderGradientDemo /> */}
      <InfiniteMovingCardsDemo />
      <HoverBorderGradientDemo />
      {/* <CardHoverEffectDemo /> */}
    </div>
  );
}

export default App;
