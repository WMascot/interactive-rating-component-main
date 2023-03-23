import { useState } from "react"
import RatingCard from "./components/RatingCard"
import ThankYouCard from "./components/ThankYouCard"

function App() {
  const [showThankYouCard, setShowThankYouCard] = useState(false)
  const [rating, setRating] = useState(0)

  return (
    <>
      {!showThankYouCard ?
        <RatingCard rating={rating} setRating={setRating} setShowThankYouCard={setShowThankYouCard} /> :
        <ThankYouCard rating={rating} />}
    </>
  )
}

export default App