import styled from 'styled-components';

export default function EmptyView() {
  return (
    <StyledSection>
      <StyledHeader>Empty Packing List</StyledHeader>
      <StyledParagraph>Nothing to pack yet!</StyledParagraph>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const StyledParagraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;
