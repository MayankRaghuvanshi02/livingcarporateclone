const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
document.querySelector("#licr h1").addEventListener("mouseenter",function(){
    document.querySelector("#phtt").style.opacity = 1
    document.querySelector("#phtt").style.scale = 1
})
document.querySelector("#licr h1").addEventListener("mouseleave",function(){
    document.querySelector("#phtt").style.opacity = 0
    document.querySelector("#phtt").style.scale = 0.1
})
document.querySelector("#licr1 h1").addEventListener("mouseenter",function(){
    document.querySelector("#phtt1").style.opacity = 1
    document.querySelector("#phtt1").style.scale = 1
})
document.querySelector("#licr1 h1").addEventListener("mouseleave",function(){
    document.querySelector("#phtt1").style.opacity = 0
    document.querySelector("#phtt1").style.scale = 0.1
})
document.querySelector("#licr2 h1").addEventListener("mouseenter",function(){
    document.querySelector("#phtt2").style.opacity = 1
    document.querySelector("#phtt2").style.scale = 1
})
document.querySelector("#licr2 h1").addEventListener("mouseleave",function(){
    document.querySelector("#phtt2").style.opacity = 0
    document.querySelector("#phtt2").style.scale = 0.1
})
document.querySelector("#licr3 h1").addEventListener("mouseenter",function(){
    document.querySelector("#phtt3").style.opacity = 1
    document.querySelector("#phtt3").style.scale = 1
})
document.querySelector("#licr3 h1").addEventListener("mouseleave",function(){
    document.querySelector("#phtt3").style.opacity = 0
    document.querySelector("#phtt3").style.scale = 0.1
})
document.querySelector("#licr4 h1").addEventListener("mouseenter",function(){
    document.querySelector("#phtt4").style.opacity = 1
    document.querySelector("#phtt4").style.scale = 1
})
document.querySelector("#licr4 h1").addEventListener("mouseleave",function(){
    document.querySelector("#phtt4").style.opacity = 0
    document.querySelector("#phtt4").style.scale = 0.1
})
document.querySelector("#licr5 h1").addEventListener("mouseenter",function(){
    document.querySelector("#phtt5").style.opacity = 1
    document.querySelector("#phtt5").style.scale = 1
})
document.querySelector("#licr5 h1").addEventListener("mouseleave",function(){
    document.querySelector("#phtt5").style.opacity = 0
    document.querySelector("#phtt5").style.scale = 0.1
    
})
document.querySelector("#licr6 h1").addEventListener("mouseenter",function(){
    document.querySelector("#phtt6").style.opacity = 1
    document.querySelector("#phtt6").style.scale = 1
})
document.querySelector("#licr6 h1").addEventListener("mouseleave",function(){
    document.querySelector("#phtt6").style.opacity = 0
    document.querySelector("#phtt6").style.scale = 0.1
})
document.querySelector("#right4 button").addEventListener("click",function(){
    document.querySelector("#right4 button").style.backgroundColor = "#FEF9F3"
    document.querySelector("#right4 button").style.boxShadow = "-5px 5px  black"
    document.querySelector("#right4 #btt").style.backgroundColor = "transparent"
    document.querySelector("#right4 #btt").style.boxShadow = "-0px 0px  transparent"
    document.querySelector("#left4 img").src = "./LC-groupchat-cover.jpg"
    document.querySelector("#right4 h1").innerHTML = "THE GROUP <br>CHAT "
})
document.querySelector("#right4 #btt").addEventListener("click",function(){
    document.querySelector("#right4 #btt").style.backgroundColor = "#FEF9F3"
    document.querySelector("#right4 #btt").style.boxShadow = "-5px 5px  black"
    document.querySelector("#right4 button").style.backgroundColor = "transparent"
    document.querySelector("#right4 button").style.boxShadow = "-0px 0px  transparent"
    document.querySelector("#left4 img").src = "./LC-102.JPG"
    document.querySelector("#right4 h1").innerHTML = "THE BREAK ROOM"
})

