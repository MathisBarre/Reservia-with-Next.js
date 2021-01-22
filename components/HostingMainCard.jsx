import { useEffect } from "react"

export default function HostingMainCard({imgUrl, title, price, note = 4}) {

  const stars = []

  // Add the stars corresponding to the note
  for (let i = 0; i < note; i++) {
    stars.push(<Star key={i} isActivated={true} />)
  }

  // Add empty stars
  for (let i = note; i < 5; i++) {
    stars.push(<Star key={i} isActivated={false} />)
  }

  return (
    <article className="hostingMainCard">
      <a href="#">
        <figure className="hostingMainCardFigure">
          <img className="hostingMainCardFigureImg" src={imgUrl} alt="Chambre avec un lit superposé avec une fenêtre vu sur la ville." />
          <figcaption className="hostingMainCardFigureCaption">
            <h3 className="hostingMainCardFigureCaptionTitle">{title}</h3>
          </figcaption>
        </figure>
        <p className="hostingMainCardDesc">
          Nuit à partir de <strong className="hostingMainCardDescPrice">
            {price}
          </strong>
        </p>
        <div className="hostingMainCardGrade">
          {stars}
        </div>
      </a>
    </article>
  )
}

function Star(props) {
  return <i className="fas fa-star hostingMainCardGradeIcon" data-active={props.isActivated} />
}