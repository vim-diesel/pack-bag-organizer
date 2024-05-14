import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <h6>Copyright 2040 All Rights Reserved</h6>
      <h6>Version 1.1</h6>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: black;
  color: white;
  padding: 1em;
  text-align: center;
`;