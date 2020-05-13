
const request=require('request-promise');
async function getWeather(cities) {
    var weatherInfo = [];
var day=[];
    for (var city of cities) {
        
    //    var url ='https://api.openweathermap.org/data/2.5/weather?q='+encodeURIComponent(city.name)+'&units=metric&appid=c83d372cc4ddb114716eb1b6ee4a7421'
    var url='http://api.openweathermap.org/data/2.5/forecast?q='+encodeURIComponent(city.name)+'&cnt=64&units=metric&appid=c83d372cc4ddb114716eb1b6ee4a7421';
        var response = await request(url);

        var weatherJS = JSON.parse(response);
     
         
        var weather = {
            city : city.name,
            date :weatherJS.list[1].dt_txt,
            temp:weatherJS.list[1].main.temp,

            date1:weatherJS.list[9].dt_txt,
            temp1:weatherJS.list[9].main.temp,

            date2:weatherJS.list[17].dt_txt,
            temp2:weatherJS.list[16].main.temp,

            date3:weatherJS.list[24].dt_txt,
            temp3:weatherJS.list[24].main.temp,

            date4:weatherJS.list[32].dt_txt,
            temp4:weatherJS.list[32].main.temp,
           
        }
        
        weatherInfo.push(weather);
       
    }
    

    return weatherInfo;
}
module.exports=getWeather;