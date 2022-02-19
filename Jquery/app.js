let msg = 'Alert';
let button = $("<button>" + msg +"</button>");
$(button).attr('id','Alert');
$('body').append(button);

button.on("click", function(){
    alert('This button is clicked');
})

let button_1 = $("#push");
button_1.on("click", function(){
let text = $("input[type='text']").val();
    alert(text);
})

let div = $('#mouse')
$('#mouse').on("mouseover", function(){
    var back = ["#ff0000","blue","gray"];
  var rand = back[Math.floor(Math.random() * back.length)];
  $('#mouse').css('background',rand);
    
})      
    div.on("mouseout",function(){
        $("div").css("background-color", "white");
    })
    let p_msg = 'Put some text in a paragraph.';
    let para = $('<p>'+ p_msg +'</p>');
    $('body').append(para);
    para.on("click", function(){
        para.css('color', setRandomColor());
    })


let msg2 = 'My Name';
let button_2 = $('<button>'+ msg2 +'</button>');
$(button_2).attr('id','name');
let newDiv =   $('<div></div>');
$(newDiv).attr('id','newDiv');
let text_name = 'Kaleb  Bridges';
let span = $('<span></span>');

$('body').append(button_2);
$('#name').on('click', function(){
    $(span).text(text_name);
    $(span).appendTo(newDiv);
    $('body').append(newDiv);
  
})

let msg3  = 'My Friends';
let num = 0;
let names = ['Jack','Jill','Mary','John','Matt','Wes','Meagan','Thomas','Ashley','Towanda'];
let button_3 = $('<button>' + msg3 + '</button>');

$('body').append(button_3);
button_3.on('click', function(){
     let li = $('<li>' + names[num++] +'</li>');
     $('body').append(li);
})
function setRandomColor() {
    var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }