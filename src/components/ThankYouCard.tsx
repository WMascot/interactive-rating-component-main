import thankYouImg from "../assets/images/illustration-thank-you.svg"

type ThankYouCardProps = {
    rating: number
}

function ThankYouCard({ rating }: ThankYouCardProps) {
    return <form className="card grid-flow thank-you" data-grid-type="large">
        <img src={thankYouImg} alt="star" />
        <p className="card__result">You selected {rating} out of 5</p>
        <div className="card__main grid-flow">
            <p className="card__main_title">Thank you!</p>
            <p className="card__main_text">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
    </form>
}

export default ThankYouCard