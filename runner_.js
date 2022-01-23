const cell_width = 20;
const grid_width = 600;
const grid_height = 600;

grid_1 = new Grid(grid_width, grid_height,cell_width);
grid_1.initialize_grid()
function setup(){
  createCanvas(grid_width,grid_height);
  frameRate(1)
}

function draw(){
  grid_1.cells.forEach((cell)=>{
    fill(51);
    if (cell.working_state === 1) {
      rect(cell.x,cell.y,grid_1.draw_width,grid_1.draw_width)
    }
    else if (cell.working_state === 0) {
      fill('red');
      rect(cell.x,cell.y,grid_1.draw_width,grid_1.draw_width)
    } 
    //rect(cell.x,cell.y,grid_1.draw_width,grid_1.draw_width)
    
    //grid_1.update()
  })
  //grid_1.observeAndSimulate()
  //grid_1.updateStates()

}
