class Grid{
  constructor(x_size,y_size,cell_width){
    this.x_size = x_size;
    this.y_size = y_size;
    this.cell_width = cell_width;
    this.cell_count = 1;
    this.gap = 5;
  }
  initialize_grid(){
    this.y_size = this.y_size/this.cell_width;
    this.x_size = this.x_size/this.cell_width;
    this.draw_width = this.cell_width - this.gap
    this.cells = [];
    for (var y = 1;y < this.y_size; y++) {
      for (var x = 1; x < this.x_size; x++) {
        this.cells.push(new Cell(x*this.cell_width,y*this.cell_width,1));
        console.log(`made cell ${this.cell_count} at pos x:${x*this.cell_width} y:${y*this.cell_width}`)
        this.cell_count++;//This is a debug log
      }
    }
  }
    update(){
    this.cells.forEach((cell)=>{
      cell.update(this.cells)
    })
  }
}
