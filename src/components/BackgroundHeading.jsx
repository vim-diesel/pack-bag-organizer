import styled from 'styled-components';

export default function BackgroundHeading() {
  return <BackgroundTitle>Packbag</BackgroundTitle>;
}

const BackgroundTitle = styled.h1`
  font-size: 8rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 7.5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;
