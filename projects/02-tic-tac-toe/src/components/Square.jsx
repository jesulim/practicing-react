export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `size-24 border-2 rounded-md grid place-content-center text-5xl  ${isSelected ? 'bg-blue-500' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
