import { css } from 'styled-components';

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