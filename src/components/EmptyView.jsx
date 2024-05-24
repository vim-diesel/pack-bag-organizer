import styled from 'styled-components';

export default function EmptyView() {
  return (
    <section>
      <StyledHeader>Empty Packing List</StyledHeader>
      <StyledParagraph>Nothing to pack yet!</StyledParagraph>
    </section>
  );
}

const StyledHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const StyledParagraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;
