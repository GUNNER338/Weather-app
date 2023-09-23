const apiKey="2247f3a8cd799c8d251eaa72bd3fc7de";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherimg=document.querySelector(".weatherimg");


async function checkwheather(city){
    const response=await fetch(apiUrl + city +`&appid=${apiKey}`);

    if (response.status==404) {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name ;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " mph";

    if (data.weather[0].main=='Clouds') {
        weatherimg.src="images/clouds.png"
    }
    else if(data.weather[0].main=='Clear') {
        weatherimg.src="images/clear.png"
    }
    else if(data.weather[0].main=='drizzle') {
        weatherimg.src="images/drizzle.png"
    }
    else if(data.weather[0].main=='mist') {
        weatherimg.src="images/mist.png"
    }
    else if(data.weather[0].main=='snow') {
        weatherimg.src="images/snow.png"
    }
    else if(data.weather[0].main=='wind') {
        weatherimg.src="images/wind.png"
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="";
    }

    



}

searchBtn.addEventListener("click", function(){
    checkwheather(searchBox.value);
})