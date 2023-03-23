import { MouseEventHandler, useState } from 'react'
import star from '../assets/images/icon-star.svg'

type RatingCardProps = {
    rating: number,
    setRating: React.Dispatch<React.SetStateAction<number>>,
    setShowThankYouCard: React.Dispatch<React.SetStateAction<boolean>>
}

function RatingCard({ rating, setRating, setShowThankYouCard }: RatingCardProps) {
    const [ratingsState, setRatingsState] = useState([false, false, false, false, false])

    function onRate(e: React.MouseEvent<HTMLElement>, index: number) {
        e.preventDefault()
        ratingsState[index] = true;
        setRatingsState(ratingsState.map((el, elIndex) => {
            if (elIndex == index) {
                el = true
                rating = elIndex + 1
                setRating(rating)
            }
            else el = false
            return el
        }))
    };

    function onSubmit(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault()
        setShowThankYouCard(true);
    }

    return <form className="card grid-flow" data-grid-type="large">
        <div className="card__star">
            <img src={star} alt="star" />
        </div>
        <div className="grid-flow" data-grid-type="medium">
            <div className="card__main grid-flow">
                <p className="card__main_title">How did we do?</p>
                <p className="card__main_text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className="card__rating-component">
                <div className={ratingsState[0] ? "card__rating-component_rate active" : "card__rating-component_rate"} onClick={(e) => onRate(e, 0)}>1</div>
                <div className={ratingsState[1] ? "card__rating-component_rate active" : "card__rating-component_rate"} onClick={(e) => onRate(e, 1)}>2</div>
                <div className={ratingsState[2] ? "card__rating-component_rate active" : "card__rating-component_rate"} onClick={(e) => onRate(e, 2)}>3</div>
                <div className={ratingsState[3] ? "card__rating-component_rate active" : "card__rating-component_rate"} onClick={(e) => onRate(e, 3)}>4</div>
                <div className={ratingsState[4] ? "card__rating-component_rate active" : "card__rating-component_rate"} onClick={(e) => onRate(e, 4)}>5</div>
            </div>
            <button className="submit" onClick={(e) => onSubmit(e)}><span>SUBMIT</span></button>
        </div>
    </form>
}

export default RatingCard