const failed = document.getElementsByClassName('failed')
const fucked = document.getElementById('fucked')
const sugangButton = document.getElementById('sugangButton')
let time = new Date
const timeBeforeClick = time.getTime()
const subjectNumber = Math.floor(Math.random() * 6 + 3)
const classCredits = document.getElementById('class-credits')
const creditList = [3, 6, 10, 13, 15, 18, 20, 22]


if (failed) {
  for (let i = 0; i < failed.length; i++) {
    failed.item(i).addEventListener('click', function() {
      alert('"수강신청" 버튼을 클릭해야 합니다!')
      location.replace("./main")
    })
  }
}
if (fucked) {
  fucked.addEventListener('click', function() {
    window.alert('"수강신청" 버튼을 클릭해야 합니다!!!')
    location.replace('./main');
  })
}
if (sugangButton) {
  sugangButton.addEventListener('click', function() {
    time = new Date;
    const timeRecorded = time.getTime() - timeBeforeClick
    alert(timeRecorded/1000 + '초 걸렸습니다')
    history.back()
  })
}
for (let i = 1; i <= subjectNumber; i++) {
  obj = document.getElementsByClassName(i)
  for (let j = 1; j >= 0; j--) {
    obj[j].classList.remove("display-none")
  }
}
classCredits.innerHTML = '現 신청 학점수 : ' + creditList[subjectNumber - 1].toString() + '학점 (' + subjectNumber.toString() + ' 과목, 사이버강좌 0 학점)'