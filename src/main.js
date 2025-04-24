import './style.css'


const colorChangeBtn = document.querySelector('.color__btn')
const colorText = document.querySelector('.color__text')

const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#F033FF",
  "#FF33A8", "#33FFF5", "#FFC733", "#8A2BE2",
  "#7FFF00", "#DC143C", "#00FFFF", "#9932CC",
  "#FF8C00", "#E9967A", "#8FBC8F", "#483D8B"
];


colorChangeBtn.addEventListener('click', () => {

  const randomIndex = Math.floor(Math.random() * colors.length)

  document.body.style.background = colors[randomIndex]
  colorText.textContent = colors[randomIndex]
  colorChangeBtn.style.background = colors[randomIndex]
})