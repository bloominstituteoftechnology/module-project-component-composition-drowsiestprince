import React from "react"
import styled from "styled-components"

const StyledFigure = styled.figure`

  figcaption {
  color:#FAF9F6;
  font-style: italic;
  text-align: center;
}

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;
  }
`

export default function Figure({imageURL, captionDate}) {
    return (
      <StyledFigure>
        <img src={imageURL}/>
        <figcaption>Photograph taken on {captionDate}</figcaption>
      </StyledFigure>
    )
  }