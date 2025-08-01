//your parameter variables go here!
//I will edit this when I understand what my parameters will be, eg could change petal length / petal width


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER) - change back to DEVELOP_GLYPH to edit just design
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  //note: can change offset to change how tiling displays to fill screen/area
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(12, 39, 59); //want this to end up being dark navy - like a night sky?
}

let size1 = 20
let size2 = 60
let trianglelength = 50

let topsquareline = 90
let bottomsquareline = 110

 let leftpoint = 80
 let rightpoint = 120
 let pointlength = 20

 let connecttoedge = 20

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  //the goal is for every triangle of the piece to be a different shade of the star, looking like its shining
  //gives perameters to change, i wonder if i could randomly change from a selection of colours?
  //how to add an if statement?
  //use variables (let =) in diagonal triangles to make points more clear
  
  //drawing shape with vertex points to form shape as if i was making the triangles based off of a square's points
  fill(255, 218, 97); //vibrant yellow colour
  stroke(145, 193, 230); 
  //15, 45, 66 (option) //changing stroke colour to dark blue tones
  beginShape();

  vertex(leftpoint, 80);
  vertex(100, pointlength - connecttoedge);
  vertex(rightpoint, 80);
  vertex(200 - pointlength + connecttoedge, 100);
  vertex(rightpoint, 120);
  vertex(100, 200 - pointlength + connecttoedge);
  vertex(leftpoint, 120);
  vertex(pointlength - connecttoedge, 100);
  
  endShape(CLOSE);

  //Behind square shape - was going to do triangles but square more efficient!
  fill(255, 226, 138); //light yellow (middle colour)
  square(size2 + 5, size2 + 5, 70)

  //back larger star triangles
  //centre diamond of back star
  fill(255, 244, 191); //lightest yellow
  beginShape();

  //adding each point of the diamond
  vertex(100, size2);
  vertex(size2 + 80, 100);
  vertex(100, size2 + 80);
  vertex(size2, 100);

  endShape(CLOSE);

  fill(255, 218, 97); //vibrant yellow
  //diagonal middle triangles
  //top right triangle
  triangle(90, 90, 110, 110, 150, trianglelength);
  //bottom right triangle
  triangle(110, 90, 90, 110, 150, trianglelength + 100);
  //bottom left triangle
  triangle(90, 90, 110, 110, trianglelength, trianglelength + 100);
  //toplefttriangle
  triangle(90, 110, 110, 90, trianglelength, trianglelength);

  //inside star triangles
  //centre square of star
  fill(255, 226, 138);
  square(90, 90, size1);
  //topinsidetriangle
  fill(255, 244, 191); //lightest yellow
  triangle(90, 90, 110, 90, 100, trianglelength);
  //rightinsidetriangle
  triangle(110, 90, 110, 110, trianglelength + 100, 100);
  //bottominsidetriangle
  triangle(90, 110, 110, 110, 100, trianglelength + 100);
  //leftinsidetriangle
  triangle(90, 90, 90, 110, trianglelength, 100);
  
  //very centre star diamond
  //(ontop of centre square)
  fill(255, 244, 191); //lightest yellow
   beginShape();

  //adding each point of the diamond
  vertex(100, size1 + 70);
  vertex(size1 + 90, 100);
  vertex(100, 90 + size1);
  vertex(70 + size1, 100);

  endShape(CLOSE);

}
