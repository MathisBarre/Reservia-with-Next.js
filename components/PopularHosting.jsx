export default function PopularHosting({ imgUrl, title, price}) {
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
            <i className="fas fa-star hostingMainCardGradeIcon" data-active="true" />
            <i className="fas fa-star hostingMainCardGradeIcon" data-active="true" />
            <i className="fas fa-star hostingMainCardGradeIcon" data-active="true" />
            <i className="fas fa-star hostingMainCardGradeIcon" data-active="true" />
            <i className="fas fa-star hostingMainCardGradeIcon" data-active="true" />
          </div>
        </div>
      </a>
    </article>
  )
}