import { LuPenLine } from "react-icons/lu";

const CardsTitle = () => {
  return (
    <div className="flex">
      <div className="font-main p-2 font-bold">Notes</div>
      <button>
        <LuPenLine />
      </button>
    </div>
  );
};

export default CardsTitle;
