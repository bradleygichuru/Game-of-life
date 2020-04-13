const cell_width_ = 20;
const grid_width = 600;
const grid_height = 600;

grid_1 = new Grid(grid_width, grid_height,cell_width_);
grid_1.initialize_grid()
function setup(){
  createCanvas(grid_width,grid_height);
  frameRate(1)
}

function draw(){
  grid_1.cells.forEach((cell)=>{
    fill(51);
    if (cell.state === 1) {
      rect(cell.x,cell.y,grid_1.draw_width,grid_1.draw_width)
    }
    //rect(cell.x,cell.y,grid_1.draw_width,grid_1.draw_width)
    //// TODO:  <14-04-20, yourname> fix cell.update//
    //grid_1.update()
  })
  //grid_1.update()
}
