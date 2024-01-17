import { Square } from './Square'

export function WinnerModal ({ winner, resetGame }) {
  if (winner == null) return null

  const winnerText = winner === false ? 'Empate' : ' Gano'

  return (
    <section className='absolute size-full top-0 left-0 grid place-content-center bg-gray-950/70'>
      <div className='bg-gray-800 h-64 w-72 border-2 rounded-md flex flex-col justify-center items-center gap-5'>
        <h2>{winnerText}</h2>

        <header>
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <button className='border-2 rounded-md px-2 py-1 hover:bg-white hover:text-black' onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
