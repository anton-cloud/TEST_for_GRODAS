import Banner from "../../Banner";
import LastImagesItem from "../LastImagesItem";

const LastImagesList = ({ lastImages, sprite, isDesktop }) => {
    return (
        <ul>
            {lastImages?.map((image) => (
                <LastImagesItem image={image} sprite={sprite} key={(image.id += 2).toString()} />
            ))}
            {isDesktop && <li>
                <Banner />
            </li>}
        </ul>
    );
}

export default LastImagesList;