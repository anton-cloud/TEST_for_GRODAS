import styled from 'styled-components';

export const FuaturedImagesStyled
  = styled.section`
margin-top: 40px; 
position: relative;
 
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

ul li svg {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 3%;
  left: 3%;

  padding: 1px;
  background: rgb(249,246,246);
  background: radial-gradient(circle, rgba(249,246,246,0.4318102240896359) 73%, rgba(0,0,0,0.1) 87%);
}

.arrow {
  position: absolute;
  top:45%;


  width: 50px;
  height: 50px;

  fill: #bdbdbd;
  padding:30px 5px;

  cursor: pointer;
  transition: background-color 1s ease;
}

.arrow:hover {
  fill: rgba(0,0,0,.13);
  background-color: #616161;
}

.arrow__back {
  left: -8%;
}

.arrow__next {
  right: -8%;
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
    cursor: pointer;
}

ul li:first-child div {
    background: linear-gradient(0deg, rgba(0,0,0,0.6895133053221288) 15%, rgba(255,255,255,0.3225665266106442) 30%);
}

p {
    padding: 0 20px 20px 20px;
}

}

@media screen and (min-width: 960px) {
  
  h2 {
    font-size: 32px;
    text-align: start;
  }


  ul {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 40px;

}

  li:first-child {
    margin-top: 0;
    grid-column-start: 1;
    grid-column-end: 3; 
    grid-row-start: 1;
    grid-row-end: 3;
  }

  p {
    font-size: 18px;
  }

  p span {
    font-size: 16px;
  }
}

`