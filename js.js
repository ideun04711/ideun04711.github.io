function setCircular(value) {
    const clamped = Math.max(0, Math.min(100, Number(value)));
    const circle = document.getElementById('circularProgress');
    circle.style.setProperty('--p', clamped);
    document.getElementById('circularValue').textContent = `${clamped}%`;
}

function progressup(){
    const p = document.querySelector('#progress1');
    p.value = Math.min(100, Number(p.value) + 1);
    document.querySelector('#progress2').innerText = p.value;
    setCircular(p.value);
}

function progressdown(){
    const p = document.querySelector('#progress1');
    p.value = Math.max(0, Number(p.value) - 1);
    document.querySelector('#progress2').innerText = p.value;
    setCircular(p.value);
}

function slider(){
    const v = document.querySelector('#sliderController').value;
    document.querySelector('#progress1').value = v;
    document.querySelector('#progress2').innerText = v;
    setCircular(v);
}

window.addEventListener('DOMContentLoaded', () => {
    const startValue = document.querySelector('#progress1')?.value || 0;
    setCircular(startValue);
});
