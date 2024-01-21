function getNowTime() {
  // 補 0，維持 2 位數
  const padStart = (str = "") => str.toString().padStart(2, "0");

  // 計算現在時間
  const NOW = new Date();
  const [YEAR, MONTH, DATE, HOUR, MIN, SEC] = [
    NOW.getFullYear(),
    NOW.getMonth() + 1,
    NOW.getDate(),
    NOW.getHours(),
    NOW.getMinutes(),
    NOW.getSeconds(),
  ];
  const C_YEAR = YEAR - 1911; // 西元年 - 1911 = 民國年
  // 排版現在時間
  const TIME_FORMAT = `${padStart(HOUR)}:${padStart(MIN)}:${padStart(SEC)}`;
  const DATE_FORMAT = `民國 ${C_YEAR} 年 ${padStart(MONTH)} 月 ${padStart(
    DATE
  )} 日`;
  // 將內容替換畫面內容
  const TIME_ELEMENT = document.querySelector("#time");
  TIME_ELEMENT.innerText = TIME_FORMAT;
  const DATE_ELEMENT = document.querySelector("#date");
  DATE_ELEMENT.innerText = DATE_FORMAT;
}

getNowTime(); // 進入畫面先觸發一次

// 之後每秒再觸發一次
setInterval(() => {
  getNowTime();
}, 1000);
