//your parameter variables go here!

//adding centre point variables to change my code - wanted a centre reference point
//why? Clarity of reading code, easier editing later for perameterising code for different wallpaper layouts,
//plus also for implementing an if statement for adding multiple stars later
let centrex = 100
let centrey = 100

//DrawBackStarLayer Variables
let leftpoint = centrex - 20
let rightpoint = centrex + 20
let outsidestarpointlength = 20
//Perameter change for this - connect to edge added to extend star points to edge of box
let connecttoedge = 0

//DrawSecondStarLayer + DrawFifthStarLayer Variables
let squarewidth = 70

//DrawFourthStarLayer + DrawSixthStarLayer Variables
let trianglelength = 50

//custom stroke weight variables + used for if statements
let standardstroke = 2

//colour variables 
//each colour variable had to be put under each layer triangle function to work properly

//background colour
//let backgroundcolour = color(3, 33, 54); 

//brightyellow
//let brightyellow = color(255, 218, 97); 

//lightyellow
//let lightyellow = color(255, 244, 191); 

//lightblue
//let lightblue = color(181, 227, 255); 

//Stroke colours
//let basestrokec = color(199, 236, 255); //base blue strokes
//let thickstrokec = color(255); //white thick strokes

//trying a variable for scale (scale is hard I might scrap this)
let scaleFactor = 1

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER) - change back to DEVELOP_GLYPH to edit just design
  
  pWallpaper.resolution(FIT_TO_SCREEN); //FIT_TO_SCREEN //NINE_PORTRAIT makes it portrait repeated 9x //can also do NINE_LANDSCAPE
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  //note: can change offset to change how tiling displays to fill screen/area
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  let backgroundcolour = color(3, 33, 54);
  background(backgroundcolour); //want this to end up being dark navy - like a night sky?
}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  //trying to implement an if statement for scale function
  //if (centrex > 100) {
   // scaleFactor = 0.5;
//  } else {
//    scaleFactor = 1
// }
  DrawStar();

}

function DrawStar () { 
//scale(scaleFactor);

//colour functions (need to be here so it runs properly)
  let basestrokec = color(199, 236, 255);
  let thickstrokec = color(255);
  let brightyellow = color(255, 218, 97);
  let lightyellow = color(255, 244, 191);
  let lightblue = color(181, 227, 255);

//if function for stroke to turn white if its thicker 
  if ((standardstroke + 2) > 2) {
    stroke(thickstrokec); // white stroke for thicker standard stroke + 2
  } else {
    stroke(basestrokec); // normal blue colour stroke for normal standardstroke
  }

  strokeWeight(standardstroke + 2); //thicker back stroke w custom variable
  //colour options:15, 45, 66 (option) //145, 193, 230 (option) //changing stroke colour to dark blue tones
  fill(brightyellow); //bright yellow original
  
  //Drawing back star layer
  beginShape();
  //creating each point of triangle shapes
  vertex(leftpoint, centrey - 20);
  vertex(centrex, outsidestarpointlength - connecttoedge);
  vertex(rightpoint, centrey - 20);
  vertex(200 - outsidestarpointlength + connecttoedge, centrey);
  vertex(rightpoint, centrey + 20);
  vertex(centrex, 200 - outsidestarpointlength + connecttoedge);
  vertex(leftpoint, centrey + 20);
  vertex(outsidestarpointlength - connecttoedge, centrey);
  
  endShape(CLOSE);

//Drawing second star layer - Behind square shape - was going to do triangles but square more efficient!

  fill(brightyellow); //bright yellow original
  strokeWeight(standardstroke);
  stroke(basestrokec);
  square(centrex - 35, centrey - 35, squarewidth);

//Drawing third star layer - centre diamond of back star

  fill(lightyellow); //lightest yellow original
  strokeWeight (standardstroke);
  stroke(199, 236, 255);

  beginShape();
  //adding each point of the diamond
  vertex(centrex, centrey - 40);
  vertex(centrex + 40, centrey);
  vertex(centrex, centrey + 40);
  vertex(centrex - 40, centrey);

  endShape(CLOSE);

//Drawing fourth star layer - diagonal middle triangles

//if function for stroke to turn white if its thicker 
  if ((standardstroke + 2) > 2) {
    stroke(thickstrokec); // white stroke for thicker standard stroke + 2
  } else {
    stroke(basestrokec); // normal blue colour stroke for normal standardstroke
  }
  
  fill(lightblue); //light blue original
  strokeWeight (standardstroke + 2);

  //first.x, first.y, second.x, second.y, third.x, third.y
  triangle(centrex - 10, centrey - 10, centrex + 10, centrey + 10, centrex + trianglelength, centrey - trianglelength);
  //bottom right triangle
  triangle(centrex + 10, centrey - 10, centrex - 10, centrey + 10, centrex + trianglelength, centrey + trianglelength);
  //bottom left triangle
  triangle(centrex - 10, centrey - 10, centrex + 10, centrey + 10, centrex - trianglelength, centrey + trianglelength);
  //toplefttriangle
  triangle(centrex - 10, centrey + 10, centrex + 10, centrey - 10, centrex - trianglelength, centrey - trianglelength);

//Drawing fifth star layer - centre square of star

  fill(brightyellow); //bright yellow original
  strokeWeight (standardstroke);
  stroke(basestrokec);
  square(centrex - 10, centrey - 10, squarewidth - 50);

//Drawing sixth star layer - inside star triangles

//if function for stroke to turn white if its thicker 
  if ((standardstroke + 2) > 2) {
    stroke(thickstrokec); // white stroke for thicker standard stroke + 2
  } else {
    stroke(basestrokec); // normal blue colour stroke for normal standardstroke
  }

  fill(lightyellow); //light yellow original
  strokeWeight (standardstroke + 1);
  
  //first.x, first.y, second.x, second.y, third.x, third.y
  //top inside triangle
  triangle(centrex - 10, centrey - 10, centrex + 10, centrey - 10, centrex, centrey - trianglelength);
  //right inside triangle
  triangle(centrex + 10, centrey - 10, centrex + 10, centrey + 10, centrex + trianglelength, centrey);
  //bottom inside triangle
  triangle(centrex - 10, centrey + 10, centrex + 10, centrey + 10, centrex, centrey + trianglelength);
  //left inside triangle
  triangle(centrex - 10, centrey - 10, centrex - 10, centrey + 10, centrex - trianglelength, centrey);

//Drawing front star layer - very centre front star diamond ontop of centre square

  fill(lightyellow); //light yellow original
  strokeWeight(standardstroke - 0.5);
  stroke(basestrokec);

  beginShape();

  //adding each point of the diamond
  vertex(centrex, centrey - 10);
  vertex(centrex + 10, centrey);
  vertex(centrex, centrey + 10);
  vertex(centrex - 10, centrey);

  endShape(CLOSE);

}