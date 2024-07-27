import styled from "styled-components"

export const Title = styled.h1`
    font-size: 50px;
    color: white;
    font-weight: 500;
    margin: 10px 0px;
    text-shadow: -15px 10px 40px #606060;
    @media (max-width: 768px) {
        font-size: 40px;
        line-height: 40px;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 50px;
        line-height: 40px;
    }
`;

export const Subtitle = styled.h2`
    font-size: 30px;
    color: ${(props) => {
        return props.$link ? '#59ecc9' : 'white'
    }};
    font-weight: 400;
    margin: 10px 0px;
    text-shadow: -15px 10px 40px #606060;
    @media (max-width: 768px) {
        font-size: 25px;
        line-height: 30px;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 30px;
        line-height: 30px;
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    color: #ffffff;
    font-weight: 300;
    margin: 5px 0px;
    @media (max-width: 1023px) {
        font-size: 18px;
    }
`