import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Commet } from 'react-loading-indicators';
import { useParams } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';

export default function GameDetails() {

  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGameDetails1 = async () => {
      try {
        const response = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
          headers: {
            'x-rapidapi-key': '0cc2d6a721mshb20618e958e1114p10710ajsn7fb18ae81289',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
          }
        });
        setGame(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching game details:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchGameDetails1();
  }, [id]);
  if (loading === true) return <div className='flex pt-40 justify-center items-center'>
    <Commet color="#3A4877" size="medium" speedPlus="3" text="" textColor="" />
  </div>
  if (error) return <div className='flex justify-center items-center'><h1> Error: {error.message}</h1></div>;
  return <>
    <Helmet>
      <title>GameDetails</title>
    </Helmet>
    <div className="container mx-auto my-10  ">
      <div className="flex flex-wrap m-auto w-[90%]">
        <div className="lg:w-1/3 w-full mx-auto my-5">
          <img src={game.thumbnail} alt={game.title} className="w-full h-auto object-contain" />
        </div>
        <div className="lg:w-3/5 w-full pl-6  text-orange-50">
          <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
          <p><strong>Category:</strong> {game.genre}</p>
          <p><strong>Platform:</strong> {game.platform}</p>
          <p><strong>Status:</strong> {game.status}</p>
          <p className="mt-4">{game.description}</p>
        </div>
      </div>
    </div>
  </>
}
