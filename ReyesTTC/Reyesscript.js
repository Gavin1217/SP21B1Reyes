spots = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

currentPlayer = 1;

function setup() {
    createCanvas(300,300)
    noLoop();
}

function draw(){
    background(220);
    strokeWeight(4);
        line(0, height / 3, width, height / 3);
        line(0, height / 1.5, width, height / 1.5);
        line(width / 3, 0, width / 3, height);
        line(width / 1.5, 0, width / 1.5, height);
        for(var row = 0; row < spots.length; row++) {
            for(var col = 0; col < spots[row].length; col++) {
                var mark = spots[row][col]; 
                if (mark == 1){
                    drawX(row, col);
                }  else if (mark == 2) {
                    drawO(row, col);
                } else {
                    continue;
                } 
            }
        }
}
function mouseClicked() {
    var row = getRowForClick(mouseY) ;
    var col = getColForClick(mouseX) ;
        console.log(row + " " + col);
    spots[row][col] = currentPlayer ;
    if(currentPlayer == 1) {
        currentPlayer = 2 ;
}    else {
        currentPlayer = 1;
}
    redraw();
    return false;
}

function getRowForClick(y) {
    if(y < height / 3) {
        return 0;
    }  else 
    if(y < height / 3 * 2) {
        return 1;
    }  else {
        return 2;
    }
}

function getColForClick(x){
if(x < width / 3) {
    return 0;
}  else 
if(x < width / 3 * 2) {
    return 1;
}  else {
    return 2;
    }
}

function drawX(row, col) {
    stokeWeight(4);
    var centerX = width / 6 + (width / 3 * col);
    var centerY = height / 6 + (height / 3 * row) ;
    var xWidth = width / 3 - 20 ;
    line(centerX - xWidth / 2, centerY - xWidth / 2,
        centerX + xWidth / 2, centerY + xWidth / 2);
    line(centerX + xWidth / 2, centerY - xWidth / 2,
        centerX - xWidth / 2, centerY + xWidth / 2);

    }

function drawO(row, col) {
    strokeWeight (4) ;
    noFill() ;
    var centerX = width / 6 + (width / 3 * col);
    var centerY = height / 6 + (height / 3 * row);
    var circleWidth = width / 3 - 20;
    circleWidth(centerX, centerY, circleWidth);
}
    
