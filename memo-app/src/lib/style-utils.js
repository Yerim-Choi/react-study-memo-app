import { css, keyframes } from 'styled-components';


export const media = ({
    desktop: (...args) => css`
    // 1200px 미만
        @media (max-width: 1200px) {
            ${css(...args)}
        }
    `,

    tablet: (...args) => css`
    // 1200px 미만
        @media (max-width: 992px) {
            ${css(...args)}
        }
    `,

    mobile: (...args) => css`
    // 600px 미만
        @media (max-width: 600px) {
            ${css(...args)}
        }
    `
});


export const transitions = {
    stretchOut: keyframes`
        0%{
            opacity: 0;
            transform: scale(0.25,0.25);
        }
        100% {
            opacity: 1;
            transform: scale(1, 1);
        }
    `,
    shrinkIn: keyframes`
        0% {
            opacity: 1;
            transform: scale(1,1);
        }
        100% {
            opacity: 0;
            transform: scale(0.25,0.25);
        }
    `
}