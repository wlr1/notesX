import React from "react";
import Cards from "../Components/Cards/Cards";

const MainPage = () => {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage:
          'url("https://images.hdqwalls.com/download/xiaomi-mi-gaming-laptop-abstract-4k-hl-1920x1080.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pl-2 pt-3">
        <Cards />
      </div>
    </div>
  );
};

export default MainPage;
