// import './App.css'
// import { TwitterFollowCard } from './TwitterFollowCard'

// const users = [
//   {
//     userName: 'midudev',
//     name: 'Miguel Ángel Durán',
//     isFollowing: false
//   },
//   {
//     userName: 'jesulim',
//     name: 'Ivan Martinez',
//     isFollowing: false
//   },
//   {
//     userName: 'PacoHdezs',
//     name: 'Paco Hdez',
//     isFollowing: false
//   },
//   {
//     userName: 'TMChein',
//     name: 'Tomas',
//     isFollowing: false
//   }
// ]

// export function App () {
//   return (
//     <section className='bg-gray-900 text-white h-screen grid place-content-center gap-2'>
//       {
//         users.map(({ userName, name, isFollowing }) => (
//           <TwitterFollowCard
//             key={userName}
//             userName={userName}
//             initialIsFollowing={isFollowing}
//           >
//             {name}
//           </TwitterFollowCard>
//         )
//         )
//       }
//     </section>
//   )
// }
import TwitterFollowCard from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false
  },
  {
    userName: 'jesulim',
    name: 'Ivan Martinez',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: false
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='bg-gray-900 text-white h-screen grid place-content-center gap-4'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
            initialIsFollowing={isFollowing}
          />
        )
        )
      }
    </section>
  )
}
