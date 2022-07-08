import styled from 'styled-components';

export const FuaturedImagesStyled
    = styled.section`
margin-top: 40px; 
 
h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
    color: #424242;
}

ul li {
    margin-top: 20px;
    position: relative;
}

img {
    object-fit: cover;
    height: 100%;
}

div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.6895133053221288) 25%, rgba(255,255,255,0.3225665266106442) 63%);
}

p {
    position: absolute;
    bottom: 0;
    font-size: 14px;
    font-weight: 600;
    color: #fff ;
    padding: 0 10px 10px 10px;
}

p span {
    font-size: 12px;
    opacity: 0.66;
}

@media screen and (max-width: 679px) {
    ul li {
    margin-top: 20px;
    position: relative;
}
}


@media screen and (min-width: 680px) {
ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 40px;

}

li:first-child {
    margin-top: 40px;

    grid-column-start: 1;
    grid-column-end: 3; 
    grid-row-start: 1;
    grid-row-end: 3;
}

ul li {
    margin-top: 0px;
}

ul li:first-child div {
    background: linear-gradient(0deg, rgba(0,0,0,0.6895133053221288) 15%, rgba(255,255,255,0.3225665266106442) 30%);
}

p {
    padding: 0 20px 20px 20px;
}

}

`