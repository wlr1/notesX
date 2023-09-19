import React, { useState } from "react";
import { LuPenLine } from "react-icons/lu";

const CardsTitle = () => {
  const [title, setTitle] = useState<string>("Notes");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <div className="flex transition-all">
      {isEditing ? (
        <input
          type="text"
          className="pl-2 ml-2 mt-2 mr-2  rounded-md "
          value={title}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          onKeyDown={handleInputKeyDown}
        />
      ) : (
        <div className="font-main p-2 font-bold">{title}</div>
      )}

      <button className="mt-[2px]" onClick={handleEditClick}>
        <LuPenLine />
      </button>
    </div>
  );
};

export default CardsTitle;
