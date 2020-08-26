const failed = document.getElementsByClassName('failed')
const loginTime = document.querySelector('#loginTime')


setInterval(() => {
  const nowDatetime = new Date()
  const nowDate = nowDatetime.getDate()
  const nowDay = nowDatetime.getDay()
  const nowHours = nowDatetime.getHours()
  const nowMinutes = nowDatetime.getMinutes()
  if (nowDate > 20 && nowDay > 0 && nowDay < 4 && (nowHours == 8 || nowHours == 12) && nowMinutes > 55) {
    alert('수강신청 페이지로 이동합니다')
    const win = window.open('https://sugang.hongik.ac.kr', '_blank')
    win.focus()
  }
}, 60000);
if (failed) {
  for (let i = 0; i < failed.length; i++) {
    failed.item(i).addEventListener('click', function () {
      alert('\'담은 과목 수강신청하기\'를 클릭하세요!')
    })
  }
}
if (loginTime) {
  const currentTime = new Date();
  const month = '/0' + (currentTime.getMonth() + 1);
  const date = currentTime.getDate() < 10 ? '/0' + currentTime.getDate() : '/' + currentTime.getDate()
  const hours = currentTime.getHours() < 10 ? ' 0' + currentTime.getHours() : ' ' + currentTime.getHours()
  const minutes = currentTime.getMinutes() < 10 ? ':0' + currentTime.getMinutes() : ':' + currentTime.getMinutes()
  const seconds = currentTime.getSeconds() < 10 ? ':0' + currentTime.getSeconds() : ':' + currentTime.getSeconds()
  loginTime.innerHTML = '<b>최근접속: </b>' + currentTime.getFullYear() + month + date + hours + minutes + seconds
}