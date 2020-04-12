class Cell{
  constructor(x,y,state){
    this.x = x;
    this.y = y;
    this.state = state;
  }
  update(cells){
    //filter  for this's cell neighbouring cells 
    let neighbours = cells.filter((el)=>{
      return(
        ((el.x==this.x-cell_width_)&&(el.y==this.y-cell_width_))||//
        ((el.x==this.x)&&(el.y==this.y+cell_width_))||
        ((el.x==this.x+cell_width_)&&(el.y-cell_width_))||
        ((el.x==this.x-cell_width_)&&(el.y==this.y))||
        ((el.x==this.x+cell_width_)&&(el.y==this.y))||
        ((el.x==this.x-cell_width_)&&(el.y==this.y-cell_width_))||
        ((el.x==this.x)&&(el.y==this.y-cell_width_))||
        ((el.x==this.x+cell_width_)&&(el.y==this.y-cell_width_))
      )
    })
    //to store stats about neighbours
    let census = {
      neighbours_alive:0
    } 
    //make census before update 
    neighbours.forEach((cell)=>{
      if (cell.state === 1) {
        census.neighbours_alive++;
      }
    })
    //update based on cellected census
    if(this.state === 0 && census.neighbours_alive === 3){
      this.state = 1;
      //born
    }
    else if(this.state == 1 &&( census.neighbours_alive === 2 || census.neighbours_alive ===3)){
      this.state =1;
      //lives to the next generation
    }
    else if(census.neighbours_alive > 3){
      this.state=0;
      //death by overcrowding
    }
    else if(census.neighbours_alive < 2){
      this.state = 0;
      //death by underpopulation

    }
  }
  

}
    

    
