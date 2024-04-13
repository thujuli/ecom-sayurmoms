import { AspectRatio } from "../ui/aspect-ratio";
import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  image: string;
};

const BannerCard: React.FC<Props> = (props) => {
  const { image, title } = props;

  return (
    <AspectRatio ratio={15 / 8}>
      <Image src={image} alt={title} fill sizes="100vw" />
    </AspectRatio>
  );
};

export default BannerCard;
