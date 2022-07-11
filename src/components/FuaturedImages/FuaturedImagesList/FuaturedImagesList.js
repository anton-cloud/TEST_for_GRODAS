import FuaturedImagesItem from "./FuaturedImagesItem";

const FuaturedImagesList = ({ topRating, sprite }) => {

    return (
        <ul>
            {topRating?.map((image) => (
                <FuaturedImagesItem image={image} sprite={sprite} key={(image.id += 1.1).toString()} />))}
        </ul>
    );
}

export default FuaturedImagesList;