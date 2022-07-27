
let tanimation=document.getElementById("c-bdy");

tanimation.addEventListener('focus', (event) => {
document.getElementById("t-animate").classList.remove("text-animation");
});


document.getElementById("viewanimation").addEventListener("click", viewanim);


function viewanim(){

var paddingOnClick=document.getElementById("padding-on-click");
 paddingOnClick.style.padding="149px 25px 25px 25px";
 paddingOnClick.classList.add("opacityOnClick");

var viewonclick=document.getElementById("viewonclick");
 viewonclick.style.transform="translate(-50%, -7%)";

 	const element = document.getElementById("padding-on-click");
let pos = element.offsetTop;

let newpos=pos-20;

window.scrollTo({
	behavior: 'smooth',
	top:newpos
});


let clickcahartbox=document.getElementById("clickcahartbox");

clickcahartbox.style.opacity="1";
 


var styles = {
    "opacity": "0.43",
    "filter": "blur(10px)",
    "min-height":"240px"
    
};
 
var obj = document.getElementById("bluronclick");
Object.assign(obj.style, styles);



var responsivestyle = window.matchMedia("(max-width: 680px)");
responsiveFunction(responsivestyle );
responsivestyle.addListener(responsiveFunction) ;

function responsiveFunction(responsivestyle) {
  if (responsivestyle.matches) { 
    var obj2 = document.getElementById("bluronclick");
    obj2.style.minHeight="50px";
  } 
}


   
   setInterval(function () {
   	let one = document.getElementById("one");
	    one.style.transform="scale(0.8)";

	    setInterval(function () {
   	let one = document.getElementById("two");
	    one.style.transform="scale(0.5)";
	}, 500);

	       setInterval(function () {
   	let one = document.getElementById("three");
	    one.style.transform="scale(0.6)";
	}, 700);




	                            setInterval(function () {
   	let one = document.getElementById("four");
	    one.style.transform="scale(0.4)";
	}, 1100);
  
                                setInterval(function () {
   	let one = document.getElementById("five");
	    one.style.transform="scale(1)";
	}, 1300);

    setInterval(function () {
   	let one = document.getElementById("six");
	    one.style.transform="scale(0.5)";
	}, 1200);

	 setInterval(function () {
   	let one = document.getElementById("seven");
	    one.style.transform="scale(0.6)";
	}, 800);

	  setInterval(function () {
   	let one = document.getElementById("eight");
	    one.style.transform="scale(0.6)";

	}, 1000);

	}, 300);

let maintitle=document.getElementById("bheaeding").innerText;

let maincontent=document.getElementById("c-bdy").innerText;
	

let titlemain=document.getElementsByClassName("typedheading"); 
    for(var i = 0; i < titlemain.length; i++){
    titlemain[i].innerText=maintitle;  
    }




let mainpara=document.getElementsByClassName("typedpara"); 
    for(var i = 0; i < mainpara.length; i++){
    mainpara[i].innerText=maincontent.slice(0,29)+"...";  
    }


    document.getElementById("typedpara").innerText=maincontent;

}

