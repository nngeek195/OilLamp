const socket = io(); // Connect to the Socket.IO server

// Listen for state changes from the server
socket.on('update_flame1', (data) => {
    const flame1 = document.getElementById('flame1');
    if (data.isFlameVisible) {
        flame1.classList.add('visible');
    } else {
        flame1.classList.remove('visible');
    }
});

// Send a request to toggle the image when the button is clicked
document.getElementById('toggleButton1').addEventListener('click', () => {
    socket.emit('toggle_flame1');
});

socket.on('update_flame2', (data) => {
    const flame2 = document.getElementById('flame2');
    if (data.isFlameVisible) {
        flame2.classList.add('visible');
    } else {
        flame2.classList.remove('visible');
    }
});

// Send a request to toggle the image when the button is clicked
document.getElementById('toggleButton2').addEventListener('click', () => {
    socket.emit('toggle_flame2');
});

socket.on('update_flame3', (data) => {
    const flame3 = document.getElementById('flame3');
    if (data.isFlameVisible) {
        flame3.classList.add('visible');
    } else {
        flame3.classList.remove('visible');
    }
});

// Send a request to toggle the image when the button is clicked
document.getElementById('toggleButton3').addEventListener('click', () => {
    socket.emit('toggle_flame3');
});
socket.on('update_flame4', (data) => {
    const flame4 = document.getElementById('flame4');
    if (data.isFlameVisible) {
        flame4.classList.add('visible');
    } else {
        flame4.classList.remove('visible');
    }
});

// Send a request to toggle the image when the button is clicked
document.getElementById('toggleButton4').addEventListener('click', () => {
    socket.emit('toggle_flame4');
});

socket.on('update_flame5', (data) => {
    const flame5 = document.getElementById('flame5');
    if (data.isFlameVisible) {
        flame5.classList.add('visible');
    } else {
        flame5.classList.remove('visible');
    }
});

// Send a request to toggle the image when the button is clicked
document.getElementById('toggleButton5').addEventListener('click', () => {
    socket.emit('toggle_flame5');
});
socket.on('update_flame6', (data) => {
    const flame6 = document.getElementById('flame6');
    if (data.isFlameVisible) {
        flame6.classList.add('visible');
    } else {
        flame6.classList.remove('visible');
    }
});

// Send a request to toggle the image when the button is clicked
document.getElementById('toggleButton6').addEventListener('click', () => {
    socket.emit('toggle_flame6');
});
socket.on('update_flame7', (data) => {
    const flame7 = document.getElementById('flame7');
    if (data.isFlameVisible) {
        flame7.classList.add('visible');
    } else {
        flame7.classList.remove('visible');
    }
});

// Send a request to toggle the image when the button is clicked
document.getElementById('toggleButton7').addEventListener('click', () => {
    socket.emit('toggle_flame7');
});
socket.on('update_flame8', (data) => {
    const flame8 = document.getElementById('flame8');
    if (data.isFlameVisible) {
        flame8.classList.add('visible');
    } else {
        flame8.classList.remove('visible');
    }
});

// Send a request to toggle the image when the button is clicked
document.getElementById('toggleButton8').addEventListener('click', () => {
    socket.emit('toggle_flame8');
});
socket.on('update_flame9', (data) => {
    const flame9 = document.getElementById('flame9');
    if (data.isFlameVisible) {
        flame9.classList.add('visible');
    } else {
        flame9.classList.remove('visible');
    }
});

// Send a request to toggle the image when the button is clicked
document.getElementById('toggleButton9').addEventListener('click', () => {
    socket.emit('toggle_flame9');
});
socket.on('update_flame10', (data) => {
    const flame10 = document.getElementById('flame10');
    if (data.isFlameVisible) {
        flame10.classList.add('visible');
    } else {
        flame10.classList.remove('visible');
    }
});

// Send a request to toggle the image when the button is clicked
document.getElementById('toggleButton10').addEventListener('click', () => {
    socket.emit('toggle_flame10');
});
socket.on('update_flame11', (data) => {
    const flame11 = document.getElementById('flame11');
    if (data.isFlameVisible) {
        flame11.classList.add('visible');
    } else {
        flame11.classList.remove('visible');
    }
});

// Send a request to toggle the image when the button is clicked
document.getElementById('toggleButton11').addEventListener('click', () => {
    socket.emit('toggle_flame11');
});
socket.on('update_flame12', (data) => {
    const flame12 = document.getElementById('flame12');
    if (data.isFlameVisible) {
        flame12.classList.add('visible');
    } else {
        flame12.classList.remove('visible');
    }
});

// Send a request to toggle the image when the button is clicked
document.getElementById('toggleButton12').addEventListener('click', () => {
    socket.emit('toggle_flame12');
});