var element = document.getElementById("mode"); //grab the element
element.onclick = function() { //asign a function
//code
img =document.getElementById("img_mode").src.split("/");
if ( img[img.length-1] == "icon-moon.svg"){
    document.getElementById("img_mode").src = "images/icon-sun.svg";
    document.getElementsByClassName("top_fixedimage")[0].src = "images/bg-desktop-dark.jpg";
    var mn= document.getElementsByClassName("menu");
    for(var i=0;i<mn.length;i++){
         mn[i].style.backgroundColor='rgb(' + 37 + ',' + 39 + ',' + 60 + ')';
         mn[i].style.color ='honeydew';
    }
    var a_s= document.getElementsByTagName('li');
    for(var i=0;i<a_s.length;i++){
        a_s[i].children[0].style.color ='white';
        a_s[i].children[0].style.fontWeight='normal';
   }
    document.getElementsByClassName("add_item")[0].style.backgroundColor='rgb(' + 37 + ',' + 39 + ',' + 60 + ')';
    elements = document.getElementsByClassName("item");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor='rgb(' + 37 + ',' + 39 + ',' + 60 + ')';
    }

    document.body.style.backgroundColor = 'rgb(' + 24 + ',' + 24 + ',' + 35 + ')';
    }
else{
    document.getElementById("img_mode").src = "images/icon-moon.svg";
    document.getElementsByClassName("top_fixedimage")[0].src = "images/bg-desktop-light.jpg";
    var mn= document.getElementsByClassName("menu");
    for(var i=0;i<mn.length;i++){
        mn[i].style.backgroundColor='white';
        mn[i].style.color ='rgb(' + 112 + ',' + 112 + ',' + 112 + ')';
    }

    var a_s= document.getElementsByTagName('li');
    for(var i=0;i<a_s.length;i++){
        a_s[i].children[0].style.color ='rgb(' + 112 + ',' + 112 + ',' + 112 + ')';
        a_s[i].children[0].style.fontWeight='normal';
   }
    document.getElementsByClassName("add_item")[0].style.backgroundColor='white';
    elements = document.getElementsByClassName("item");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor='white';
    }

    document.body.style.backgroundColor = 'rgb(' + 235 + ',' + 235 + ',' + 235 + ')';
    }
}

var itms = document.getElementsByClassName("item");

document.getElementsByClassName("left_nav")[0].innerHTML =  document.getElementsByClassName("item").length + " items left";
var element = document.getElementsByClassName("right_nav")[0]; //grab the element
element.onclick = function() { //asign a function
    var items = itms;
    for( var i =0;i<items.length;i++){
        if (items[i].children[1].style.textDecoration == "line-through")
           items[i].remove();
    }
    document.getElementsByClassName("left_nav")[0].innerHTML =  document.getElementsByClassName("item").length + " items left";

}
var itm = document.getElementsByClassName("item")[0].cloneNode(true);
function add_item(el) { 
    if(el.checked){
        var text_ = document.getElementsByClassName('form__field')[0].value;
        if(text_!==''){
        var new_item =itm.cloneNode(true);
        var img =document.getElementById("img_mode").src.split("/");
        if ( img[img.length-1] != "icon-moon.svg")
                new_item.style.backgroundColor='rgb(' + 37 + ',' + 39 + ',' + 60 + ')';  
        new_item.children[1].innerHTML=text_;
        document.getElementsByClassName("items")[0].appendChild(new_item);
        document.getElementsByClassName("left_nav")[0].innerHTML = itms.length + " items left";
        
        }
    }
}
function remove(el) {
    var element  = el.parentNode;
    var text_=element.children[1].innerHTML;
    var is_checked=element.children[1].textDecoration ;
    element.remove();
    document.getElementsByClassName("left_nav")[0].innerHTML =  document.getElementsByClassName("item").length + " items left";
  }

function text_change(el){
    if(el.checked)
        el.parentNode.parentNode.children[1].style.textDecoration = "line-through";
       
    else
        el.parentNode.parentNode.children[1].style.textDecoration = "none";
}


