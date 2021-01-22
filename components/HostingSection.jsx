import HostingMainCard from "components/HostingMainCard"
import PopularHosting from "components/PopularHosting"

export default function HostingSection() {
  return (
    <section className="hosting" id="hosting">
      <div className="hostingMain">
        <header className="hostingMainHeader">
          <h2 className="hostingMainHeaderTitle">Hébergement à Marseille</h2>
        </header>
          <HostingMainCard 
            imgUrl="./img/hosting/small/marcus-loke-WQJvWU_HZFo-unsplash.jpg" 
            title="Auberge la Cannebière" 
            price="25€" 
            note={4}
          />
          <HostingMainCard 
            imgUrl="./img/hosting/small/fred-kleber-gTbaxaVLvsg-unsplash.jpg"
            title="Hôtel du port" 
            price="52€" 
            note={5}
          />
          <HostingMainCard 
            imgUrl="./img/hosting/small/reisetopia-B8WIgxA_PFU-unsplash.jpg"
            title="Hôtel Les mouettes" 
            price="76€" 
            note={4}
          />
          <HostingMainCard 
            imgUrl="./img/hosting/small/annie-spratt-Eg1qcIitAuA-unsplash.jpg"
            title="Auberge de la mer" 
            price="46€" 
            note={3}
          />
          <HostingMainCard 
            imgUrl="./img/hosting/small/nicate-lee-kT-ZyaiwBe0-unsplash.jpg"
            title="Auberge Le Panier" 
            price="23€" 
            note={4}
          />
          <HostingMainCard 
            imgUrl="./img/hosting/small/febrian-zakaria-M6S1WvfW68A-unsplash.jpg"
            title="Hôtel chez Amina" 
            price="96€" 
            note={5}
          />
        <a className="hostingMainViewmore" href="#">Afficher plus</a>
      </div>
      <aside className="hostingPopular">
        <h2 className="hostingPopularTitle">Les plus populaire <i className="fas fa-chart-line" /></h2>
        <PopularHosting 
          title="Hôtel Le soleil du matin" 
          price="128€" 
          imgUrl="./img/hosting/small/emile-guillemot-Bj_rcSC5XfE-unsplash.jpg"
          note={5}
        />
        <PopularHosting 
          title="Au coeur de l'eau Chambres d'hôtes" 
          price="71€" 
          imgUrl="./img/hosting/small/aw-creative-VGs8z60yT2c-unsplash.jpg"
          note={4}
        />
        <PopularHosting 
          title="Hôtel Tout bleu et Blanc" 
          price="68€" 
          imgUrl="./img/hosting/small/febrian-zakaria-sjvU0THccQA-unsplash.jpg"
          note={4}
        />
      </aside>
    </section>
  )
}