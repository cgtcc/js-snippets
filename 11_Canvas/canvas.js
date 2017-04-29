console.log('test');

//grab the canvas element
var canvas = document.querySelector('canvas');

//Adjust width and height of the canvas to the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//creating super object for 2d elements
var c = canvas.getContext('2d');


//draw rectangle

c.fillStyle = 'rgba(255,0,0,0.5)';

c.fillRect(100, 100, 400, 100);
c.fillStyle = 'rgba(0,255,0,0.5)';

c.fillRect(400, 500, 200, 100);
c.fillStyle = 'rgba(0,0,255,0.5)';

c.fillRect(300, 300, 100, 400);


console.log(canvas);

//Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 100);
c.strokeStyle = "#fa34a3"
c.stroke();


for (var i = 0; i < 2; i++) {

    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;

    //generate color
    /* var letters = '0123456789ABCDEF';
     var color = '#';
     for (var i = 0; i < 6; i++) {
         color += '\'' + letters[Math.floor(Math.random() * 16)] + '\'';
     }
 */


    //arc /circle
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.fillStyle = color;

    c.strokeStyle = 'blue';
    c.stroke();
}
