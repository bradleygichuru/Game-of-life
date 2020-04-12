const cell_width_ = 30;
const grid_width = 1000;
const grid_height = 600;

grid_1 = new Grid(grid_width - 1, grid_height - 1,cell_width_);
grid_1.initialize_grid()
function setup(){
  createCanvas(grid_width,grid_height);
}

function draw(){
  grid_1.cells.forEach((cell)=>{
    fill(51); 
    rect(cell.x,cell.y,grid_1.draw_width,grid_1.draw_width)
    //grid_1.update()
  })
  //grid_1.update()
}
