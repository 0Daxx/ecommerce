import "./App.css";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      {/* <Route path="/" element={<HomePage />}></Route> */}
      <Route path="checkout" element={<div color="red" >hemlo checkout </div>}></Route>
    </Routes>
  );
}

export default App;
