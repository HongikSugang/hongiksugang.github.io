const failed = document.getElementsByClassName("failed");
const fucked = document.getElementById("fucked");
const sugangButton = document.getElementById("sugangButton");
let time = new Date;
const timeBeforeClick = time.getTime();


if (failed) {
  for (let i = 0; i < failed.length; i++) {
    failed.item(i).addEventListener("click", () => {
      alert("망했습니다! \"수강신청 버튼\"을 클릭해야 합니다!");
      location.replace("/");
    });
  }
}
if (fucked) {
  fucked.addEventListener("click", () => {
    alert("ㄹㅇ 망했습니다.\n\"수강신청 버튼\"을 클릭해야 합니다!!!")
    location.replace("/");
  });
}
if (sugangButton) {
  sugangButton.addEventListener("click", () => {
    time = new Date;
    const timeRecorded = time.getTime() - timeBeforeClick;
    const sec = Math.floor(timeRecorded / 1000);
    const mil = timeRecorded % 1000;
    alert(sec + "." + mil + "초 걸렸습니다");
    location.replace("/");
  });
}