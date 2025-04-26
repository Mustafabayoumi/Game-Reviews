import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Commet } from 'react-loading-indicators';
import { Link } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';

export default function Superhero() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=superhero', {
          headers: {
            'x-rapidapi-key': '0cc2d6a721mshb20618e958e1114p10710ajsn7fb18ae81289',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
          }
        });
        setGames(response.data.slice(0, 10)); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching games:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading === true) return <div className='flex pt-40 justify-center items-center'>

  <Commet color="#3A4877" size="medium" speedPlus="3" text="" textColor="" />
    </div>
    if (error) return <div className='flex justify-center items-center'><h1> Error: {error.message}</h1></div>;

  const truncateTitle = (title, wordLimit) => {
    const words = title.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return title;
  };
    return<>
      <Helmet>
        <title>Superhero</title>
      </Helmet>
    <main className="container px-16 mx-auto my-5">
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map(game => (
            <Link key={game.id} to={`/game/${game.id}`}>
              <div className="h-[100%] group mx-auto flex items-center justify-center flex-wrap max-w-sm rounded overflow-hidden shadow-lg px-3 border-gray-400 border transform transition duration-300 ease-in-out hover:scale-105">
                <img className="sepia group-hover:sepia-0 rounded-md w-full pt-3 h-48 object-cover" src={game.thumbnail} alt={game.title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{truncateTitle(game.title, 15)}</div>
                  <p className="text-gray-300 text-base">
                    {game.short_description}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">{game.genre}</span>
                  <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">{game.platform}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
    </>
  
  }
