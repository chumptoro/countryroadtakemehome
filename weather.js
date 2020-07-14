$(document).ready(function() { 

	console.log("weather details script is working");

	$('.individual_meditation_recording_player_9809403065').hide();
	
	show_background_page();
	show_weather_page ();


function show_background_page() {
	
	$('body').addClass('meditations_page_body');
	$(".recommended_meditation_recording_9809403065").show();
	$('.recording_lists_9809403065').show();
};


function show_weather_page() {
	$('html').addClass('weather_page_background');
	$('body').addClass('weather_page_body');

	$(".user_profile_id_9809403065").show();
	$(".user_profile_section_show_9809403065").show();
	
	$(".box_size").show();
	
	$('#weather_details').show();
};

	//fetch API for today's weather information and display it
	async function showAPIReturn() {
	  // fetch JSON
	  let response = await fetch('http://api.openweathermap.org/data/2.5/weather?id=5391997&units=imperial&appid=91bbb6eb4932a163425a0530d7789dd0');
	  let data = await response.json();

	  //display location
	  document.getElementById("location").innerHTML = "location: " + data.name;
	  //display tempareture
	  document.getElementById("tempareture").innerHTML = "tempareture: " + data.main.temp +"&deg degree Fahrenheit";
	  //display humidity
	  document.getElementById("humidity").innerHTML = "humidity: " + data.main.humidity + "%";
	  //display description
	  document.getElementById("description").innerHTML = "condition: " + data.weather[0].description;
	
	  console.log(data);
	  console.log("DONE DONE DONE");
	  return Promise.resolve(1);
	}

	showAPIReturn();

	//dummy api result for testing
	yo = {
		"coord":{"lon":-0.13,"lat":51.51},
		"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],
		"base":"stations",
		"main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},
		"visibility":10000,
		"wind":{"speed":4.1,"deg":80},
		"clouds":{"all":90},
		"dt":1485789600,
		"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},
		"id":2643743,
		"name":"London",
		"cod":200
	};


});




