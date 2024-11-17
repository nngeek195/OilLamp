from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

# State to track whether the image is visible
is_flame_visible = False

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('toggle_flame1')
def handle_toggle_flame():
    global is_flame_visible
    is_flame_visible = not is_flame_visible
    # Notify all connected clients about the state change
    emit('update_flame1', {'isFlameVisible': is_flame_visible}, broadcast=True)

@socketio.on('toggle_flame2')
def handle_toggle_flame():
    global is_flame_visible
    is_flame_visible = not is_flame_visible
    # Notify all connected clients about the state change
    emit('update_flame2', {'isFlameVisible': is_flame_visible}, broadcast=True)

@socketio.on('toggle_flame3')
def handle_toggle_flame():
    global is_flame_visible
    is_flame_visible = not is_flame_visible
    # Notify all connected clients about the state change
    emit('update_flame3', {'isFlameVisible': is_flame_visible}, broadcast=True)
@socketio.on('toggle_flame4')
def handle_toggle_flame():
    global is_flame_visible
    is_flame_visible = not is_flame_visible
    # Notify all connected clients about the state change
    emit('update_flame4', {'isFlameVisible': is_flame_visible}, broadcast=True)
@socketio.on('toggle_flame5')
def handle_toggle_flame():
    global is_flame_visible
    is_flame_visible = not is_flame_visible
    # Notify all connected clients about the state change
    emit('update_flame5', {'isFlameVisible': is_flame_visible}, broadcast=True)
@socketio.on('toggle_flame6')
def handle_toggle_flame():
    global is_flame_visible
    is_flame_visible = not is_flame_visible
    # Notify all connected clients about the state change
    emit('update_flame6', {'isFlameVisible': is_flame_visible}, broadcast=True)
@socketio.on('toggle_flame7')
def handle_toggle_flame():
    global is_flame_visible
    is_flame_visible = not is_flame_visible
    # Notify all connected clients about the state change
    emit('update_flame7', {'isFlameVisible': is_flame_visible}, broadcast=True)
@socketio.on('toggle_flame8')
def handle_toggle_flame():
    global is_flame_visible
    is_flame_visible = not is_flame_visible
    # Notify all connected clients about the state change
    emit('update_flame8', {'isFlameVisible': is_flame_visible}, broadcast=True)
@socketio.on('toggle_flame9')
def handle_toggle_flame():
    global is_flame_visible
    is_flame_visible = not is_flame_visible
    # Notify all connected clients about the state change
    emit('update_flame9', {'isFlameVisible': is_flame_visible}, broadcast=True)
@socketio.on('toggle_flame10')
def handle_toggle_flame():
    global is_flame_visible
    is_flame_visible = not is_flame_visible
    # Notify all connected clients about the state change
    emit('update_flame10', {'isFlameVisible': is_flame_visible}, broadcast=True)
@socketio.on('toggle_flame11')
def handle_toggle_flame():
    global is_flame_visible
    is_flame_visible = not is_flame_visible
    # Notify all connected clients about the state change
    emit('update_flame11', {'isFlameVisible': is_flame_visible}, broadcast=True)
@socketio.on('toggle_flame12')
def handle_toggle_flame():
    global is_flame_visible
    is_flame_visible = not is_flame_visible
    # Notify all connected clients about the state change
    emit('update_flame12', {'isFlameVisible': is_flame_visible}, broadcast=True)    

if __name__ == '__main__':
    socketio.run(app, debug=True)
