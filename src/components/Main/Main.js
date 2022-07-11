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

  useEffect(() => {

    const arr = ["html", "head", "meta", "title", "script", "style", "body", "div", "header", "main", "footer", "section", "aside", "h2", "p", "ul", "li", "span", "svg", "br", "use", "img"];
    //1. Визначити загальну кількість елементів у DOM-дереві.
    const tagsArray = document.getElementsByTagName('*');
    console.group("1. Визначити загальну кількість елементів у DOM-дереві.");
    console.log(`Total number of tags in the DOM: ${tagsArray.length}`);
    console.groupEnd()


    //2. Згрупувати елементи за назвою тегу, визначити кількість елементів для кожного тегу.
    const objElements = [];

    console.group("2. Згрупувати елементи за назвою тегу, визначити кількість елементів для кожного тегу.");
    arr.forEach((tag) => {

      let value = document.getElementsByTagName(`${tag}`);

      if (value.length !== 0) {
        objElements.push({ tag: tag, amountElements: value.length, })
      }
    })
    console.groupEnd();

    //3. Згрупувати елементи за кількістю символів у назві тегу, визначити кількість елементів.
    const objAscendingOrder = [];
    let total = 0;

    [...arr].sort((a, b) => a.length - b.length).forEach((tag) => {

      let value = document.getElementsByTagName(`${tag}`);
      if (value.length !== 0) {
        objAscendingOrder.push({
          tag: tag,
          amountElements: value.length,
          tagWordsLength
            : tag.length
        })
        total += value.length;
      }
    })

    console.group("3. Згрупувати елементи за кількістю символів у назві тегу, визначити кількість елементів.");
    console.table(objAscendingOrder);
    console.log(`totalElements: ${total}`);
    //**for check 
    // console.log(`totalElements: ${total} = ${tagsArray.length}`);
    console.groupEnd()

  });

  return (

    <MainStyled>
      <FuaturedImages topRating={topRating} isDesktop={isDesktop} handleNextClick={handleNextClick} handleBackClick={handleBackClick} />
      <LastImages lastImages={lastImages} isDesktop={isDesktop} />
    </MainStyled >
  );
}

export default Main;