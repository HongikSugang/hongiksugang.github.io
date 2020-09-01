const list = document.querySelector('#list')
const addButton = document.querySelector('#class-add-button')
const headline = document.querySelector('#headline')
const goButton = document.querySelector('#go-button')
const linkWrapper = document.createElement('a')
linkWrapper.classList.add('generated-link')
linkWrapper.setAttribute('target', '_blank')

let form = document.querySelector('.list-item-wrapper').cloneNode(true)

const addForm = () => {
  let newform = form.cloneNode(true)
  list.appendChild(form)
  form = newform
}
const generateLink = () => {
  const input = Array.from(document.getElementsByClassName('list-item-input'))
  const array = []
  for (let i = 0; i < input.length; i += 2) {
    if (!input[i].value || !input[i+1].value) continue;
    if (!input[i+1].value.startsWith('https://')) input[i+1].value = 'https://' + input[i+1].value
    array.push([input[i].value, input[i + 1].value])
  }
  // document.body.innerHTML = ''
  array.forEach(e => {
    let div = document.createElement('div')
    div.classList.add('class-list')
    let link = linkWrapper.cloneNode()
    link.appendChild(document.createTextNode(e[0]))
    link.href = e[1]
    div.appendChild(link)

    document.body.appendChild(div)
  })
  headline.innerHTML = '강의실 링크'
  headline.id = 'hl'
  document.querySelector('#toggleMenu').remove()
  document.querySelector('#topNav').remove()
  document.querySelector('#sidebar').remove()
  document.querySelector('#sideOverlay').remove()
  document.querySelector('#content-area').remove()
  // document.querySelector('#list').remove()
  // document.querySelector('#class-add-button').remove()
  // document.querySelector('#go-button').remove()
  Array.from(document.getElementsByClassName('del')).forEach(e => e.remove())
  document.head.children[document.head.children.length - 2].remove()
  alert('"ctrl + s"또는 "마우스 우클릭 > 다른 이름으로 저장"을 눌러 저장하세요.')
}


addButton.addEventListener('click', () => addForm())
goButton.addEventListener('click', () => generateLink())