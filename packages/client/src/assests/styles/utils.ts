import { css } from "emotion";

export const flexCenterX = css`
  display: flex;
  justify-content: center;
`;

export const flexCenterY = css(flexCenterX, {
  flexFlow: "column"
});
