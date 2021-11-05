let add = document.getElementById('add');
let list = document.getElementById('list');
let input = document.getElementById('input');
let text = document.getElementById('thatsPrettyGood');

add.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.innerText = input.value;
    list.appendChild(paragraph);
    input.value = '';
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through';
    });
    paragraph.addEventListener('dblclick', function() {
        list.removeChild(paragraph);
    });
});

text.addEventListener('click', function() {
    var audio = new Audio("hey-thats-pretty-good.mp3");
	audio.play();
});