document.addEventListener("DOMContentLoaded", function () {
  const currentDate = getCurrentDate();

  document.getElementById("submit-btn").addEventListener("click", function () {
    calculateOrNot(currentDate);
  });

  function calculateOrNot(currentDate) {
    let validator = false;

    if (!validator) {
      validator = validate(currentDate);
    } else {
      calculateAgeDifference(currentDate);
    }
  }

  function validate(currentDate) {
    const inputDay = document.getElementById("day").value;
    const inputMonth = document.getElementById("month").value;
    const inputYear = document.getElementById("year").value;
    const inputs = document.querySelectorAll("input");
    const yearLabel = document.getElementById("year-label");
    const monthLabel = document.getElementById("month-label");
    const dayLabel = document.getElementById("day-label");
    const labels = document.querySelectorAll("label");
    if (!inputDay && !inputMonth && !inputYear) {
      for (let input of inputs) {
        input.style.border = "solid 3px hsl(0, 100%, 67%)";
      }
      for (let label of labels) {
        label.textContent = "Invalid Input";
        label.style.color = "hsl(0, 100%, 67%)"; // Change label color to hsl(0, 100%, 67%)
      }
      setTimeout(() => {
        for (let input of inputs) {
          input.style.border = "hsl(0, 0%, 86%) 1px solid";
          input.value = ""; // Clear input value
        }
        for (let label of labels) {
          label.textContent = "Day";
          label.style.color = "hsl(0, 1%, 44%)"; // Reset label color
        }
      }, 3000); // 3 seconds
      return false;
    } else if (inputMonth > 12) {
      document.getElementById("month").style.border =
        "solid 3px hsl(0, 100%, 67%)";
      monthLabel.innerHTML = "Only 12 Months in a year!";
      monthLabel.style.color = "hsl(0, 100%, 67%)"; // Change label color to hsl(0, 100%, 67%)
      setTimeout(() => {
        document.getElementById("month").style.border =
          "solid 3px hsl(0, 0%, 86%)";
        monthLabel.textContent = "Month";
        monthLabel.style.color = "hsl(0, 1%, 44%)"; // Reset label color
        for (let input of inputs) {
          input.value = ""; // Clear input value
        }
      }, 3000); // 3 seconds
      return false;
    } else if (inputYear > currentDate.year) {
      yearLabel.innerHTML = "You were Born in the future!?";
      document.getElementById("year").style.border =
        "solid 3px hsl(0, 100%, 67%)";
      yearLabel.style.color = "hsl(0, 100%, 67%)"; // Change label color to hsl(0, 100%, 67%)
      setTimeout(() => {
        document.getElementById("year").style.border =
          "solid 3px hsl(0, 0%, 86%)";
        yearLabel.textContent = "Year";
        yearLabel.style.color = "hsl(0, 1%, 44%)"; // Reset label color
        for (let input of inputs) {
          input.value = ""; // Clear input value
        }
      }, 3000); // 3 seconds
      return false;
    } else if (inputDay > 31) {
      document.getElementById("day").style.border =
        "solid 3px hsl(0, 100%, 67%)";
      dayLabel.innerHTML = "Only 31 Days in a Month!";
      dayLabel.style.color = "hsl(0, 100%, 67%)"; // Change label color to hsl(0, 100%, 67%)
      setTimeout(() => {
        document.getElementById("day").style.border =
          "solid 3px hsl(0, 0%, 86%)";
        dayLabel.textContent = "Day";
        dayLabel.style.color = "hsl(0, 1%, 44%)"; // Reset label color
        for (let input of inputs) {
          input.value = ""; // Clear input value
        }
      }, 3000); // 3 seconds
      return false;
    } else if (!inputDay || !inputMonth || !inputYear) {
      if (!inputDay) {
        document.getElementById("day").style.border =
          "solid 3px hsl(0, 100%, 67%)";
        dayLabel.innerHTML = "Need a Day!";
        dayLabel.style.color = "hsl(0, 100%, 67%)"; // Change label color to hsl(0, 100%, 67%)
      }
      if (!inputMonth) {
        document.getElementById("month").style.border =
          "solid 3px hsl(0, 100%, 67%)";
        monthLabel.innerHTML = "Need a Month!";
        monthLabel.style.color = "hsl(0, 100%, 67%)"; // Change label color to hsl(0, 100%, 67%)
      }
      if (!inputYear) {
        document.getElementById("year").style.border =
          "solid 3px hsl(0, 100%, 67%)";
        yearLabel.innerHTML = "Need a Year!";
        yearLabel.style.color = "hsl(0, 100%, 67%)"; // Change label color to hsl(0, 100%, 67%)
      }
      setTimeout(() => {
        for (let input of inputs) {
          input.style.border = "hsl(0, 0%, 86%) 1px solid";
          input.value = ""; // Clear input value
        }
        for (let label of labels) {
          label.textContent = "Day";
          label.style.color = "hsl(0, 1%, 44%)"; // Reset label color
        }
      }, 3000); // 3 seconds
      return false;
    } else {
      for (let input of inputs) {
        input.style.border = "hsl(0, 0%, 86%) 1px solid";
      }
      calculateAgeDifference(currentDate);
      return true;
    }
  }

  function calculateAgeDifference(currentDate) {
    const inputDayValue = document.getElementById("day").value;
    const inputMonthValue = document.getElementById("month").value;
    const inputYearValue = document.getElementById("year").value;

    let ageYear = currentDate.year - inputYearValue;
    let ageMonth = currentDate.month - inputMonthValue;
    let ageDay = currentDate.day - inputDayValue;

    let dayOutputTemplate = document.getElementById("DD");
    let monthOutputTemplate = document.getElementById("MM");
    let yearOutputTemplate = document.getElementById("YY");

    yearOutputTemplate.textContent = ageYear;
    monthOutputTemplate.textContent = ageMonth;
    dayOutputTemplate.textContent = ageDay;
    setTimeout(() => {
      yearOutputTemplate.textContent = "--";
      monthOutputTemplate.textContent = "--";
      dayOutputTemplate.textContent = "--";
      //clear Inputs
      document.getElementById("day").value = "";
      document.getElementById("month").value = "";
      document.getElementById("year").value = "";
    }, 5000);
  }

  function getCurrentDate() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() - 1;
    const currentMonth = currentDate.getMonth() + 13;
    const currentDay = currentDate.getDate();
    return { year: currentYear, month: currentMonth, day: currentDay };
  }
});
