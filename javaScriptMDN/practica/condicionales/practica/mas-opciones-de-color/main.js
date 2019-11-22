var select = document.querySelector('select');
var html = document.querySelector('.output');

console.log(html);

select.onchange = function() {
 var choice = select.value;
console.log(choice);
 switch(choice) {
 case 'black':
 update('black','white');
 break;
 case 'white':
 update('white','black');
 break;
 case 'purple':
 update('purple','white');
 break;
 case 'yellow':
 update('yellow','darkgray');
 break;
 case 'psychedelic':
 update('lime','purple');
 break;
 }
}

function update(bgColor, textColor) {
 html.style.backgroundColor = bgColor;
 html.style.color = textColor;
}