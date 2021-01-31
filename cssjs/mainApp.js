(() => {
  const sideOverlay = document.querySelector('#sideOverlay')
  const toggleMenu = document.querySelector('#toggleMenu')
  const currentYear = document.querySelector('#currentYear')

  sideOverlay.addEventListener('click', function () {
    toggleMenu.checked = false
  })
  currentYear.innerHTML = new Date().getFullYear()
})()
