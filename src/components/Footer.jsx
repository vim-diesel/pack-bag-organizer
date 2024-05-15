import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledFooter>
      <small>Copyright 2040 Devflow Inc.</small>
      <p>Version <strong>1.1</strong></p>
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
