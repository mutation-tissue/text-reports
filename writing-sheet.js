function proc() {
  var count1 = load_number();
  document.getElementById("dayCount").innerHTML = count1;
  var text1 = load_text();
  count = load_number();
  for (var i = 0; i < count; i++) {
  var cute = localStorage.getItem(i);
  var newTag = document.createElement('div');
  newTag.className = 'old_text';
  newTag.innerHTML = cute;
  document.getElementById('this').appendChild(newTag);
  }
}
(function($, $pg) {
$('.fjdj').hover(
  function(){
    $('.as').css('color', '#00aa00');
  },
  function(){
    $('.as').css('color', 'red');
  });
let change = ()=>{
  $('.little').css('color','#d4d4d4')
}
let reset = ()=> {
  var count1 = load_number();
  count1 = 0;
  save(count1);
  document.getElementById("dayCount").innerHTML = count1;
}
let countup = ()=>{
  var count1 = load_number();
  count1 += 1;
  save(count1);
  document.getElementById("dayCount").innerHTML = count1;
}
function load_number() {
    var count_data = localStorage.getItem('count1');
    var count = Number(count_data);
    if(
      count &&
      1 <= count &&
      Math.floor(count) === count
    ) {
      return count;
    } else {
      return 0;
    }
}
function save (count) {
    localStorage.setItem("count1",count);
}
  function placed (text) {
    if(text == null){
      first_sentence();
    } else {
    localStorage.setItem("text_save",text);
    }
}
let new_text = ()=> {
  var text = document.getElementById("contents_text").value;
  if(text == ""){
    alert("入力されていません");
  } else {
    placed (text);
    count = load_number();
    var newTag = document.createElement('div');
    newTag.innerHTML = text;
    localStorage.setItem(count,text);
    newTag.className = 'old_text';
    document.getElementById('this').appendChild(newTag);
    var text = document.getElementById("contents_text");
    text.value = "";
    countup();
  }
}
function load_text() {
  var text_data = localStorage.getItem('text_save');
  document.getElementById("list_line").innerHTML = ('更新すると下に表示されます。');
}
let contents_remove = ()=> {
  localStorage.removeItem("text_save");
  var text_data = localStorage.getItem('text_save');
  first_sentence();
  countup();
}
let new_place = ()=> {
  var newTag = document.createElement("p");
  set_number = load_number();
  newTag.innerHTML = set_number + '回目の新しいやつだよ。ちなみにこれは更新すると消えます';
  $('.check-list').append(newTag);
}
let add_sentence = ()=> {
  var text = document.getElementById("contents_text").value;
  if(text == ""){
    alert("入力されていません");
  } else {
    placed (text);
    var newTag = document.createElement("p");
    newTag.innerHTML = text;
    $('.check-list').append(newTag);
    countup();
  }
}
})(jQuery, $);
