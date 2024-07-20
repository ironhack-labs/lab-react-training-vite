import { useState } from "react";

export default function ClickablePicture({img, imgClicked}) {
    const [image, setImage] = useState(img);

    const handleClick = () => {
        image === img ? setImage(imgClicked) : setImage(img);
    }
  return (
    <>
    <img src={image} alt="guy" onClick={handleClick} />
    </>
  )
}
