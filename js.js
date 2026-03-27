// progress 값을 + 버튼, - 버튼을 눌렀을때  id 'progress1'의 값을 1씩 변형

function progressup(){
    document.querySelector('#progress1').value = parseInt(document.querySelector('#progress1').value) + 1;
    document.querySelector('#progress2').innerText = document.querySelector('#progress1').value;
}
function progressdown(){
    document.querySelector('#progress1').value = parseInt(document.querySelector('#progress1').value) - 1;
    document.querySelector('#progress2').innerText = document.querySelector('#progress1').value;
}