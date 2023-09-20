import React from "react";

const AddCardInput = () => {
  return (
    <div className="bg-gray-400 rounded  h-[150px] w-[313px] ">
      <form className="">
        <textarea
          className="w-[313px] min-h-[100px] p-2 text-lg rounded"
          placeholder="Enter your text here..."
        ></textarea>
      </form>
      <form className="flex justify-between">
        <label className="cursor-pointer">
          <input type="file" className="hidden" />
          Choose Img
        </label>
        <label className="">
          <input type="submit" value="Submit" className="cursor-pointer" />
        </label>
      </form>
    </div>
  );
};

export default AddCardInput;
