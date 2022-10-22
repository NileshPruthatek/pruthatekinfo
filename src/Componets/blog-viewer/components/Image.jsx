import React from "react";

const Image = ({ payload: { data } }) => {
  const { link } = data;
  return (
    <>
      {/* image Component */}
      <div className="relative m-0 p-0">
        <img src={link} className="max-w-full h-auto" alt="" />
      </div>
    </>
  );
};

export default Image;
