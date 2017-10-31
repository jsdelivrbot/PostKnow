import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: ${props => (props.width ? props.width : '1000px')}
  height: ${props => (props.height ? props.height : '1000px')}
`;

export const Hero = styled.div`
display: flex;
  @media(min-width: 800px) {
  display: none;
`;

export const InputHero = styled.div`
	position: absolute;
`;
