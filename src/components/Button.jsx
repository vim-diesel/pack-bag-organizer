import styled from "styled-components"

export default function Button({children}) {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

const StyledButton = styled.button``;