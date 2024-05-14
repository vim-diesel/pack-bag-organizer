import styled from 'styled-components';

export default function BackgroundHeading() {
  return <BackgroundTitle>Packbag</BackgroundTitle>;
}

const BackgroundTitle = styled.h1`
  font-size: 3em;
  color: white;
  background-color: black;
  padding: 1em;
  margin: 0;
  text-align: center;
`;
