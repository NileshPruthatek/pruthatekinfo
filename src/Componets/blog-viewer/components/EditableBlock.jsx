import React from "react";
import { blockTypes } from "../context/BlockContext";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Threedots from "./Threedots";
import Image from "./Image";
import DeviceImage from "./DeviceImage";
import VideoPlayer from "./VideoPlayer";

const EditableBlock = (props) => {
  const { content: block } = props;
  switch (block.type) {
    case blockTypes.HEADING:
      document.title = block['data']['content']
      return <Heading payload={block} fontSize={32} />;
      break;
    case blockTypes.PARAGRAPH:
      return <Paragraph payload={block} />;
      break;
    case blockTypes.IMAGE:
      return <Image payload={block} />;
      break;
    case blockTypes.THREEDOTS:
      return <Threedots payload={block} />;
    case blockTypes.DEVICEIMAGE:
      return <DeviceImage payload={block} />;
      break;
    case blockTypes.SMALLHEADING:
      return <Heading payload={block} fontSize={22} />;
      break;
    case blockTypes.VIDEOURL:
      return <VideoPlayer payload={block} />;
    default:
      return <Threedots />;
      break;
  }
};

export default EditableBlock;
