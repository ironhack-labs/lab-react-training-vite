import { useState } from "react";

export default function Carousel({images}) {
    const photos = images
    const [profile, setProfile] = useState(photos[0]);

    const prev = () => {
        const arrayNum = photos.indexOf(profile);
        setProfile(photos[arrayNum - 1]);
        if (arrayNum === 0) {
            setProfile(photos[photos.length - 1]);
        }
    }
    const next = () => {
        const arrayNum = photos.indexOf(profile);
        setProfile(photos[arrayNum + 1]);
        if (arrayNum === photos.length - 1) {
            setProfile(photos[0]);
        }
    }
  return (
    <div className="flex flex-row">
        <button onClick={() => prev()}>left</button>
        <img src={profile} alt="guy" />
        <button onClick={() => next()}>right</button>
    </div>
  )
}