function complete_ele(el){
    var x=0;
    for( var i =0;i<itms.length;i++)
            itms[i].style.display="block";
    for( var i =0;i<itms.length;i++){ 
        if (itms[i].children[1].style.textDecoration != "line-through" ){
            itms[i].style.display="none";
            x++;
        }
    }
    document.getElementsByClassName("left_nav")[0].innerHTML =  document.getElementsByClassName("item").length-x + " items left";
    var children_= el.parentNode.parentNode.children;
    for(var i=0;i<children_.length;i++){
        children_[i].children[0].style.color='rgb(' + 112 + ',' + 112 + ',' + 112 + ')';
        img =document.getElementById("img_mode").src.split("/");
       if ( img[img.length-1] != "icon-moon.svg")
        children_[i].children[0].style.color='white';
        children_[i].children[0].style.fontWeight = "normal";
    }
    el.style.color="blue";
    el.style.fontWeight = "bold";
}

function All_ele(el){
    for( var i =0;i<itms.length;i++)
        itms[i].style.display="block";
    document.getElementsByClassName("left_nav")[0].innerHTML =  document.getElementsByClassName("item").length + " items left";
    var children_= el.parentNode.parentNode.children;
    for(var i=0;i<children_.length;i++){
        children_[i].children[0].style.color='rgb(' + 112 + ',' + 112 + ',' + 112 + ')';
        img =document.getElementById("img_mode").src.split("/");
       if ( img[img.length-1] != "icon-moon.svg")
        children_[i].children[0].style.color='white';
        children_[i].children[0].style.fontWeight = "normal";
    }
    el.style.color="blue";
    el.style.fontWeight = "bold";
}
function uncomplete_ele(el){
    var x=0;
    for( var i =0;i<itms.length;i++)
        itms[i].style.display="block";

    for( var i =0;i<itms.length;i++)
        if (itms[i].children[1].style.textDecoration == "line-through"){
            itms[i].style.display="none";
            x++;
        }

    document.getElementsByClassName("left_nav")[0].innerHTML =  document.getElementsByClassName("item").length-x + " items left";
    var children_= el.parentNode.parentNode.children;
    for(var i=0;i<children_.length;i++){
        children_[i].children[0].style.color='rgb(' + 112 + ',' + 112 + ',' + 112 + ')';
        img =document.getElementById("img_mode").src.split("/");
       if ( img[img.length-1] != "icon-moon.svg")
        children_[i].children[0].style.color='white';
        children_[i].children[0].style.fontWeight = "normal";
    }
    el.style.color="blue";
    el.style.fontWeight = "bold";
}

var idx_current;

function drag(el) {
    idx_current = Array.prototype.indexOf.call(el.parentNode.children, el);
   
  }
function drop(el){
    var idx_target = Array.prototype.indexOf.call(el.parentNode.children, el);
    itms[idx_current].style.position ="inherit";
    exchangeElements(el.parentNode.children[idx_target], el.parentNode.children[idx_current]);
   
}

function exchangeElements(element1, element2)
{
    var clonedElement1 = element1.cloneNode(true);
    var clonedElement2 = element2.cloneNode(true);

    element2.parentNode.replaceChild(clonedElement1, element2);
    element1.parentNode.replaceChild(clonedElement2, element1);

}
function drop_touch(el, event){
    var targert = document.elementFromPoint(event.changedTouches[0].pageX, event.changedTouches[0].pageY).parentNode;
    var idx_target=Array.prototype.indexOf.call(el.parentNode.children, targert)
    exchangeElements(el.parentNode.children[idx_target], el.parentNode.children[idx_current]);
}

function move_touch(event){
    event.preventDefault();
   
}

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    var parent=document.getElementsByClassName('center_nav')[0].parentNode.cloneNode(true);
    document.getElementsByClassName('center_nav')[0].remove();
    parent = parent.children[1];
    var elem = document.createElement('div');
    elem.classList.add("center_nav");
    elem.appendChild(parent);

    var elem_par = document.createElement('div');
    elem_par.classList.add("menu");
    elem_par.classList.add("down_menu");
    elem_par.appendChild(elem);

    document.getElementsByClassName('container')[0].appendChild(elem_par);
    exchangeElements(elem_par, document.getElementsByClassName('container')[0].children[4]);
}