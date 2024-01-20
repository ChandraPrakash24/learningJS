// on codepen
//******************  LIGHT BULB PROJECT ******************

// VERSION 1:- created by me

/*

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
    font-family: 'Arial', sans-serif;
}

.light-container {
    text-align: center;
}

.light-bulb {
    width: 100px;
    height: 160px;
    background-color: #f1c40f;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin: 50px 200px;
}

.light-filament {
    width: 4px;
    height: 80px;
    background-color: #ffffff;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
}

h1 {
    color: #333333;
    margin: 10px 0;
}

.button-container {
    display: flex;
    justify-content: center;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    margin: 0 10px;
    background-color: #3498db;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #297fb8;
}
</style>
<title>Light Control</title>
</head>
<body>

<div class="light-container">
<h1>Can you turn the light on?</h1>

<div class="light-bulb">
<div class="light-filament"></div>
</div>

<div class="button-container">
<button id="turn-on">Turn On</button>
<button id="turn-off">Turn Off</button>
</div>
</div>

</body>
</html>


const off = () => {
    document.querySelector('.light-bulb').style.backgroundColor = "black";
    const button = document.querySelector('#turn-on').innerHTML = 'Turn On';
}

const on = () => {
    document.querySelector('.light-bulb').style.backgroundColor = "#f1c40f";
}

document.getElementById('turn-off').addEventListener('click', off);
document.getElementById('turn-on').addEventListener('click', on);

*/


// VERSION 2 (inhanced by gpt)

/*


<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
    font-family: 'Arial', sans-serif;
}

.light-container {
    text-align: center;
}

.light-bulb {
    width: 100px;
    height: 160px;
    background-color: black;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin: 50px 200px;
}

.light-filament {
    width: 4px;
    height: 80px;
    background-color: #ffffff;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
}

h1 {
    color: #333333;
    margin: 10px 0;
}

.button-container {
    display: flex;
    justify-content: center;
}

button {
            padding: 10px 20px;
            font-size: 16px;
            margin: 0 10px;
            background-color: #3498db;
            color: #ffffff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: #297fb8;
        }
        </style>
        <title>Light Control</title>
        </head>
        <body>
        
        <div class="light-container">
        <h1>Can you turn the light on?</h1>
        
        <div class="light-bulb">
        <div class="light-filament"></div>
        </div>
        
        <div class="button-container">
        <button id="toggle">Turn On</button>
        </div>
        </div>
        
        <script>
        const toggleButton = document.getElementById('toggle');
        const lightBulb = document.querySelector('.light-bulb');
        
        toggleButton.addEventListener('click', function () {
            if (lightBulb.style.backgroundColor === 'black' || lightBulb.style.backgroundColor === '') {
                lightBulb.style.backgroundColor = '#f1c40f';
                toggleButton.innerHTML = 'Turn Off';
            } else {
                lightBulb.style.backgroundColor = 'black';
                toggleButton.innerHTML = 'Turn On';
            }
        });
        </script>
        
        </body>
</html>



// VERSION 3: (from scratch by me)


/*

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Emoji Change</title>
</head>
<body>

<p>💡</p>

<script>
const on = document.querySelector('p');

on.addEventListener('click', function () {
    if (on.textContent === '💡') {
        on.textContent = '🔦';
    }else{
        on.textContent = '💡';
    }
});
</script>

</body>
</html>


*/



// VERSION 4: (from scratch)

/*

<p>🌑</p>
<button class='toogle'>Show Sun</button>


body{
    text-align: center;
    margin-top: 50vh;
}


const emoji = document.querySelector('p');
const toogle = document.querySelector('.toogle');

toogle.addEventListener('click', function () {
    if (emoji.textContent === '🌑') {
        emoji.textContent = '☀️';
        toogle.innerHTML = 'Show Moon';
    }else{
        emoji.textContent = '🌑';
        toogle.innerHTML = 'Show Sun';
    }
});


*/


//******************  PROJECT 2 ******************


//                 THERMOMETER ANIMATION

// VERSION 1: (create by me) (only problem is at can caouse stack overflow due to endless recursive call)

/*

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <h1>I am Thermometer <span id="temp" class='fa'></span></h1>


let arr = ['&#xf2cb','&#xf2ca','&#xf2c9','&#xf2c8','&#xf2c7'];


const change = (index) => {
  
  if(index === arr.length){ index = 0; }
  
  const icon = document.getElementById('temp');
  icon.innerHTML = arr[index];
  
  setTimeout(function(){change(index+1)},1000);
}


change(0);

*/

// VERSION 2: (create by me) ( solved stack overflow problem using setInterval() inseted of setTimeout() )

/*

html same as above


body{
  text-align:center;
  margin-top: 50vh;
}


let arr = ['&#xf2cb', '&#xf2ca', '&#xf2c9', '&#xf2c8', '&#xf2c7'];

let index = 0;

const change = () => {
  const icon = document.getElementById('temp');
  icon.innerHTML = arr[index];
  if(index <= 1){
  icon.style.color = 'green';
  } else if(index > 1 && index <= 3){
    icon.style.color = 'orange';
  }else{
    icon.style.color = 'red';
  }

  index = (index + 1) % arr.length;
}

// Call change every 1000 milliseconds (1 second)
setInterval(change, 1000);

*/

/****************************************************/

//                   TEMPRATURE CONVERTER

// Version 1: (by myself)

/*

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Temperature Converter</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }

    .converter-container {
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      padding: 20px;
      text-align: center;
      width: 300px;
    }

    h1 {
      color: #3498db;
    }

    .input-container {
      margin-top: 20px;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }

    select {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }

    button {
      background-color: #3498db;
      color: #ffffff;
      border: none;
      margin-top: 10px;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #297fb8;
    }
  </style>
</head>
<body>

<div class="converter-container">
  <h1>Temperature Converter</h1>
  
  <div class="input-container">
    <input type="number" placeholder="Enter temperature" id="temperatureInput">
    <select id="unitSelect">
      <option value="celsius">Celsius</option>
      <option value="fahrenheit">Fahrenheit</option>
    </select>
  </div>

  <button onclick="convertTemperature()">Convert</button>
</div>

</body>
</html>



const temp = document.getElementById('temperatureInput');
 const parameter = document.getElementById('unitSelect');
const button = document.querySelector('button');

const convertTemperature = () => {
    if (temp.value === "") {
        button.innerText = `Please Enter Temprature`;
        button.style.backgroundColor = 'red';
    } else if(parameter.value == 'celsius') {
        let celsius = temp.value;
        let fahrenheit = (celsius * 9/5) + 32;
        button.innerText = `${fahrenheit.toFixed(2)} °F`;
    }else {
        let fahrenheitt = temp.value;
        let celsius = (fahrenheitt - 32) * (5 / 9);
        button.innerText = `${celsius.toFixed(2)} °C`;
    }
}


*/