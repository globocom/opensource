import styled from "styled-components"
import media from "styled-media-query"

const Container = styled.div`
  padding: 0 1.5rem;

  ${media.greaterThan("large")`
    padding: 0;
    margin: 0 auto;
    max-width: 75rem;
  `}
`

export default Container
