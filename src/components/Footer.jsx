import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledFooter>
      <h6>Copyright 2040 All Rights Reserved</h6>
      <h6>Version 1.1</h6>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: min(972px, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  opacity: 0.5;
  margin-top: 12px;
`;
