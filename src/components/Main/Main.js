import FuaturedImages from "../FuaturedImages";
import LastImages from "../LastImages/LastImages";
import { useEffect, useState } from "react";
import { MainStyled } from "./MainStyled";

const Main = () => {
    const [images, setImages] = useState(null);
    const [topRating, setTopRating] = useState(null);
    const [lastImages, setLastImages] = useState(null);

    useEffect(() => {
        const port = process.env.PORT || 3000;
        const ferchData = async () => fetch(`http://localhost:${port}/data.json`)
        ferchData().then((response) => response.json())
            .then((result) => {
                setImages(result)
                setTopRating([...result].sort(
                    (firstImage, secondImage) => firstImage.rating - secondImage.rating
                ).slice(0, 5));
                setLastImages([...result].sort(
                    (firstImage, secondImage) => firstImage.age - secondImage.age
                ).slice(0, 2))

                console.log(lastImages);
            });
    }, []);


    return (

        <MainStyled>

            <FuaturedImages topRating={topRating} />
            <LastImages lastImages={lastImages} />

        </MainStyled>
    );
}

export default Main;