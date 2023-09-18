import CardsTitle from "../CardsTitle/CardsTitle";
import AddCard from "./AddCard/AddCard";
import CardContent from "./CardContent/CardContent";

const Cards = () => {
  return (
    <div className="bg-gray-200 w-[313px] border border-gray-300 rounded-[11px] transition-all duration-300">
      <div className=" ">
        <div>
          <CardsTitle />
        </div>
        <div className="">
          <CardContent />
          <CardContent />
        </div>

        <div className="">
          <AddCard />
        </div>
      </div>
    </div>
  );
};

export default Cards;
