import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./screens/main";
import Pricing from "./screens/princing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}
