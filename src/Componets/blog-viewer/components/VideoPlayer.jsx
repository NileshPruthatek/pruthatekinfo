import React from "react";
import ReactPlayer from "react-player/youtube";
import style from "../styles/VideoPlayer.module.css";

const VideoPlayer = ({ payload: { data } }) => {
  const { link } = data;

  return (
    <>
      <ReactPlayer
        url={link}
        className={style["react-player"]}
        playing={true}
        loop={true}
        controls={true}
        muted={true}
        height="false"
        width="false"
      />
    </>
  );
};

export default VideoPlayer;
