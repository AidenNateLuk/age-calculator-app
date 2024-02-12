function calculateAgeDifference(event) {
  event.preventDefault();

  const inputDay = document.getElementById("input-day").value;
  const inputMonth = document.getElementById("input-month").value;
  const inputYear = document.getElementById("input-year").value;

  const { year, month, day } = getCurrentDate();

  let ageYear = year - inputYear;
  let ageMonth = month - inputMonth;
  let ageDay = day - inputDay;

  let dayOutputTemplate = document.getElementById("day-output-template");
  let monthOutputTemplate = document.getElementById("month-output-template");
  let yearOutputTemplate = document.getElementById("year-output-template");

  yearOutputTemplate.innerHTML = `${ageYear} years`;
  monthOutputTemplate.innerHTML = `${ageMonth} months`;
  dayOutputTemplate.innerHTML = `${ageDay} days`;
}

function getCurrentDate() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  return { year: currentYear, month: currentMonth, day: currentDay };
}
