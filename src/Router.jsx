import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/deneme" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
