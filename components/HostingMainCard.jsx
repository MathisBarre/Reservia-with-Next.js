export default function HostingMainCard(props) {
  return (
    <article className="hostingMainCard">
      <a href="#">
        <figure className="hostingMainCardFigure">
          <img className="hostingMainCardFigureImg" src={props.imgUrl} alt="Chambre avec un lit superposé avec une fenêtre vu sur la ville." />
          <figcaption className="hostingMainCardFigureCaption">
            <h3 className="hostingMainCardFigureCaptionTitle">{props.title}</h3>
          </figcaption>
        </figure>
        <p className="hostingMainCardDesc">
          Nuit à partir de <strong className="hostingMainCardDescPrice">
            {props.price}
          </strong>
        </p>
        <div className="hostingMainCardGrade">
          <Star isActivated="true"/>
          <Star isActivated="true"/>
          <Star isActivated="true"/>
          <Star isActivated="true"/>
          <Star isActivated="false"/>
        </div>
      </a>
    </article>
  )
}

function Star(props) {
  return <i className="fas fa-star hostingMainCardGradeIcon" data-active={props.isActivated} />
}