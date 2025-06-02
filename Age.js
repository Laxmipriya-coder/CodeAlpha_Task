const dobInput = document.getElementById("dob");
const result = document.getElementById("result");
const calculateBtn = document.getElementById("calculate");
const clearBtn = document.getElementById("clear");

function calculateAge() {
  const dobValue = dobInput.value;

  if (!dobValue) {
    result.innerText = "Please select your date of birth.";
    return;
  }

  const dob = new Date(dobValue);
  const today = new Date();

  if (dob > today) {
    result.innerText = "Date of birth cannot be in the future!";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerText = `You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
}

function clearForm() {
  dobInput.value = "";
  result.innerText = "";
}

// Events
calculateBtn.addEventListener("click", calculateAge);
dobInput.addEventListener("input", calculateAge); // Live update
clearBtn.addEventListener("click", clearForm);
