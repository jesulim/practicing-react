export const saveGameToStorage = ({ board, turn }) => {
  // guardar partida en localstorage
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}

export const resetGameFromStorage = () => {
  // resetear partida en localstorage
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
