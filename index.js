function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function describeTemperature(fahrenheit) {
  let celsius = convertToCelsius(fahrenheit);
  let description;

  if (celsius > 40) {
    description = "It's really hot out!";
  } else if (celsius > 25) {
    description = "It's warm out!";
  } else if (celsius > 15) {
    description = "It's a little chilly out!";
  } else {
    description = "It's cold out!";
  }

  console.log(`The temperature is ${celsius.toFixed(1)}°C. ${description}`);
}

const fahrenheit = prompt("Fahrenheit: ");
describeTemperature(fahrenheit);
100;
