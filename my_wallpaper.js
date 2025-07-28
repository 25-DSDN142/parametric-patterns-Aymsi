//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(0); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  var petallength = 80;

  noStroke()
  fill(255, 66, 167)
  //outside back petals
  ellipse(135, 65, petallength, petallength);
  ellipse(65, 65, petallength, petallength);
  ellipse(65, 135, petallength, petallength);
  ellipse(135, 135, petallength, petallength);

  fill(247, 119, 187)
  //petals
  ellipse(100, 145, 45, petallength);
  ellipse(100, 55, 45, petallength);
  ellipse(150, 100, petallength, 45);
  ellipse(50, 100, petallength, 45);

  fill(255, 166, 213)
  //insidepetals
  ellipse(125, 75, petallength - 30, 50);
  ellipse(75, 75, petallength - 30, 50);
  ellipse(75, 125, petallength - 30, 50);
  ellipse(125, 125, petallength - 30, 50);

  fill(255, 247, 138)
  //centre circle
  ellipse(100, 100, 45, 45);
  
}
