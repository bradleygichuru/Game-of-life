class Cell{
  constructor(x,y,cell_width,state){
    this.x = x;
    this.y = y;
    this.state = 0;
    this.census;
    this.neighbours;
    this.cell_width = cell_width
  }
  update(cells){
    //filter for this cell neighbouring cells
    this.neighbours = cells.filter((el)=>{
      return(
        (el.x==this.x-this.cell_width && el.y==this.y-this.cell_width)||
        (el.x==this.x && el.y==this.y+this.cell_width)||
        (el.x==this.x+this.cell_width && el.y-this.cell_width)||
        (el.x==this.x-this.cell_width && el.y==this.y)||
        (el.x==this.x+this.cell_width && el.y==this.y)||
        (el.x==this.x-this.cell_width && el.y==this.y-this.cell_width)||
        (el.x==this.x && el.y==this.y-this.cell_width)||
        (el.x==this.x+this.cell_width && el.y==this.y-this.cell_width)
      )
    })
    //to store stats about neighbours
    this.census = {
      neighbours_alive:0
    }
    //make census before update
    this.neighbours.forEach((cell)=>{
      if(cell.state === 1) {
        this.census.neighbours_alive++;
      }
    })
    //update based on cellected census
    if(this.state === 0 && this.census.neighbours_alive === 3){
      this.state = 1;
      //born
    }
    else if(this.state == 1 &&( this.census.neighbours_alive === 2 || this.census.neighbours_alive ===3)){
      this.state =1;
      //lives to the next generation
    }
    else if(this.census.neighbours_alive > 3){
      this.state=0;
      //death by overcrowding
    }
    else if(this.census.neighbours_alive < 2){
      this.state = 0;
      //death by underpopulation
    }
  }
}
