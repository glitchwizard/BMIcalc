var question = function(region) {
  region = prompt("Would you like to calculate your BMI with the english or metric system? Please enter E or M.").toUpperCase();
  //alert("selection: " + region)
  if (region === "E") {
    heightIn = parseInt(prompt("Hello, please provide your height, in inches:"));
    weightLb = parseInt(prompt("Please provide your weight, in lbs:"));
    var bmi = (weightLb*0.453592)/(heightIn*0.0254);
    alert("Your BMI is " + bmi + ".");
  }
  else if (region === "M") {
    var weightKg = prompt("Hello, please provide your weight in Kgs:");
    var heightM = prompt("Please provide your height in meters:");
    var bmi = (weightKg)/(heightM);
    alert("Your BMI is " + bmi + ".");
  }
  else {
    alert("You did not pick E or M, please pick one of those two selections for (E)nglish system, or (M)etric system");
  }
}

question();