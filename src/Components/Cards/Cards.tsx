import AddCard from "./AddCard/AddCard";
import CardContent from "./CardContent/CardContent";

const Cards = () => {
  return (
    <div className="bg-gray-200 w-[313px] border border-gray-300 rounded transition-all duration-300">
      <div className=" ">
        <div>
          <div className="bg-gray-200 p-2">Notes</div>
        </div>
        <div className="bg-gray-200">
          <CardContent />
        </div>

        <div className="bg-gray-200">
          <AddCard />
        </div>
      </div>
    </div>
  );
};

export default Cards;
