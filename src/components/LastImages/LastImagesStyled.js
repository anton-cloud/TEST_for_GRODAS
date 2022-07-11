import styled from 'styled-components';

export const LastImagesStyled = styled.section`
    margin-top: 40px;

    h2 {
        text-align: center;
        text-transform: uppercase;
        font-size: 24px;
        color: #424242;
    }   

    ul li {
        position: relative;
        margin-top: 20px;
        cursor: pointer;
    }

    p {
        font-size: 14px;
        font-weight: 600;
        padding:  10px 0 10px 0;
    }

    p span {
        font-size: 12px;
        opacity: 0.66;
    }

    div {
        position: relative;
        width: auto;
    }

    ul li svg {
      position: absolute;
      width: 30px;
      height: 30px;
      top: 2%;
      left: 1%;
      
      padding: 1px;
      background: rgb(249,246,246);
      background: radial-gradient(circle, rgba(249,246,246,0.4318102240896359) 73%, rgba(0,0,0,0.1) 87%);
    }

    @media screen and (min-width: 680px) {
        ul {
            margin-top: 40px;

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 40px;
        }

        ul li {
            margin-top: 0px;
        }

    @media screen and (min-width: 960px) {
        ul {
            margin-top: 40px;
            grid-template-columns: repeat(3, 1fr);
        } 
        
        h2 {
            text-align: start;
            font-size: 32px;
        }
        p {
            font-size: 18px;
        }
        
        p span {
            font-size: 16px;
        }
        }
    }
`