function calculateOrNot() {
  let validator = false; // Assign a value to validator
  if (!validator) {
    validate();
  } else {
    calculateAgeDifference();
  }
}

function validate() {
  const inputDay = document.getElementById("day").value;
  const inputMonth = document.getElementById("month").value;
  const inputYear = document.getElementById("year").value;
  const inputs = document.querySelectorAll("input");
  const error = document.querySelectorAll(".error");
  for (let input of inputs) {
    input.style.borderColor = ""; // Reset border color for all inputs
  }

  if (!inputDay || !inputMonth || !inputYear) {
    for (let input of inputs) {
      input.style.borderColor = "hsl(0, 100%, 67%)";
    }
    for (let err of error) {
      err.style.display = "block";
    }
  } else {
    calculateAgeDifference();
  }
}

function calculateAgeDifference() {
  const inputDayValue = document.getElementById("day").value;
  const inputMonthValue = document.getElementById("month").value;
  const inputYearValue = document.getElementById("year").value;

  const { year, month, day } = getCurrentDate();

  let ageYear = year - inputYearValue;
  let ageMonth = month - inputMonthValue;
  let ageDay = day - inputDayValue;

  let dayOutputTemplate = document.getElementById("DD");
  let monthOutputTemplate = document.getElementById("MM");
  let yearOutputTemplate = document.getElementById("YY");

  yearOutputTemplate.textContent = ageYear;
  monthOutputTemplate.textContent = ageMonth;
  dayOutputTemplate.textContent = ageDay;
}

function getCurrentDate() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() - 1;
  const currentMonth = currentDate.getMonth() + 13;
  const currentDay = currentDate.getDate();
  return { year: currentYear, month: currentMonth, day: currentDay };
}
