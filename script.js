document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
 document.querySelector('.sidebar').classList.toggle('sidebarGo');

   if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.ham').style.display='inline'
    document.querySelector('.cross').style.display='none'
   }
   else{
    document.querySelector('.ham').style.display='none'
    setTimeout(()=>{
    document.querySelector('.cross').style.display='inline'});
   }
})

// if(document.querySelector('.sidebar').classList.containes('sidebarGo')){
//   document.querySelector('.sidebar').style.transform='rotate(360deg)';
// }

//gola//
var gola=gsap.timeline();
gola.from(
  ".name",
  {
    opacity: 0,
    ease: "expo.inout",
     delay: -0.01,
    duration: 1,
  },

)
.from(
  ".mandit",
  {
    width: "10%",
    opacity: 0,
    ease: "expo.inout",
    duration: 1,
    delay: -0.1,
    
  },
  
)

.from(
  ".mandit2",
  {
    width: "10%",
    opacity: 0,
  
    ease: "expo.inout",
    duration: 1,
  },
  
)
.from(
  ".mandit3",
  {
    width: "5%",
    opacity: 0,
    ease: "expo.inout",
    duration: 1,
  },
  
)
.from(
  ".mandit4",
  {
    width: "5%",
    opacity: 0,
    ease: "expo.inout",
    duration: 1,
    
  }, 
)
.from(
  ".buttons",
  {
    width: "0%",
    opacity: 0,
    ease: "expo.inout",
    duration: 1,
    
  }, 
)

document.body.onmousemove = function(e) {
  document.documentElement.style.setProperty (
    '--x', (
      e.clientX+window.scrollX
    )
    + 'px'
  );
  document.documentElement.style.setProperty (
    '--y', (
      e.clientY+window.scrollY
    ) 
    + 'px'
  );
}


// var hii=gsap.timeline();
// gola.from(
//   ".hii",
//   {
//     opacity: 0,
//     ease: "expo.inout",
//      delay: 1,
//     duration: 3,
//   }
// )