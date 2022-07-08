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
    background: linear-gradient(black, red);
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

`