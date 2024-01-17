import { useEffect, useState } from 'react'

export default function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // const className = `absolute bg-blue-500 rounded-full opacity-80 pointer-events-none -left-5 -top-5 size-10 translate-x-[${position.x}px] translate-y-[${position.y}px]`

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('cursor-none', enabled)

    return () => {
      document.body.classList.remove('cursor-none')
    }
  }, [enabled])

  return (
    <main>
      {/* <div className={className} /> */}
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)} className='mt-4 rounded-md bg-gray-900 p-2'>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

// import { useEffect, useState } from 'react'

// function App () {s
//   const [enabled, setEnabled] = useState(false)
//   const [position, setPosition] = useState({ x: 0, y: 0 })

//   // pointer move
//   useEffect(() => {
//     console.log('efecto', { enabled })

//     const handleMove = (event) => {
//       const { clientX, clientY } = event
//       console.log('handleMove', { clientX, clientY })
//       setPosition({ x: clientX, y: clientY })
//     }

//     if (enabled) {
//       window.addEventListener('pointermove', handleMove)
//     }

//     // cleanup
//     // cuando el componente se desmonta
//     // cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
//     return () => {
//       console.log('cleanup')
//       window.removeEventListener('pointermove', handleMove)
//     }
//   }, [enabled])

//   // change body classname
//   useEffect(() => {
//     document.body.classList.toggle('no-cursor', enabled)

//     return () => {
//       document.body.classList.remove('no-cursor')
//     }
//   }, [enabled])

//   // [] -> solo se ejecuta una vez
//   // [enabled] -> se ejecuta cada vez que cambia enabled y cuando se monta el componente
//   // undefined -> se ejecuta cada vez que se renderiza el componente

//   return (
//     <main>
//       <div style={{
//         position: 'absolute',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         border: '1px solid #fff',
//         borderRadius: '50%',
//         opacity: 0.8,
//         pointerEvents: 'none',
//         left: -20,
//         top: -20,
//         width: 50,
//         height: 50,
//         transform: `translate(${position.x}px, ${position.y}px)`
//       }}
//       />
//       <button onClick={() => setEnabled(!enabled)}>
//         {enabled ? 'Desactivar' : 'Activar'} seguir puntero
//       </button>
//     </main>
//   )
// }

// export default App
