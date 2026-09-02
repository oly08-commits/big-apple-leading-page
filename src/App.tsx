import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./screens/main";
import Pricing from "./screens/princing";
import ContributionGraphScreen from "./screens/contribuition_graph";
import WavesScreen from "./screens/weves";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WavesScreen />} />
        <Route path="/waves" element={<WavesScreen />} />
        <Route path="/Graph" element={<ContributionGraphScreen />} />
        <Route path="/home" element={<Main />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}
