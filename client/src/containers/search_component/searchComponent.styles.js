import Styled from "styled-components";

export const SearchWrapper = Styled.div`
  display: flex;
  width: ${props => (props.width ? props.width : "1000px")}
  height: ${props => (props.height ? props.height : "1000px")}
`;
