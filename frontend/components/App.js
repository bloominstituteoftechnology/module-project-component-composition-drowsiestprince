import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    // fetchPhoto()
    setApod({
      "date": "2024-06-27",
      "explanation": "Jets of material blasting from newborn stars, are captured in this James Webb Space Telescope close-up of the Serpens Nebula. The powerful protostellar outflows are bipolar, twin jets spewing in opposite directions. Their directions are perpendicular to accretion disks formed around the spinning, collapsing stellar infants. In the NIRcam image, the reddish color represents emission from molecular hydrogen and carbon monoxide produced as the jets collide with the surrounding gas and dust. The sha...",
      "hdurl": "https://apod.nasa.gov/apod/image/2406/STScI-SerpNorth.png",
      "media_type": "image",
      "service_version": "v1",
      "title": "Protostellar Outflows in Serpens",
      "url": "https://apod.nasa.gov/apod/image/2406/STScI-SerpNorth1024.png"
    })
  }, [])
  if (!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  )
}

export default App
