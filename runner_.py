import pyglet
from grid import Grid

grid_1 = Grid(100,10,10,20)
grid_1.initialize_grid()
window = pyglet.window.Window(1000,760)
@window.event
def on_draw():
    grid_1.draw()

pyglet.app.run()
