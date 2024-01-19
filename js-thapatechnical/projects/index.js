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