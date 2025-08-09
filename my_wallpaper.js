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
let connecttoedge = 20

//DrawSecondStarLayer + DrawFifthStarLayer Variables
let squarewidth = 70

//DrawFourthStarLayer + DrawSixthStarLayer Variables
let trianglelength = 50

//custom stroke weight variables
let standardstroke = 2
let thickerstroke = 4

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER) - change back to DEVELOP_GLYPH to edit just design
  
  pWallpaper.resolution(NINE_PORTRAIT); //FIT_TO_SCREEN //NINE_PORTRAIT makes it portrait repeated 9x //can also do NINE_LANDSCAPE
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  //note: can change offset to change how tiling displays to fill screen/area
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(12, 39, 59); //want this to end up being dark navy - like a night sky?
}

//161, 209, 255
let colour = (161, 209, 255)

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  DrawBackStarLayer();
  DrawSecondStarLayer();
  DrawThirdStarLayer();
  DrawFourthStarLayer();
  DrawFifthStarLayer();
  DrawSixthStarLayer();
  DrawFrontStarLayer();
}

 if (thickerstroke = 4) {
  let colour = (0)
} 

//Seperated each layer of the star into its own function - for clarity of code and easier adjustment 
//making each function based around the centrex = 100, and centrey = 100 function
function DrawBackStarLayer () {

   //drawing shape with vertex points to form shape as if i was making the triangles based off of a square's points
  fill(255, 218, 97); //vibrant yellow colour
  stroke(colour);
  strokeWeight(thickerstroke); //thicker back stroke w custom variable
  //15, 45, 66 (option) //145, 193, 230 (option) //changing stroke colour to dark blue tones
  beginShape();

  vertex(leftpoint, centrey - 20);
  vertex(centrex, outsidestarpointlength);
  vertex(rightpoint, centrey - 20);
  vertex(200 - outsidestarpointlength, centrey);
  vertex(rightpoint, centrey + 20);
  vertex(centrex, 200 - outsidestarpointlength);
  vertex(leftpoint, centrey + 20);
  vertex(outsidestarpointlength, centrey);
  
  endShape(CLOSE);

}

function DrawSecondStarLayer () {

 //Behind square shape - was going to do triangles but square more efficient!
  fill(255, 226, 138); //light yellow (middle colour)
  strokeWeight (standardstroke);
  square(centrex - 35, centrey - 35, squarewidth)

}

function DrawThirdStarLayer () {

  //centre diamond of back star
  fill(255, 244, 191); //lightest yellow
  
  beginShape();

  //adding each point of the diamond
  vertex(centrex, centrey - 40);
  vertex(centrex + 40, centrey);
  vertex(centrex, centrey + 40);
  vertex(centrex - 40, centrey);

  endShape(CLOSE);

}

function DrawFourthStarLayer () {

  fill(255, 218, 97); //vibrant yellow
  strokeWeight (thickerstroke);
  //diagonal middle triangles
  //top right triangle
  //first.x, first.y, second.x, second.y, third.x, third.y
  triangle(centrex - 10, centrey - 10, centrex + 10, centrey + 10, centrex + trianglelength, centrey - trianglelength);
  //bottom right triangle
  triangle(centrex + 10, centrey - 10, centrex - 10, centrey + 10, centrex + trianglelength, centrey + trianglelength);
  //bottom left triangle
  triangle(centrex - 10, centrey - 10, centrex + 10, centrey + 10, centrex - trianglelength, centrey + trianglelength);
  //toplefttriangle
  triangle(centrex - 10, centrey + 10, centrex + 10, centrey - 10, centrex - trianglelength, centrey - trianglelength);

}

function DrawFifthStarLayer () {

  //centre square of star
  fill(255, 226, 138);
  strokeWeight (standardstroke);
  square(centrex - 10, centrey - 10, squarewidth - 50);

}

function DrawSixthStarLayer () {
//inside star triangles
 //topinsidetriangle
//first.x, first.y, second.x, second.y, third.x, third.y
  fill(255, 244, 191); //lightest yellow
  triangle(centrex - 10, centrey - 10, centrex + 10, centrey - 10, centrex, centrey - trianglelength);
  //rightinsidetriangle
  triangle(centrex + 10, centrey - 10, centrex + 10, centrey + 10, centrex + trianglelength, centrey);
  //bottominsidetriangle
  triangle(centrex - 10, centrey + 10, centrex + 10, centrey + 10, centrex, centrey + trianglelength);
  //leftinsidetriangle
  triangle(centrex - 10, centrey - 10, centrex - 10, centrey + 10, centrex - trianglelength, centrey);


}

function DrawFrontStarLayer () {

  //very centre star diamond
  //(ontop of centre square)
  fill(255, 244, 191); //lightest yellow
   beginShape();

  //adding each point of the diamond
  vertex(centrex, centrey - 10);
  vertex(centrex + 10, centrey);
  vertex(centrex, centrey + 10);
  vertex(centrex - 10, centrey);

  endShape(CLOSE);

}

 //the goal is for every triangle of the piece to be a different shade of the star, looking like its shining
  //gives perameters to change, i wonder if i could randomly change from a selection of colours?
  //how to add an if statement?