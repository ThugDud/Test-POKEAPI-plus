import axios from "axios";
import { useEffect, useState } from "react";
import Styled from './popular.module.css'
import { search } from "../protest/protest";

function Popular() {
    const [animesPop, setAnimesPop] = useState([]);
    const [erro, setErro] = useState(null);
    const [hoveredAnime, setHoveredAnime] = useState(null);

    const getPopularAnimes = async () => {
        try {
            const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.myanimelist.net/v2/anime/ranking', {
                headers: {
                    'X-MAL-CLIENT-ID': '8ca5026acead209eb4d29b5e38004a2e',
                },
                params: {
                    ranking_type: 'all',
                    limit: 20,
                },
            });

            console.log(response);
            setAnimesPop(response.data.data);
        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
            setErro(`Ocorreu um erro ao consumir a API: ${error.code}`);
        }
    }

    useEffect(() => {
        getPopularAnimes();
    }, []);

    return (
        <>
            <div className={Styled.container}>
                {search && <h1>search</h1>}
                {erro && <h1>{erro}</h1>}
                {animesPop.map((anime) => (
                    <div
                        className={`${Styled.CardPop} ${hoveredAnime === anime.node.id ? Styled.hovered : ''}`}
                        key={anime.node.id}
                        onMouseEnter={() => setHoveredAnime(anime.node.id)}
                        onMouseLeave={() => setHoveredAnime(null)}
                    >
                        <img className={Styled.PopImgAn} src={anime.node.main_picture.medium} alt={anime.node.title} />
                        {hoveredAnime === anime.node.id && (
                            <div className={Styled.cardinfo}>
                                <h4>{anime.node.title}</h4>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Popular;
