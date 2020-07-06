const failed = document.getElementsByClassName('failed');
const fucked = document.getElementById('fucked');
const sugangButton = document.getElementById('sugangButton');
let time = new Date;
const timeBeforeClick = time.getTime();
const subject_number = Math.floor(Math.random() * 5 + 3)


if (failed) {
  for (let i = 0; i < failed.length; i++) {
    failed.item(i).addEventListener('click', function() {
      alert('"수강신청" 버튼을 클릭해야 합니다!');
      location.replace("./main");
    });
  }
}
if (fucked) {
  fucked.addEventListener('click', function() {
    window.alert('"수강신청" 버튼을 클릭해야 합니다!!!');
    location.replace('./main');
  });
}
if (sugangButton) {
  sugangButton.addEventListener('click', function() {
    time = new Date;
    const timeRecorded = time.getTime() - timeBeforeClick;
    alert(timeRecorded/1000 + '초 걸렸습니다');
    history.back()
  });
}
console.log(subject_number)
for (let i = subject_number; i <= 7; i++) {
  obj = document.getElementsByClassName(i)
  for (let j = 1; j >= 0; j--) {
    obj[j].classList.add("display-none")
  }
}