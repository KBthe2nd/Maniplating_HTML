let button = document.createElement('button');
let btn_Text = document.createTextNode('Alert button');
button.appendChild(btn_Text);
document.body.appendChild(button);
button.addEventListener("click", function(){
    alert("I've been clicked ");
})

let submit = document.querySelector("button");
submit.addEventListener("click", function(){
    let text = document.getElementById("text")
    alert(text.value);    
})

let div = document.querySelector('div');
let par = document.querySelector('p');
div.addEventListener("mouseover", function(){
    div.style.backgroundColor = getRandomColor();

div.addEventListener("mouseleave", function(){
    div.style.backgroundColor = 'white';
})

par.addEventListener("click",function(){
    par.style.color = getRandomColor();
});
});

let button_1 = document.createElement('button');
document.body.appendChild(button_1);
let emptyDiv = document.createElement('div');
button_1.textContent = 'My Name';
button_1.addEventListener("click", function(){

    let span = document.createElement('span');
    span.textContent = 'Kaleb Bridges'
    emptyDiv.appendChild(span);
    document.body.appendChild(emptyDiv);

})

let names = ['Jack', 'Jill','Annie','Brock','Harold', 'Trevor','Shea','Meagan','Tyler','Matt'];
let num = 0;
let arrBtn = document.getElementById('array');
arrBtn.addEventListener("click", function(){
    let li = document.createElement('li');
    let ul = document.querySelector('ul');
    li.textContent = names[num++];
    ul.appendChild(li);
    document.body.appendChild(ul);


});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
