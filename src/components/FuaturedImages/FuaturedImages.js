import { FuaturedImagesStyled } from "./FuaturedImagesStyled";
import Container from "../Container"
import sprite from "../../icons/sprite.svg"
import FuaturedImagesList from "./FuaturedImagesList";


const FuaturedImages = ({ topRating, isDesktop, handleNextClick, handleBackClick }) => {

  return (
    <Container>
      <FuaturedImagesStyled>
        <h2>Fuatured Images</h2>
        <FuaturedImagesList topRating={topRating} sprite={sprite} />
        {isDesktop &&
          <>
            <svg className="arrow arrow__back" onClick={handleBackClick}>
              <use href={sprite + "#icon-back"} />
            </svg>
            <svg className="arrow arrow__next" onClick={handleNextClick}>
              <use href={sprite + "#icon-next"} />
            </svg>
          </>
        }
      </FuaturedImagesStyled >
    </Container>
  );
}

export default FuaturedImages;