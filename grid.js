class Grid {
  constructor(x_size, y_size, cell_width) {
    this.x_size = x_size;
    this.y_size = y_size;
    this.cell_width = cell_width;
    this.cell_count = 0;
    this.gap = 0;
  }
  initialize_grid() {
    this.y_size = this.y_size / this.cell_width;
    this.x_size = this.x_size / this.cell_width;
    this.draw_width = this.cell_width - this.gap
    this.cells = [];
    for (var y = 0; y < this.y_size; y++) {
      for (var x = 0; x < this.x_size; x++) {
        this.cells.push(new Cell(x * this.cell_width, y * this.cell_width, this.cell_width, 0));
        console.log(`made cell ${this.cell_count} at pos x:${x*this.cell_width} y:${y*this.cell_width}`) //This is a debug log
        this.cell_count++;
      }
    }
    this.runningConfig()
  }
  runningConfig() {
    // TODO:  <13-04-20> add more configurations //
    //glider configuration config
    let reference_cell = this.cells.filter((cell) => {
      return (cell.y === (this.y_size / 2) * this.cell_width && cell.x === (this.x_size / 2) * this.cell_width)
    })
    console.log({
      cell_to_refer_to: reference_cell
    })
    this.cells.forEach((cell) => {
      if (cell.x === reference_cell[0].x + this.cell_width && (cell.y === reference_cell[0].y + this.cell_width)) {
        cell.working_state = 1;
        console.log("changed cell state 1")
      }
      if (cell.x === reference_cell[0].x - this.cell_width && cell.y === reference_cell[0].y + this.cell_width * 2) {
        cell.working_state = 1;
        console.log("changed cell state 2")
      }
      if (cell.x === reference_cell[0].x && cell.y === reference_cell[0].y + this.cell_width * 2) {
        cell.working_state = 1;
        console.log("changed cell state 3")
      }
      if (cell.x === reference_cell[0].x + this.cell_width && cell.y === reference_cell[0].y + this.cell_width * 2) {
        cell.working_state = 1;
        console.log("changed cell state 4")
      }
      if (cell.x === reference_cell[0].x && cell.y === reference_cell[0].y) {
        cell.working_state = 1;
        console.log("changed cell state 5")
      }
    })

  }
  observeAndSimulate() {
    this.cells.forEach((cell) => {
      cell.update(this.cells)
    })
  }
  updateStates() {
    this.cells.forEach((cell) => {
      cell.working_state = cell.new_state
    })
  }
}