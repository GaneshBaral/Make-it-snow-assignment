// Make it snow assignment

// Initialize canvas
let cnv = document.getElementById("newCanvas");
let ctx = cnv.getContext("2d");
initCanvasLibrary(800, 600);

//Global 
let snowFlake = [];
let numSnow = 500; 

for (i = 0; i < numSnow; i++) {
    snowFlake.push({
        x: Math.randomDec(0, cnv.width),
        y: Math.randomDec(0, cnv.height),
        s: Math.randomDec(1, 3),
    })
}

requestAnimationFrame(draw);

function draw() {

    // Set background
    fill("black")
    rect(0, 0, cnv.width, cnv.height, "fill");

    // Start drawing smow 
    for (i = 0; i < snowFlake.length; i++) {
        
        // makes snow fall
        snowFlake[i].y += snowFlake[i].s;

        //Draw snow 
        ctx.fillStyle = "White";
        ctx.fillCircle(snowFlake[i].x, snowFlake[i].y, snowFlake[i].r);

        //Add and remove snow (when out of canvas)
        if (snowFlake[i].y > 600) {
            snowFlake.splice(i, 1); 
            snowFlake.push({
                x: Math.randomDec(0, cnv.width),
                y: Math.randomDec(0, 0),
                r: Math.randomDec(0, 10),
                s: Math.randomDec(1, 3),
            })
        } 
    }
    requestAnimationFrame(draw);
}

//Add and remove snow (with up and down key) 
document.addEventListener("keydown", keydownHandler); 

function keydownHandler(event) {
    if (event.keyCode == "40") { 
        // Arrow down - Remove Snow
        snowFlake.pop(); 
    } else if (event.keyCode == "38") { 
        // Arrow up - Add Snow
        snowFlake.push({
            x: Math.randomDec(0, cnv.width),
            y: Math.randomDec(0, cnv.height),
            s: Math.randomDec(1, 3),
        }
    )
    }
    
}