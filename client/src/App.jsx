import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
export function App() {
  return (
    <div className="fixed left-0 top-0 bg-[#f5f5f5] w-full h-full">
      <div
        className={`
    navbar-wrapper absolute bottom-0 left-0 w-full h-[48px] bg-white shadow-lg md:left-0 md:w-[200px] md:h-full
    md:bg-transparent md:shadow-none
    `}
      >
        <Navbar />
      </div>

      <div className="content-wrapper absolute top-0 left-0 h-[calc(100%-48px)] w-full bg-emerald-600 md:h-full md:w-5/6 md:left-[200px]">
        <Routes className="">
          <Route path="/" />
        </Routes>
      </div>
    </div>
  );
}
