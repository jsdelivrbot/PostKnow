import Styled from "styled-components";
import { THEME_AQUA } from "../../../consts/colorScheme";

export const HeaderWrapper = Styled.div`
	background: ${THEME_AQUA};
  padding: 20px;
  @media(min-width: 800px) {
    background: yellow;
  }
`;
