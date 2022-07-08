import { LastImagesStyled } from "./LastImagesStyled";
import Container from "../Container"

const LastImages = ({ lastImages }) => {
    return (
        <Container>
            <LastImagesStyled>
                <h2>Last Images</h2>
                <ul>
                    {lastImages?.map((image) => (
                        <li key={image.id.toString()}>
                            < img src={image.image} alt={image.title} />
                            <div>
                                <p>{image.title} <br />  {image.tags.map((tag) => <span key={(image.id += 1).toString()}> #{tag}</span>)}</p>
                            </div>
                        </li>))}
                </ul>
            </LastImagesStyled>
        </Container>
    );
}

export default LastImages;