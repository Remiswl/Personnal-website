'use strict';

document.addEventListener('DOMContentLoaded', function() {
   
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext("2d");
    let drawing = false; 
    let color = document.querySelectorAll('.color'); 
    let weight = document.getElementsByClassName('weight');
    let clear = document.getElementById('clear');
    let colorPalette = document.getElementById('colorPalette');
    let ctx = colorPalette.getContext("2d");
    let displayGradient = document.getElementById('displayGradient');
    
    function onMouseMove(event) {
        if (drawing == true) {
            let rectangle = canvas.getBoundingClientRect();
            let x = event.clientX - rectangle.left;
            let y = event.clientY - rectangle.top;

            context.lineTo(x, y);
            context.stroke();
        }
    }
    
    function onMouseDown() {
        let rectangle = canvas.getBoundingClientRect();
        let x = event.clientX - rectangle.left;
        let y = event.clientY - rectangle.top;
        
        context.moveTo(x, y);
        
        drawing = true;
        
        context.beginPath();
    }
    
    function onMouseUp() {
        drawing = false;
        
        context.closePath();
    }
    
    function changeColor() {
        let newColor = this.dataset.color;
    
        context.strokeStyle = newColor;
    }
    
    function changeWeight() {
        let newWeight = this.dataset.width;
    
        context.lineWidth = newWeight;
    }
        
    function clearBoard() {
        context.clearRect(0, 0, canvas.width, canvas.height); 
    }   
    
    function createColorPicker() {
        
        // Horizontal gradient
        let gradient = ctx.createLinearGradient(0, 0, colorPalette.width, 0);
        
        gradient.addColorStop(0, "#9400D3");
        gradient.addColorStop(0.15, "#4B0082");
        gradient.addColorStop(0.35, "#0000FF");
        gradient.addColorStop(0.50, "#00FF00");
        gradient.addColorStop(0.65, "#FFFF00");
        gradient.addColorStop(0.90, "#FF7F00");
        gradient.addColorStop(1, "#FF0000");
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, colorPalette.width, colorPalette.height);
        
        // Vertical gradient
        gradient = ctx.createLinearGradient(0, 0, 0, colorPalette.height);
        
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.6, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, colorPalette.width, colorPalette.height);
    }
    
    function selectColor(event) {
        let x = event.offsetX;
        let y = event.offsetY;

        let setColor = ctx.getImageData(x, y, 1, 1);
        
        let newColor = `rgba(${setColor.data[0]},${setColor.data[1]},${setColor.data[2]},${setColor.data[3]})`;

        context.strokeStyle = newColor;
    }
    
    function showPalette() {
        colorPalette.classList.toggle('display');
    }
    
// Draw    
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', onMouseUp);
    canvas.addEventListener('mouseenter', onMouseMove);

// Change color
    for (let i = 0; i < color.length; i++) {
        color[i].addEventListener('click', changeColor);
    }

// Line weight
    for (let i = 0; i < weight.length; i++) {
        weight[i].addEventListener('click', changeWeight);
    }

// Clear all
    clear.addEventListener('click', clearBoard);

// Colorpicker
    // Display the color palette
    displayGradient.addEventListener('click', showPalette);
    
    // Create the gradient
    displayGradient.addEventListener('click', createColorPicker());
    
    // Select color from the color palette
    colorPalette.addEventListener('click', selectColor);
});