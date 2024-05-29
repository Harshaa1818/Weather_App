
window.addEventListener('load',async ()=>{
    window.navigator.geolocation.getCurrentPosition(({coords})=>{
        var lat=coords.latitude;
        var long=coords.longitude;
        //console.log(lat,long)
    }
    
    
    ,(err)=>{console.log(err);

    })
    
   
 })
 var btn = document.getElementById("btn");
 var inputField = document.getElementById('input');
 
 btn.addEventListener('click', () => {
     var userInput = inputField.value;
     fetchDetails(userInput);
 });
 
 async function fetchDetails(name) {
     const Api = `http://api.weatherapi.com/v1/current.json?key=e70152db657d414a9a5172305242905&q=${name}`
     const response = await fetch(Api);
     const data = await response.json();
     console.log(data);
     showData(data);

 }

 const ame=document.getElementById('name');
 const temp=document.getElementById('temp');
 const wind=document.getElementById('windSpeed');
 const humidity=document.getElementById('humidity');

 function showData(data){
    temp.innerText= `Temperature: ${data.current.temp_c}`;
    ame.innerText=`Name: ${data.location.name}`;
    wind.innerText=`WindSpeed: ${data.current.wind_kph}`;
    humidity.innerText=`Humidity: ${data.current.humidity}`;


 }

    

 

 

 
 