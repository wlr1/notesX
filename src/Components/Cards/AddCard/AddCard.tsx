import { IoMdAdd } from "react-icons/io";
import CloneCard from "../CloneCard/CloneCard";
import AddCardInput from "../AddCardInput/AddCardInput";

const AddCard = () => {
  return (
    <>
      <div className="flex items-center ">
        <button className="flex items-center">
          <IoMdAdd className="ml-2" />
          <span className="font-main font-semibold ml-1">Add a Card</span>
        </button>
        <button className="relative ml-44">
          <CloneCard />
        </button>
      </div>
      <div>
        <AddCardInput />
      </div>
    </>
  );
};

export default AddCard;
