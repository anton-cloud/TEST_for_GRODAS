import { useState } from "react";

const FuaturedImagesItem = ({ image, sprite }) => {

    const [isStarState, setStarState] = useState(false);
    const handleStarState = () => setStarState(!isStarState)

    return (
        <li >
            < img src={`/TEST_for_GRODAS/${image.image}`} alt={image.title} />
            <div>
                <p>{image.title} <br />  {image.tags.map((tag) => <span key={(image.id += 1).toString()}> #{tag}</span>)}</p>

            </div>

            <svg onClick={handleStarState}>
                {isStarState ? <use href={sprite + "#icon-star-solid"} /> : <use href={sprite + "#icon-star-regular"} />}
            </svg>
        </li>
    );
}

export default FuaturedImagesItem;