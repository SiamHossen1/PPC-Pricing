function calculatePrice() {
  const userInput = parseFloat(document.getElementById("userInput").value) || 0;

  const minimumMonthlyBudget = 2000;
  const minimumSetupFee = Math.max(0.1 * userInput, 500);
  let minimumManagementFee = 0;

  //minimum management fee based on the minimum budget
  if (userInput > 3000) {
    minimumManagementFee = 0.2 * 3000 + 0.1 * (userInput - 3000);
  } else {
    minimumManagementFee = Math.max(0.2 * userInput, 400);
  }

  //total monthly cost
  const totalMonthlyCost = minimumSetupFee + minimumManagementFee;

  // Display the results
  document.getElementById("resultContainer").style.display = "block";
  document.getElementById("minSetupFee").innerHTML = `$${minimumSetupFee}`;
  document.getElementById(
    "minManagementFee"
  ).innerHTML = `$${minimumManagementFee}`;
  document.getElementById(
    "totalMonthlyCost"
  ).innerHTML = `$${totalMonthlyCost}`;
}
