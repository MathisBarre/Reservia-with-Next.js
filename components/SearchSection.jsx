export default function() {
  return (
    <section className="search">
    <header className="searchHeader">
      <h1 className="searchHeaderTitle">Trouvez votre hébergement pour des vacances de rêve</h1>
      <p className="searchHeaderSubtitle">En plein centre de ville ou en pleine nature</p>
    </header>
    <form className="searchForm" action="proceedFrom.html" method="GET">
      <span className="searchFormWrapicon">
        <i className="fas fa-map-marker-alt searchFormWrapiconIcon" />
      </span>
      <input className="searchFormSearchinput" type="search" placeholder="Marseille, France" size={1} />
      <button className="searchFormSubmitinput">
        <span className="searchFormSubmitinputText">Rechercher</span>
        <i className="searchFormSubmitinputIcon fas fa-search" />
      </button>
    </form>
    <div className="searchFilters">
      <h2 className="searchFiltersTitle">Filtres</h2>
      <div className="searchFiltersFilter">
        <div className="searchFiltersFilterWrapicon">
          <i className="fas fa-money-bill-wave searchFiltersFilterWrapiconIcon" />
        </div>
        <span className="searchFiltersFilterTitle">Économique</span>
      </div>
      <div className="searchFiltersFilter">
        <div className="searchFiltersFilterWrapicon">
          <i className="fas fa-child searchFiltersFilterWrapiconIcon" />
        </div>
        <span className="searchFiltersFilterTitle">Familial</span>
      </div>
      <div className="searchFiltersFilter">
        <div className="searchFiltersFilterWrapicon">
          <i className="fas fa-heart searchFiltersFilterWrapiconIcon" />
        </div>
        <span className="searchFiltersFilterTitle">Romantique</span>
      </div>
      <div className="searchFiltersFilter">
        <div className="searchFiltersFilterWrapicon">
          <i className="fas fa-dog searchFiltersFilterWrapiconIcon" />
        </div>
        <span className="searchFiltersFilterTitle">Animaux autorisés</span>
      </div>
    </div>
    <div className="searchResult">
      <div className="searchResultWrapicon"><i className="fas fa-info searchResultWrapiconIcon" /></div>
      <p className="searchResultText">Plus de 500 logements sont disponibles dans cette ville</p>
    </div>
  </section>
  )
}