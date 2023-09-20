import React from "react";
import Cards from "../Components/Cards/Cards";
import AddCardInput from "../Components/Cards/AddCardInput/AddCardInput";

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
      <div className="pl-2 pt-3 grid grid-cols-6 gap-2 ">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default MainPage;

//TODO: clone cards
// const MainPage = () => {
//   const [blocks, setBlocks] = useState([<Cards />]);

//   const cloneBlock = () => {
//     const newBlocks = [...blocks];
//     newBlocks.push(<Cards key={newBlocks.length} />);
//     setBlocks(newBlocks);
//   };

//   return (
//     <div
//       className="h-screen pl-2 pt-3 grid grid-cols-6 gap-2"
//       style={{
//         backgroundImage:
//           'url("https://images.hdqwalls.com/download/xiaomi-mi-gaming-laptop-abstract-4k-hl-1920x1080.jpg")',
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {blocks.map((block, index) => (
//         <div key={index} className=" ">
//           {block}
//         </div>
//       ))}
//       <div className="text-white bg-white cursor-pointer">
//         <CloneCard cloneBlock={cloneBlock} />
//       </div>
//     </div>
//   );
// };

// export default MainPage;
