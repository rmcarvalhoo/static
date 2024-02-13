import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
];

const canaisListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://uploads.metropoles.com/wp-content/uploads/2023/12/12093123/hbo-max-2.jpg",
    alt: "Imagem de Mayk Brito",
  },
  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl:
      "https://www.caviarcriativo.com/storage/2020/06/logotipo-da-netflix.jpg",
    alt: "Imagem de Alanzoka",
  },
  {
    url: "https://www.twitch.tv/cellbit",
    imageUrl:
      "https://uploads.tracklist.com.br/wp-content/uploads/2022/05/prime-video-precos-758x426.png",
    alt: "Imagemd de Cellbit",
  },
];

const socialListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl: "./assets/twitch.svg",
    alt: "twitch do maykbrito",
  },
  {
    url: "https://www.twitter.com/maykbrito",
    imageUrl: "./assets/twitter.svg",
    alt: "twitter do maykbrito",
  },
  {
    url: "https://www.instagram.com/maykbrito",
    imageUrl: "./assets/instagram.svg",
    alt: "instagram do maykbrito",
  },
  {
    url: "https://www.youtube.com/maykbrito",
    imageUrl: "./assets/youtube.svg",
    alt: "youtube do maykbrito",
  },
];

export default function App() {
  return (
    <div className="App">
      {/* Header*/}
      <Header />

      {/* Main */}
      <main>
        {/* Sections*/}
        <Section
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gamesListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
        <Section
          title="Canais e streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >
          {canaisListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
