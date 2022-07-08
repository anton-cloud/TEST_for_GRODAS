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
        margin-top: 20px;
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
    }
`