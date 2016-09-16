window.onload=mark2;

var main_menu =
      '<ul id="category" class="category">'+
        '<li><a href="Tom_Goldberg_Ex11temp2.html">Home</a>'+
          '<ul id="submenu" class="submenu">'+
             '<li><a href="Tom_Goldberg_Ex11temp2.html">Web Connection</a></li>'+
             '<li><a href="telaviv.html">Tel Aviv</a></li>'+
             '<li><a href="">Credit Card</a></li>'+
             '<li><a href="">Other1</a></li>'+
             '<li><a href="">Other2</a></li>'+
          '</ul>'+
        '<li><a href="">History</a></li>'+
        '<li><a href="">Create Account</a></li>'+
        '<li><a href="">Search</a></li>'+
        '<li><a href="">Buy</a></li>'+
      '</ul>';


function mark2() {
page=window.location.href ; // page url
var obj=document.getElementById("category") ;
var elements = obj.getElementsByTagName("a") ; // Array of links


for (i=elements.length-1; i> 0 ; i--) { //search form bottom to up
  var kuku=page.indexOf(elements[i].href) ;
  if (kuku >= 0 ) 
    break ; 
    }
elements[i].style.backgroundColor="#20fff8";


var objli = elements[i].parentNode.parentNode; //objli is upper UL

if (objli.id=="category") // page has no children
{
  elements[i].parentNode.style.backgroundColor="#20fff8";

  return; 
}

document.getElementById("sideblock").innerHTML=objli.outerHTML ;
    objli.parentNode.style.backgroundColor="#20fff8";
}