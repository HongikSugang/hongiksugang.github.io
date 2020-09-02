const init = () => {
  const form = document.querySelector('.list-item-wrapper').cloneNode(true)
  const list = document.querySelector('#list')
  const addButton = document.querySelector('#class-add-button')
  const goButton = document.querySelector('#go-button')
  if (addButton && goButton) {
    addButton.addEventListener('click', () => list.appendChild(form.cloneNode(true)))
    goButton.addEventListener('click', () => {
      drawPage()
      downloadPage()
    })
  }
}
const drawPage = () => {
  const input = document.querySelectorAll('.list-item-input')
  const array = []
  for (let i = 0; i < input.length; i += 2) {
    const name = input[i].value
    const address = input[i + 1].value
    if (name && address) {
      const div = document.createElement('div')
      const link = document.createElement('a')
      link.classList.add('link')
      link.setAttribute('target', '_blank')
      link.appendChild(document.createTextNode(name))
      link.href = address.startsWith('https://') ? address : 'https://' + address
      div.classList.add('class-list')
      div.appendChild(link)
      document.body.appendChild(div)
    }
  }
  for (const e of document.querySelectorAll('.del, script')) e.remove()
}
const downloadPage = () => {
  const link = document.createElement('a')
  link.download = '강의실 바로가기'
  link.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(document.documentElement.outerHTML)
  link.click()
}

init()