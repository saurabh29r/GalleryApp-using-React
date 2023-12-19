import { useState } from "react";

import React from "react";

import "./Gallaryapp.css";
const imagesList = [
  {
    id: 0,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png",
    imageAltText: "nature mountain with pond",
    thumbnailAltText: "nature mountain with pond thumbnail",
  },
  {
    id: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png",
    imageAltText: "nature sunset",
    thumbnailAltText: "nature sunset thumbnail",
  },
  {
    id: 2,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png",
    imageAltText: "nature mountain with ocean",
    thumbnailAltText: "nature mountain with ocean thumbnail",
  },
  {
    id: 3,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png",
    imageAltText: "nature mountain with forest",
    thumbnailAltText: "nature mountain with forest thumbnail",
  },
  {
    id: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png",
    imageAltText: "nature leaves",
    thumbnailAltText: "nature leaves thumbnail",
  },
  {
    id: 5,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-tree-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png",
    imageAltText: "nature tree",
    thumbnailAltText: "nature tree thumbnail",
  },
  {
    id: 6,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png",
    imageAltText: "nature waterfall",
    thumbnailAltText: "nature waterfall thumbnail",
  },
  {
    id: 7,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-river-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png",
    imageAltText: "nature river",
    thumbnailAltText: "nature river thumbnail",
  },
];

export default function Gallaryapp() {
  const [imgs, setImgs] = useState(imagesList[0].imageUrl);

  return (
    <div className="container">
      <div>
        <img src={imgs} alt="first" className="images-size" />
      </div>

      <h1 className="heading"> Your Gallery looks beautiful</h1>

      <div className="tubmnail-image-container">
        <img
          src={imagesList[0].thumbnailUrl}
          alt="first-thub"
          onClick={() => setImgs(imagesList[0].imageUrl)}
          className="image-setup"
        />

        {/* here this is second image  */}

        <img
          src={imagesList[1].thumbnailUrl}
          alt="first-thub"
          onClick={() => setImgs(imagesList[1].imageUrl)}
          className="image-setup"
        />

        {/* third images  */}

        <img
          src={imagesList[2].thumbnailUrl}
          alt="first-thub"
          onClick={() => setImgs(imagesList[2].imageUrl)}
          className="image-setup"
        />

        {/* Fourth Image starts here  */}

        <img
          src={imagesList[3].thumbnailUrl}
          alt="first-thub"
          onClick={() => setImgs(imagesList[3].imageUrl)}
          className="image-setup"
        />

        {/* Fifth image starts here  */}
        <img
          src={imagesList[4].thumbnailUrl}
          alt="first-thub"
          onClick={() => setImgs(imagesList[4].imageUrl)}
          className="image-setup"
        />
        {/* six image starts here  */}

        <img
          src={imagesList[5].thumbnailUrl}
          alt="first-thub"
          onClick={() => setImgs(imagesList[5].imageUrl)}
          className="image-setup"
        />

        {/* seventh element starts here  */}

        <img
          src={imagesList[6].thumbnailUrl}
          alt="first-thub"
          onClick={() => setImgs(imagesList[6].imageUrl)}
          className="image-setup"
        />
        {/* 
      Eighth element starts here  */}

        <img
          src={imagesList[7].thumbnailUrl}
          alt="first-thub"
          onClick={() => setImgs(imagesList[7].imageUrl)}
          className="image-setup"
        />
      </div>
    </div>
  );
}
