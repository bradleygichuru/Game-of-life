import pyglet
cell_image = pyglet.image.load('cell.png')
class Grid():
    def __init__(self,x_size,y_size,no_of_cells,cell_width):
        self.x_size = x_size
        self.y_size = y_size
        self.no_of_cells = no_of_cells
        ## TODO:  <07-04-20, no_of_cells is not relevant since cell no will be dependent on x_size and y_size#
        self.cell_width = cell_width
        self.cells = []
        self.main_batch = pyglet.graphics.Batch()

    def initialize_grid(self):
        for y in range(1, self.y_size+1):
            for x in range(1, self.x_size+1):
                self.cells.append(pyglet.sprite.Sprite(cell_image,x*self.cell_width,y*self.cell_width,batch = self.main_batch))
                print("made cell pos x:{x} y:{y} ".format(x=x*self.cell_width,y = y*self.cell_width))
    def draw(self):
        self.main_batch.draw()
        