var center = 0
document.querySelector("#center").addEventListener("click",function(){
 if(center == 0){

    
    
        document.querySelector("#line1").style.opacity = 0
        document.querySelector("#line").style.backgroundColor = "#FEF9F3"
        document.querySelector("#line2").style.backgroundColor = "#FEF9F3"
        document.querySelector("#linecross").style.top = 0
        document.querySelector("#nav").style.backgroundColor = "transparent"
        document.querySelector("#nav").style.color = "#FEF9F3"
        document.querySelector("#nav-part2 #support").style.color = "black"
        document.querySelector("#nav-part2 #support").style.backgroundColor = "#FEF9F3"
        document.querySelector("#nav-part2 button").style.backgroundColor = "transparent"
        document.querySelector("#nav-part2 button").style.color = "#FEF9F3"
        document.querySelector("#nav-part2 button").style.borderColor =  "#FEF9F3"
        document.querySelector("#nav").style.borderColor =  "#FEF9F3"
         document.querySelector("#line").style.transform = "rotate(35deg)"
         document.querySelector("#line2").style.transform = "rotate(-35deg)"
    
    
    
         document.querySelector("#nav-part2 button").addEventListener("mouseenter",function(){
            document.querySelector("#nav-part2 button").style.backgroundColor = "#DF80AC"
        })
        document.querySelector("#nav-part2 button").addEventListener("mouseleave",function(){
            document.querySelector("#nav-part2 button").style.backgroundColor = "transparent"
           
        })
    
   


    
      center = 1

}else{
    document.querySelector("#line1").style.opacity = 1
    document.querySelector("#line").style.backgroundColor = "black"
    document.querySelector("#line2").style.backgroundColor = "black"
    document.querySelector("#linecross").style.top = "-100%"
    document.querySelector("#nav").style.backgroundColor = "#FEF9F3"
    document.querySelector("#nav").style.color = "black"
    document.querySelector("#nav-part2 #support").style.color = "#FEF9F3"
    document.querySelector("#nav-part2 #support").style.backgroundColor = "black"
    document.querySelector("#nav-part2 button").style.backgroundColor = "#FEF9F3"
    document.querySelector("#nav-part2 button").style.color = "black"
    document.querySelector("#nav-part2 button").style.borderColor =  "black"
    document.querySelector("#nav").style.borderColor =  "black"
     document.querySelector("#line").style.transform = "rotate(0deg)"
     document.querySelector("#line2").style.transform = "rotate(0deg)"



     document.querySelector("#nav-part2 button").addEventListener("mouseenter",function(){
        document.querySelector("#nav-part2 button").style.backgroundColor = "#DF80AC"
    })
    document.querySelector("#nav-part2 button").addEventListener("mouseleave",function(){
        document.querySelector("#nav-part2 button").style.backgroundColor = "transparent"
       
    })

  

    center = 0
    
}
})
var aaa =document.querySelectorAll(".line")
aaa.forEach(function(elem){
 elem.addEventListener("mouseenter",function(){
 elem.childNodes[1].style.opacity = 1

})
elem.addEventListener("mouseleave",function(){
 elem.childNodes[1].style.opacity = 0

})
elem.addEventListener("mousemove",function(dets){
 elem.childNodes[1].style.left = `${dets.x}px`

})
})

const growDiv = document.querySelector('#grow');
const h3 = document.querySelector('#intervel h3');
const image = document.querySelector('#centerleft img');

const values = ['01', '02', '03', '04'];
const imageFiles = ['./LC-98.jpg', './LC-99.jpg', './LC-1.jpg', './LC-103.jpg'];

let currentIndex = 0;
let index = 0;

function update() {
    if (currentIndex === values.length) {
        currentIndex = 0;
    }

  if (index === imageFiles.length) {
      index = 0;
    }
    
    h3.textContent = values[currentIndex];
    currentIndex++;
    
    image.src = imageFiles[index];
    index++;
    
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            width = 0;
        } else {
            width++;
            growDiv.style.width = `${width}%`;
        }
    }, 30);
}

setInterval(update, 3000);
////////////////////////////////////////////////////////////////////////////////////////

const symbols = ['WE ARE AN ANSWERED PRAYER', 'SUPPORT BLACK WOMEN AT WORK', 'RADICAL CHANGE', 'THE DAILY BEAST'];
let count = 0;
const element = document.getElementById("change");
const iteration = () => {
  element.innerHTML = symbols[parseInt(count / 2, 10) % symbols.length];
  if (count % 2 !== 0) {
    element.classList.add("out");
  } else {
    element.classList.remove("out");
  }
  count++;
  // if you're affraid the code could run for so long that it could fail,
  // 6 is enough (number of elems * 2)
  if (count === symbols.length * 2) {
      count = 0;
  }
};
let inthandle = setInterval(iteration, 2800);
iteration();










































