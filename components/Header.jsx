export default function Header() {
  return (
    <header className="header">
      <img className="headerImg" src="./img/reservia_logo.svg" alt="Reservia" />
      <nav className="headerNav">
        <a className="headerNavLink" href="#hosting" data-active="true">Hébergement</a>
        <a className="headerNavLink" href="#activity" data-active="false">Activités</a>
      </nav>
      <a className="headerSignup" href="#">S'inscrire</a>
    </header>
  )
}