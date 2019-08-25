const failed = document.getElementsByClassName("failed");

if (failed) {
  for (let i = 0; i < failed.length; i++) {
    failed.item(i).addEventListener("click", () => alert("\"담은 과목 수강신청하기\"를 클릭하세요!"));
  }
}