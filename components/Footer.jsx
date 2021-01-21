export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerColumnwrapper">
        <div className="footerColumnwrapperColumn">
          <h3 className="footerColumnwrapperColumnTitle">A propos</h3>
          <a href="#" className="footerColumnwrapperColumnLink">Fonctionnement du site</a>
          <a href="#" className="footerColumnwrapperColumnLink">Conditions générales de vente</a>
          <a href="#" className="footerColumnwrapperColumnLink">Données et confidentialités</a>
        </div>
        <div className="footerColumnwrapperColumn">
          <h3 className="footerColumnwrapperColumnTitle">Nos hébergement</h3>
          <a href="#" className="footerColumnwrapperColumnLink">Charte qualité</a>
          <a href="#" className="footerColumnwrapperColumnLink">Soumettre votre hotel</a>
        </div>
        <div className="footerColumnwrapperColumn">
          <h3 className="footerColumnwrapperColumnTitle">Assitance</h3>
          <a href="#" className="footerColumnwrapperColumnLink">Centre d'aide</a>
          <a href="#" className="footerColumnwrapperColumnLink">Nous contacter</a>
        </div>
      </div>
    </footer>
  )
}