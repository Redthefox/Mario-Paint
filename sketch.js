function setup(){
    createCanvas(500,500);
//red
    fill(255, 0, 0);
    rect(40, 30, 55, 55);

//green 
    fill(0,255, 0);
    rect(100,30,55,55);

//blue
    fill(0,0,255);
    rect(160,30,55,55);
    fill(0);
// eraser
    fill(255)
    rect(360,30,55,55);    

}


function mouseDragged(){
    // fill(0);
   ellipse(mouseX, mouseY, random(40), random(40));
  
}

function mouseClicked(){
    if (mouseX < 95 && mouseX > 40 && mouseY > 30 && mouseY < 85){
        fill(255, 0, 0);
    } else if(mouseX < 155 && mouseX > 100  && mouseY >30 && mouseY < 85 ){
        fill(0,255,0);
    } else if(mouseX < 215 && mouseX > 160 && mouseY > 30 && mouseY < 85){
        fill(0,0,255);
    } else if (mouseX < 415 && mouseX > 360 && mouseY > 30 && mouseY < 85){
        fill(255);
        noStroke();
    }
}



    

