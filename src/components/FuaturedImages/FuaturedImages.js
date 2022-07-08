import { FuaturedImagesStyled } from "./FuaturedImagesStyles";
import Container from "../Container"

const FuaturedImages = ({ topRating }) => {

    return (
        <Container>
            <FuaturedImagesStyled>
                <h2>Fuatured Images</h2>
                <ul>
                    {topRating?.map((image) => (
                        <li key={image.id.toString()}>
                            < img src={image.image} alt={image.title} />
                            <div>
                                <p>{image.title} <br />  {image.tags.map((tag) => <span key={(image.id += 1).toString()}> #{tag}</span>)}</p>
                            </div>
                        </li>))}

                </ul>
            </FuaturedImagesStyled >
        </Container>
    );
}

export default FuaturedImages;