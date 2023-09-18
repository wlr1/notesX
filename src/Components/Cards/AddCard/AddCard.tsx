import React from "react";
import { IoMdAdd } from "react-icons/io";
import CloneCard from "../CloneCard/CloneCard";

const AddCard = () => {
  return (
    <div className="flex items-center ">
      <button className="flex items-center">
        <IoMdAdd className="ml-2" />
        <span>Add Card</span>
      </button>
      <button className="relative ml-44">
        <CloneCard />
      </button>
    </div>
  );
};

export default AddCard;
