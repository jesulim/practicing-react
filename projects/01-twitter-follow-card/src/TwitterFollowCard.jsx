import { useState } from 'react'

export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <>
      {/* <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img
            className='tw-followCard-avatar'
            alt='el avatar de midudev'
            src={`https://unavatar.io/${userName}`}
          />
          <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span className='tw-followCard-infoUserName'>@{userName}</span>
          </div>
        </header>

        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className='tw-followCard-text'>{text}</span>
            <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
          </button>
        </aside>
      </article> */}
      <article className='flex justify-between text-sm gap-8'>
        <header className='flex gap-2'>
          <img
            className='size-12 rounded-full'
            src={`https://unavatar.io/${userName}`}
            alt={`el avatar de ${userName}`}
          />
          <div className='grid'>
            <strong>{children}</strong>
            <span>{`@${userName}`}</span>
          </div>
        </header>
        <aside className='grid items-center'>
          <button
            className={`cursor-pointer rounded-full px-4 py-1 border-2 transition duration-300 ease-in-out transform hover:opacity-80
                ${isFollowing
                ? 'border-solid border-2 border-gray-300 bg-transparent text-white w-140'
                : ''
              } ${isFollowing
                ? 'hover:bg-red-100 hover:text-red-500 hover:border-red-500'
                : ''
              }`}
            onClick={handleClick}
          >
            <span>{text}</span>
            {/* <span>Dejar de seguir</span> */}
          </button>
        </aside>
      </article>
    </>
  )
}
