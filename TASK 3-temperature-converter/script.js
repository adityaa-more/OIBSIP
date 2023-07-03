document.getElementById("OutputResult").style.display = "none";

function ValidateTemperatureCalculatorForm() {
  var inputTemperature = document.getElementById("inputTemperature").value;
  if (inputTemperature == "" || isNaN(inputTemperature)) {
    return false;
  }
  return true;
}

function ResetTemperatureCalculator() {
  if (confirm("Are you sure want to reset the converter?")) {
    document.getElementById("inputTemperature").value = "";
    document.getElementById("toUnit").value = "Fahrenheit";
    document.getElementById("fromUnit").value = "Celsius";
    document.getElementById("outputTemperature").value = "";

    document.getElementById("temperatureResult").innerHTML = "";
    document.getElementById("temperatureFormula").innerHTML = "";

    HideElement("OutputResult");
    ShowElement("OutputInfo", "flex");
  }
}

function CalculateTemperature() {
  if (ValidateTemperatureCalculatorForm()) {
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var inputTemperature = document.getElementById("inputTemperature").value;
    var outputTemperature = document.getElementById("outputTemperature");
    let OutputInfo = document.getElementById("OutputInfo");
    let OutputResult = document.getElementById("OutputResult");

    ShowFormula(fromUnit, toUnit);

    var result = ConverterTemperature(inputTemperature, fromUnit, toUnit);

    outputTemperature.value = result.toFixed(2);
    document.getElementById("temperatureResult").innerHTML = formatResult(
      inputTemperature,
      result,
      fromUnit,
      toUnit
    );

    //result div show
    HideElement("OutputInfo");
    ShowElement("OutputResult", "flex");
  }
}

function ShowFormula(fromUnit, toUnit) {
  const formulaJSONobj = JSON.parse(formula);
  for (var i = 0; i < formulaJSONobj.conversions.length; i++) {
    if (
      formulaJSONobj.conversions[i].from.toLowerCase() ==
        fromUnit.toLowerCase() &&
      formulaJSONobj.conversions[i].to.toLowerCase() == toUnit.toLowerCase()
    ) {
      document.getElementById("temperatureFormula").innerHTML =
        formulaJSONobj.conversions[i].formula;
    }
  }
}

function ConverterTemperature(inputTemperature, fromUnit, toUnit) {
  fromUnit = fromUnit.toLowerCase();
  toUnit = toUnit.toLowerCase();
  inputTemperature = Number(inputTemperature);
  var outputTemperature;

  if (fromUnit == "celsius") {
    if (toUnit == "kelvin") {
      outputTemperature = inputTemperature + 273.15;
    } else if (toUnit == "fahrenheit") {
      outputTemperature = inputTemperature * (9 / 5) + 32;
    } else {
      outputTemperature = inputTemperature;
    }
  } else if (fromUnit == "kelvin") {
    if (toUnit == "celsius") {
      outputTemperature = inputTemperature - 273.15;
    } else if (toUnit == "fahrenheit") {
      outputTemperature = ((inputTemperature - 273.15) * 9) / 5 - 459.67;
    } else {
      outputTemperature = inputTemperature;
    }
  } else if (fromUnit == "fahrenheit") {
    if (toUnit == "celsius") {
      outputTemperature = ((inputTemperature - 32) * 5) / 9;
    } else if (toUnit == "kelvin") {
      outputTemperature = ((inputTemperature + 459.67) * 5) / 9;
    } else {
      outputTemperature = inputTemperature;
    }
  }
  return outputTemperature;
}

function formatResult(inputTemperature, outputTemperature, fromUnit, toUnit) {
  if (fromUnit.toLowerCase() == "celsius") {
    fromUnit = "℃";
  } else if (fromUnit.toLowerCase() == "kelvin") {
    fromUnit = "K";
  } else if (fromUnit.toLowerCase() == "fahrenheit") {
    fromUnit = "℉";
  }

  if (toUnit.toLowerCase() == "celsius") {
    toUnit = "℃";
  } else if (toUnit.toLowerCase() == "kelvin") {
    toUnit = "K";
  } else if (toUnit.toLowerCase() == "fahrenheit") {
    toUnit = "℉";
  }

  return inputTemperature + fromUnit + " = " + outputTemperature + toUnit;
}

function HideElement(elementId) {
  var displayProperty = document.getElementById(elementId).style.display;
  if (displayProperty != "none") {
    document.getElementById(elementId).style.display = "none";
  }
}

function ShowElement(elementId, givenDisplayProperty) {
  var displayProperty = document.getElementById(elementId).style.display;
  if (displayProperty != givenDisplayProperty) {
    document.getElementById(elementId).style.display = givenDisplayProperty;
  }
}
