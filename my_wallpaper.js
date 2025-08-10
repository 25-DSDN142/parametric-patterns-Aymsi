//your parameter variables go here!

//adding centre point variables to change my code - wanted a centre reference point
//why? Clarity of reading code, easier editing later for perameterising code for different wallpaper layouts,
//plus also for implementing an if statement for adding multiple stars later
let centrex = 100
let centrey = 100

//DrawBackStarLayer Variables
let leftpoint = centrex - 35
let rightpoint = centrex + 35
let outsidestarpointlength = 30
//Perameter change for this - connect to edge added to extend star points to edge of box
let connecttoedge = 30

//DrawSecondStarLayer + DrawFifthStarLayer Variables
let squarewidth = 70

//DrawFourthStarLayer + DrawSixthStarLayer Variables
let trianglelength = 35

//custom stroke weight variables + used for if statements
let standardstroke = 2

//colour variables 
//each colour variable had to be put under each layer triangle function to work properly

//background colour Line: 84
  // let backgroundcolour = color(14, 70, 92); //dark navy blue

//stroke colours Line: 128
  // let basestrokec = color(255, 223, 148); //brighter yellow
  // let thickstrokec = color(255, 233, 181); //light yellow
//fill colours Line: 132
// let backlayerfill = color(255); //white
// let secondlayerfill = color(21, 70, 110); //darker blue
// let thirdlayerfill = color(128, 197, 255); //light blue
// let fourthlayerfill = color(150, 220, 255); //light blue
// let fifthlayerfill = color(14, 70, 92); //dark blue
// let sixthlayerfill = color(222, 246, 255); //very light blue
// let frontlayerfill = color(255); //white

//Functions specifically under DrawStar (so that they work - parameters passing through DrawStar function)
//scaleFactor under DrawStar Line: 104 - downwards

  // //Setting local functions so they draw according to their own measurements 
  // let centrex = middlestarX;
  // let centrey = middlestarY;

  // variables for drawing shape reference
  // let leftpoint = centrex - 35;
  // let rightpoint = centrex + 35;
  // let outsidestarpointlength = 30;
  // let connecttoedge = 30;

//Multiple DrawStar functions being put under the my_symbol function
// Line: 90
  // //middle star
  // DrawStar(100, 100);
  // //top right star
  // DrawStar(150, 50);
  // //bottom right star
  // DrawStar(150, 150);
  // //bottom left star
  // DrawStar(50, 150);
  // //top left star
  // DrawStar(50, 50);

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  //pWallpaper.output_mode(GRID_WALLPAPER) - change back to DEVELOP_GLYPH to edit just design
  
  pWallpaper.resolution(NINE_PORTRAIT); //FIT_TO_SCREEN //NINE_PORTRAIT makes it portrait repeated 9x //can also do NINE_LANDSCAPE
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  //note: can change offset to change how tiling displays to fill screen/area
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  let backgroundcolour = color(0); //black
  background(backgroundcolour); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  //middle star
  DrawStar(100, 100);
  //top right star
  DrawStar(150, 50);
  //bottom right star
  DrawStar(150, 150);
  //bottom left star
  DrawStar(50, 150);
  //top left star
  DrawStar(50, 50);

}

//Creating my actual star in a function - so that I can draw/manipulate multiple stars under my_symbol function
function DrawStar (middlestarX, middlestarY, scaleFactor = 1) { 

  //Setting local functions so they draw according to their own measurements
  let centrex = middlestarX;
  let centrey = middlestarY;

  // variables for drawing shape reference
  let leftpoint = centrex - 35;
  let rightpoint = centrex + 35;
  let outsidestarpointlength = 30;
  let connecttoedge = 30;

 //trying to implement an if statement for scale function
  if (centrex > 100 || centrex < 100) {
  scaleFactor = 0.35;
 } else {
  scaleFactor = 1
}

  push();
  translate(middlestarX, middlestarY); //move start of star points to middlestarX + middlestarY
  scale(scaleFactor); //scale from origin point 
  translate(-100, -100); //so that star centre point is relative to scaling

//colour functions (need to be here so it runs properly)
//stroke colours
  let basestrokec = color(255, 212, 240); //light pink
  let thickstrokec = color(214, 255, 220); //light green
//fill colours
let backlayerfill = color(115, 156, 121); //light green
let secondlayerfill = color(255, 128, 195); //vibrant pink
let thirdlayerfill = color(227, 34, 136); //darker vibrant pink
let fourthlayerfill = color(110, 3, 60); //deep dark pink
let fifthlayerfill = color(110, 3, 60); //deep dark pink
let sixthlayerfill = color(227, 34, 136); //darker vibrant pink
let frontlayerfill = color(255, 128, 195); //vibrant pink

//if function for stroke to turn white if its thicker 
  if ((standardstroke + 2) > 2) {
    stroke(thickstrokec); // white stroke for thicker standard stroke + 2
  } else {
    stroke(basestrokec); // normal blue colour stroke for normal standardstroke
  }

  strokeWeight(standardstroke + 2); //thicker back stroke w custom variable
  //colour options:15, 45, 66 (option) //145, 193, 230 (option) //changing stroke colour to dark blue tones
  fill(backlayerfill); //bright yellow original
  
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

  fill(secondlayerfill); //bright yellow original
  strokeWeight(standardstroke);
  stroke(basestrokec);
  square(centrex - 35, centrey - 35, squarewidth);

//Drawing third star layer - centre diamond of back star

  fill(thirdlayerfill); //lightest yellow original
  strokeWeight (standardstroke);
  stroke(basestrokec);

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
  
  fill(fourthlayerfill); //light blue original
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

  fill(fifthlayerfill); //bright yellow original
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

  fill(sixthlayerfill); //light yellow original
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

  fill(frontlayerfill); //light yellow original
  strokeWeight(standardstroke - 0.5);
  stroke(basestrokec);

  beginShape();

  //adding each point of the diamond
  vertex(centrex, centrey - 10);
  vertex(centrex + 10, centrey);
  vertex(centrex, centrey + 10);
  vertex(centrex - 10, centrey);

  endShape(CLOSE);

  pop();
}