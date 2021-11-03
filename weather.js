window.addEventListener("load", () => {
  var lat;
  var long;
  var Temperature = document.querySelector(".temp");
  var Description = document.querySelector(".description");
  var place = document.querySelector(".location");
  var temsec = document.querySelector("span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      const api = `https:\\api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=179ece0c68a14006518df0b24d5c7ce7`;

      fetch(
        `https:\\api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=179ece0c68a14006518df0b24d5c7ce7`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          var TemperatureValue = data["main"]["temp"];
          var WeatherVlaue = data["weather"]["0"]["description"];
          var Namevalue = data["name"];
          var icon = data["weather"]["0"]["desciption"];

          var c = TemperatureValue - 273.15;
          Temperature.innerHTML = Math.floor(c);
          Description.innerHTML = WeatherVlaue;
          place.innerHTML = Namevalue;

          var FH = (c * 9) / 5 + 32;

          Temperature.addEventListener("click", () => {
            if (temsec.innerText == "C") {
              temsec.innerText = "F";
              Temperature.innerHTML = Math.floor(FH);
            } else {
              temsec.innerText = "C";
              Temperature.innerHTML = Math.floor(c);
            }
          });
        });
    });
  }
});
