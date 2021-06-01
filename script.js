var video = document.getElementById('myVideo');

document.getElementById('button').addEventListener('click', function() {
  document.querySelector('.weather-container').style.display = 'flex';
  video.pause();
});

//JQUERY

$(document).ready(function(){
  function weather(){
    var URL = 'https://service.innovid.com/s/dataproxy/proxy-cb-nh.php?c=3600&url=http%3A%2F%2Fapi.worldweatheronline.com%2Fpremium%2Fv1%2Fweather.ashx%3Fkey%3D8mkjmgnh2fhk6h4hdak5syay%26q%3Dminneapolis%26format%3Djson%26num_of_days%3D3';
    
    $.getJSON(URL, function(data){
      updateDOM(data);
    });
  }

  weather();

  function updateDOM(data){
    var city = data.data.request[0].query;
    
    //day one
    var dateOne = data.data.weather[0].date;
    var tempMaxOne = data.data.weather[0].maxtempC;
    var descDayOne = data.data.weather[0].hourly[5].weatherDesc[0].value;
    var iconDayOne = data.data.weather[0].hourly[5].weatherIconUrl[0].value;
    var tempNightOne = data.data.weather[0].mintempC;
    var descNightOne = data.data.weather[0].hourly[7].weatherDesc[0].value;
    var iconNightOne = data.data.weather[0].hourly[7].weatherIconUrl[0].value;
    var sunriseOne = data.data.weather[0].astronomy[0].sunrise;
    var sunsetOne = data.data.weather[0].astronomy[0].sunset;

    //day two
    var dateTwo = data.data.weather[1].date;
    var tempMaxTwo = data.data.weather[1].maxtempC;
    var descDayTwo = data.data.weather[1].hourly[5].weatherDesc[0].value;
    var iconDayTwo = data.data.weather[1].hourly[5].weatherIconUrl[0].value;
    var tempNightTwo = data.data.weather[1].mintempC;
    var descNightTwo = data.data.weather[1].hourly[7].weatherDesc[0].value;
    var iconNightTwo = data.data.weather[1].hourly[7].weatherIconUrl[0].value;
    var sunriseTwo = data.data.weather[1].astronomy[0].sunrise;
    var sunsetTwo = data.data.weather[1].astronomy[0].sunset;

    //day three
    var dateThree = data.data.weather[2].date;
    var tempMaxThree = data.data.weather[2].maxtempC;
    var descDayThree = data.data.weather[2].hourly[5].weatherDesc[0].value;
    var iconDayThree = data.data.weather[2].hourly[5].weatherIconUrl[0].value;
    var tempNightThree = data.data.weather[2].mintempC;
    var descNightThree = data.data.weather[2].hourly[7].weatherDesc[0].value;
    var iconNightThree = data.data.weather[2].hourly[7].weatherIconUrl[0].value;
    var sunriseThree = data.data.weather[2].astronomy[0].sunrise;
    var sunsetThree = data.data.weather[2].astronomy[0].sunset;


    $('#city').html(city);

    //day one
    $('#dateOne').html(dateOne);
    $('#tempDayOne').html(tempMaxOne);
    $('#descDayOne').html(descDayOne);
    $('#iconDayOne').attr('src', iconDayOne);
    $('#tempNightOne').html(tempNightOne);
    $('#descNightOne').html(descNightOne);
    $('#iconNightOne').attr('src', iconNightOne);
    $('#sunriseOne').html(sunriseOne);
    $('#sunsetOne').html(sunsetOne);

    //day two
    $('#dateTwo').html(dateTwo);
    $('#tempDayTwo').html(tempMaxTwo);
    $('#descDayTwo').html(descDayTwo);
    $('#iconDayTwo').attr('src', iconDayTwo);
    $('#tempNightTwo').html(tempNightTwo);
    $('#descNightTwo').html(descNightTwo);
    $('#iconNightTwo').attr('src', iconNightTwo);
    $('#sunriseTwo').html(sunriseTwo);
    $('#sunsetTwo').html(sunsetTwo);

    //day three
    $('#dateThree').html(dateThree);
    $('#tempDayThree').html(tempMaxThree);
    $('#descDayThree').html(descDayThree);
    $('#iconDayThree').attr('src', iconDayThree);
    $('#tempNightThree').html(tempNightThree);
    $('#descNightThree').html(descNightThree);
    $('#iconNightThree').attr('src', iconNightThree);
    $('#sunriseThree').html(sunriseThree);
    $('#sunsetThree').html(sunsetThree);

  }

});



document.querySelector('.back').addEventListener('click', function() {
  document.querySelector('.weather-container').style.display = 'none';
  video.play();
});


