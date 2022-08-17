// محسابه سن کاربر با تاریخ تولد شمسی

var year = Number(prompt("سال تولد خود را وارد کنید :  "));
const thisYear = 1401;
alert("شما" + (thisYear - year) + "دارید.");

// محاسبه سن کاربر با تاریخ تولد دلخواه میلادی یا شمسی

var year = Number(prompt("سال تولد خود را وارد کنید :  "));
const thisYearMiladi = 2022;
const thisYearShamsi = 1401;
if (year > 1900) {
  alert("شما " + (thisYearMiladi - year) + " سال دارید.");
} else {
  alert("شما " + (thisYearShamsi - year) + " سال دارید.");
}