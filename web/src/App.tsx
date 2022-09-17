import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdModal } from './components/CreateAdModal';
import { api } from './service/api';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    Ad: number;
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    api.get('/games')
        .then(response => setGames(response.data))
}, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20 p-12'>

      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>

        {
          games.map(game => {
            return (
              <GameBanner
                key={game.id}
                bannerUrl={game.bannerUrl}
                title={game.title}
                adsCount={game._count.Ad}
              />
            )
          })
        }
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />

      </Dialog.Root>

    </div>
  )
}

export default App