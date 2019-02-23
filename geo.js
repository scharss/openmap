/*fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))*/
  
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles&appid=0bda5bdbd55843f5716ea9febd9f26a7')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson.main);
    
    
      
     x = myJson.main.humidity;
	 document.getElementById("demo").innerHTML = x;
	 
	  y = myJson.main.temp_max;
	  console.log(y);
	 document.getElementById("demo2").innerHTML = y;
	 /*document.getElementById("demo2").innerHTML = y;*/
    
  });
  
  