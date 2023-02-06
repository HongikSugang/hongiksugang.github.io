(() => {
  function sugangStart() {
    const failed = document.getElementsByClassName('failed');
    const loginTime = document.querySelector('#loginTime');

    if (failed) {
      for (let i = 0; i < failed.length; i++) {
        failed.item(i).addEventListener('click', function () {
          alert("'담은 과목 수강신청하기'를 클릭하세요!");
        });
      }
    }
    if (loginTime) {
      const currentTime = new Date();
      const month = '/0' + (currentTime.getMonth() + 1);
      const date =
        currentTime.getDate() < 10
          ? '/0' + currentTime.getDate()
          : '/' + currentTime.getDate();
      const hours =
        currentTime.getHours() < 10
          ? ' 0' + currentTime.getHours()
          : ' ' + currentTime.getHours();
      const minutes =
        currentTime.getMinutes() < 10
          ? ':0' + currentTime.getMinutes()
          : ':' + currentTime.getMinutes();
      const seconds =
        currentTime.getSeconds() < 10
          ? ':0' + currentTime.getSeconds()
          : ':' + currentTime.getSeconds();
      loginTime.textContent =
        currentTime.getFullYear() + month + date + hours + minutes + seconds;
    }
  }

  sugangStart();
})();
