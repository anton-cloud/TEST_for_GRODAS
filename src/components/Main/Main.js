import FuaturedImages from "../FuaturedImages";
import LastImages from "../LastImages/LastImages";
import { useEffect, useState } from "react";
import { MainStyled } from "./MainStyled";

const Main = () => {

  const [topRating, setTopRating] = useState(null);
  const [lastImages, setLastImages] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [firstIdx, setFirstIdx] = useState(0);
  const [secondIdx, setSecondIdx] = useState(3);
  const [imagesArrLength, setImagesArrLength] = useState(3);
  const breakPoint = 960;
  const isDesktop = viewportWidth >= breakPoint;

  const handleResizeWindow = () => setViewportWidth(window.innerWidth);

  const handleNextClick = () => {
    if (secondIdx + 3 > imagesArrLength) { return };

    setFirstIdx((prev) => (prev += 3))
    setSecondIdx((prev) => (prev += 3))
  }

  const handleBackClick = () => {
    if (firstIdx - 3 < 0) { return };

    setFirstIdx((prev) => (prev -= 3))
    setSecondIdx((prev) => (prev -= 3))
  }

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
  }, []);

  useEffect(() => {

    const port = process.env.PORT || 3000;
    const ferchData = async () => fetch(`http://localhost:${port}/data.json`)

    ferchData().then((response) => response.json())
      .then((result) => {

        if (isDesktop) {

          setImagesArrLength(result.length)

          setTopRating([...result].sort(
            (firstImage, secondImage) => firstImage.rating - secondImage.rating
          ).slice(firstIdx, secondIdx));
        }

        if (!isDesktop) {
          setTopRating([...result].sort(
            (firstImage, secondImage) => firstImage.rating - secondImage.rating
          ).slice(0, 5));
        }


        setLastImages([...result].sort(
          (firstImage, secondImage) => firstImage.age - secondImage.age
        ).slice(0, 2))
      });
  }, [firstIdx, secondIdx]);

  return (

    <MainStyled>
      <FuaturedImages topRating={topRating} isDesktop={isDesktop} handleNextClick={handleNextClick} handleBackClick={handleBackClick} />
      <LastImages lastImages={lastImages} isDesktop={isDesktop} />
    </MainStyled >
  );
}

export default Main;