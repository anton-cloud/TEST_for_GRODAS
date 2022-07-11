import { LastImagesStyled } from "./LastImagesStyled";
import Container from "../Container"
import LastImagesList from "./LastImagesList";
import sprite from "../../icons/sprite.svg"

const LastImages = ({ lastImages, isDesktop }) => {
    return (
        <Container>
            <LastImagesStyled>
                <h2>Last Images</h2>
                <div>
                    <LastImagesList lastImages={lastImages} sprite={sprite} isDesktop={isDesktop} />
                </div>

            </LastImagesStyled>
        </Container>
    );
}

export default LastImages;