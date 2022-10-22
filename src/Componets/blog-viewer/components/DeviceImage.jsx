import React from "react";

const DeviceImage = ({ payload: { data } }) => {
  const { link } = data;
  return (
    <>
      {/* DeviceImage Component */}
      <div className="relative m-0 p-0">
        <img
          src={`${process.env.REACT_APP_IMG_BASEURL}/${link}`}
          className="max-w-full h-auto"
          alt=""
        />
      </div>
    </>
  );
};

export default DeviceImage;
