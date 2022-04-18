class Cell {
  constructor(x, y, cell_width, state) {
    this.x = x;
    this.y = y;
    this.working_state = state;
    this.new_state = 0;
    this.census;
    this.neighbours =[];
    this.cell_width = cell_width
  }
  update(cells) {
    //filter for this cell neighbouring cells
    //TODO neighbours should be 8 FIXME this code TODO
    this.census = {
      neighbours_alive: 0
    }
    cells.forEach((cell)=>{
      if (cell.x == this.x - this.cell_width && cell.y == this.y - this.cell_width) {
        if (cell.working_state === 1) {
          this.census.neighbours_alive++;
        }
        this.neighbours.push(cell)
      }
      if (cell.x == this.x && cell.y == this.y + this.cell_width) {
        if (cell.working_state === 1) {
          this.census.neighbours_alive++;
        }
        this.neighbours.push(cell)
      }
      if (cell.x == this.x + this.cell_width && cell.y - this.cell_width) {
        if (cell.working_state === 1) {
          this.census.neighbours_alive++;
        }
        this.neighbours.push(cell)
      }
      if (cell.x == this.x - this.cell_width && cell.y == this.y) {
        if (cell.working_state === 1) {
          this.census.neighbours_alive++;
        }
        this.neighbours.push(cell)
      }
      if (cell.x == this.x + this.cell_width && cell.y == this.y) {
        if (cell.working_state === 1) {
          this.census.neighbours_alive++;
        }
        this.neighbours.push(cell)
      }
      if (cell.x == this.x - this.cell_width && cell.y == this.y + this.cell_width) {
        if (cell.working_state === 1) {
          this.census.neighbours_alive++;
        }
        this.neighbours.push(cell)
      }
      if (cell.x == this.x && cell.y == this.y - this.cell_width) {
        if (cell.working_state === 1) {
          this.census.neighbours_alive++;
        }
        this.neighbours.push(cell)
      }
      if (cell.x == this.x + this.cell_width && cell.y == this.y - this.cell_width) {
        if (cell.working_state === 1) {
          this.census.neighbours_alive++;
        }
        this.neighbours.push(cell)
      }
      
    })
    //to store stats about neighbours
    
    //make census before update
    //this.neighbours.forEach((cell) => {
      //if (cell.working_state === 1) {
        //this.census.neighbours_alive++;
      //}
    //})
    //update based on cellected census
    if (this.working_state == 0 && this.census.neighbours_alive === 3) {
      this.new_state = 1;
      //born
    } else if (this.working_state == 1 && (this.census.neighbours_alive === 2 || this.census.neighbours_alive === 3)) {
      this.new_state = 1;
      //lives to the next generation
    } else if (this.working_state == 1 && this.census.neighbours_alive >= 4) {
      this.new_state = 0;
      //death by overcrowding
    } else if (this.working_state == 1 && this.census.neighbours_alive <= 1 ) {
      this.new_state = 0;
      //death by underpopulation death by solitude 
    }
    
  }
}