import { useEffect, useState, React } from 'react'
import { useParams } from 'react-router-dom';
import { jikan } from '../../../api'
import { Link } from 'react-router-dom';
import './CardPage.css';

function CardPage() {
  const [anime, setAnime] = useState(null)

  let params = useParams();
  function getGenres() {
    return anime.genres.map(item => item.name).join(', ');
  }
  console.log(anime, 'ANI');
  async function fetch() {
    try{
      const responce = await jikan.get(`/anime/${params.id}/full`);
      setAnime(responce.data.data);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetch();
  }, [])

  if (!anime) return null

  return (
      <div className="cardPage">
        <div className="imageWrap">
          <div className="cardPageImg" style={{backgroundImage: `url(${anime.images.jpg.image_url})`}} />
        </div>
        <div className="desriptionWrap">
          <h1>
            <span className="cardPageTitle">{anime.title}</span>
            " {anime.aired.string}" смотреть онлайн
          </h1>
          <div className="desription">
            <span>{anime.synopsis}</span>
          </div>
          <div className="alistRow">
            <div className="alist">
              <ul>
                <li>
                  <span>Название: </span>
                  <span>{anime.title}</span>
                </li>
                <li>
                  <span>Статус: </span>
                  <span>{anime.status}</span>
                </li>
                <li>
                  <span>Эпизоды: </span>
                  <span>{anime.episodes}</span>
                </li>
              </ul>
            </div>
            <div className="alist">
                <ul>
                  <li>
                    <span>Источник: </span>
                    <span>{anime.source}</span>
                  </li>
                  <li>
                    <span>Рейтинг: </span>
                    <span>{anime.score}</span>
                  </li>
                  <li>
                    <span>Демография: </span>
                    <span>{anime.demographics[0]?.name}</span>
                  </li>
                </ul>
            </div>
            <div className="alistWide">
                <ul>
                  <li>
                    <span>Жанр: </span>
                    <span>{getGenres()}</span>
                  </li>
                  <li>
                    <span>Трейлер: </span>
                    <Link to={anime.trailer.url}>{anime.trailer.url}</Link>
                  </li>
                  <li>
                    <span>Длительность: </span>
                    <span>{anime.duration}</span>
                  </li>
                </ul>
            </div>
          </div>

        </div>
      </div>
  );
}

export default CardPage;
