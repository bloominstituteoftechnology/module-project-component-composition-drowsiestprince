import React from "react"

export default function Figure({imageURL, captionDate}) {
    return (
      <figure>
        <img src={imageURL}/>
        <figcaption>Photograph taken on {captionDate}</figcaption>
      </figure>
    )
  }