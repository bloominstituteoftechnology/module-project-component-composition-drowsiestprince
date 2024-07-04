import React from "react"
import Figure from "./Figure"
import styled from "styled-components"

const StyledCard = styled.div`
  max-width: 1000px;
  border: 10px solid gold;
  background-color: navy;
  text-indent: 30px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;

  h1 {
    font-family: 'Times New Roman', Times, serif;
  }
  
  h2 {
    border-bottom: 3px solid gold;
    margin-bottom: 10px;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    font-size: 30px;
  }
`

export default function Card({title, text, imageURL, date}) {
    return (
      <StyledCard className='card'>
        <h2>{title}</h2>
        <p>{text}</p>
        <Figure
          imageURL={imageURL}
          captionDate={date}
        />
      </StyledCard>
    )
  }