export default function PopularHosting({ imgUrl, title, price, note = 4}) {

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
    <article className="hostingMainCard hostingPopularCard">
      <a className="hostingPopularWrapcontent" href="#">
        <div className="hostingPopularWrapcontentWrapimg">
          <img className="hostingPopularWrapcontentWrapimgImg" src={ imgUrl } alt="Chambre avec un lit superposé avec une fenêtre vu sur la ville." />
        </div>
        <div className="hostingPopularWrapcontentContent">
          <h3 className="hostingMainCardFigureCaptionTitle">{ title }</h3>
          <p className="hostingMainCardDesc">Nuit à partir de <strong className="hostingMainCardDescPrice">{ price }</strong></p>
          <div className="hostingPopularWrapcontentContentWhitespace" />
          <div className="hostingMainCardGrade">
            { stars }
          </div>
        </div>
      </a>
    </article>
  )
}

function Star(props) {
  return <i className="fas fa-star hostingMainCardGradeIcon" data-active={props.isActivated} />
}