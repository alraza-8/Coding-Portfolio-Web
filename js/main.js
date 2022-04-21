let sendEmail = document.querySelector(".send");
sendEmail.addEventListener("click",(e)=>{
    e.preventDefault()
    let nameValue = document.querySelector(".name");
    let emailValue = document.querySelector(".email");
    let messageValue = document.querySelector(".message");
    let subjec = document.querySelector(".subject");
    let body = `name : ${nameValue.value} </br> email: ${emailValue.value} </br> 
    message : ${messageValue.value}`
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "hassanraza1309@gmail.com",
        // Password : "",
        To : 'hassanraza1309@gmail.com',
        From : emailValue.value,
        Subject : subjec.value,
        Body :body,
    }).then(
      message => alert(message)
    );
})


let type =new Typed(".skills-name",{
    strings:["web developer.","grphic designer.","search engine optimizer."],
    typeSpeed:100,
    backSpeed:100,
    loop:true,

})

//skill progress //

let skillbox = document.querySelector(".skills")
let progressBar = document.querySelectorAll(".progress-bar");
let skillPersont= document.querySelectorAll(".skill-persont");
function skillShow(){
    setTimeout(()=>{
        progressBar.forEach((item,index)=>{
            let progressData = item.dataset.progress;
            // console.log(progressData)
            item.style.width=progressData+"%"; 
            skillPersont[index].style.opacity=1;
            skillPersont[index].innerHTML=progressData;
        })
    },100)
}

function skillhide(){
    progressBar.forEach((hideitmes,index)=>{
        hideitmes.style.width=0; 
        skillPersont[index].style.opacity=0;
    })
}
window.addEventListener("scroll",()=>{
    let skillBoundry = skillbox.getBoundingClientRect().bottom;
    let windowHeight = window.innerHeight;
    if(skillBoundry<windowHeight){
        skillShow()
    }else{
    
        skillhide()
    }
})

// image porfolio object//
let img = {
    data:[
        {img :"asset/porfolio gallery/1.jpg",
        cat:"website" },
        {img :"asset/porfolio gallery/2.jpg",
        cat:"website" },
        {img :"asset/porfolio gallery/3.jpg",
        cat:"graphic" },
        {img :"asset/porfolio gallery/4.jpg",
        cat:"seo" },
        {img :"asset/porfolio gallery/5.jpg",
        cat:"graphic" },
        {img :"asset/porfolio gallery/6.jpg",
        cat:"app" },
        {img :"asset/porfolio gallery/7.jpg",
        cat:"website" },
        {img :"asset/porfolio gallery/8.jpg",
        cat:"app" },
        {img :"asset/porfolio gallery/9.jpg",
        cat:"graphic" },
        {img :"asset/porfolio gallery/10.png",
        cat:"seo" },
        {img :"asset/porfolio gallery/11.jpg",
        cat:"graphic" },
        {img :"asset/porfolio gallery/12.jpg",
        cat:"app" },
    ]
}
let imageTag = document.querySelectorAll(".porfolio-img");
let getLen = img.data.length;
imageTag.forEach((imga,ind)=>{
    imga.classList.add("hide");
    let clases = img.data[ind].cat;
    imga.classList.add("hide",img.data[ind].cat);
    console.log(imga);
    // console.log(clases);
})
console.log(img.data[0]);
// image porfolio function()----///
function porfolioDAta(){
    for(i of img.data){
        // let a = document.createElement("a");
        // a.setAttribute("src",i.img);
        // console.log(a);
    //    let imageTag = document.createElement("img");
    // let imageTag = document.querySelectorAll(".porfolio-img");
    // imageTag.classList.add(i.cat,"hide");
    //    let porfolioimageContainer = document.querySelector(".porfolio-picture");
    //    imageTag.setAttribute("src",i.img,);
    //    imageTag.classList.add("porfolio-img",i.cat,"hide");

    //    a.appendChild(imageTag)
    //    console.log(imageTag)
    //    porfolioimageContainer.appendChild(a);
    }
}
porfolioDAta();
// ------------ light gallery------------//

//// filter ///
function filterClick(value,index){
    let filterBtn = document.querySelectorAll(".filter-btn");
    let images = document.querySelectorAll(".porfolio-img");
    filterBtn.forEach((btn)=>{
        if(btn.innerText.toUpperCase()==value.toUpperCase()){
            btn.classList.add("btn-active")
        }else{
            btn.classList.remove("btn-active");
        }
    })
    images.forEach((imge,ind)=>{
        if(value=="all"){
            images[ind].classList.remove("hide");
            console.log(value)
        }else{
            if(images[ind].classList.contains(value)){
                images[ind].classList.remove("hide");
                console.log(value)
            }else{
                images[ind].classList.add("hide");
                // console.log(value)
            }
        }
    })
}

window.addEventListener("load",()=>{
    filterClick("all");
})

// var swiper = new Swiper(".testi-silider-container", {
//     pagination: {
//       el: ".swiper-pagination",
//       dynamicBullets: true,
//     },
//   });
var swiper = new Swiper(".testimonial", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".blog-silide", {
    slidesPerView: 3,
    spaceBetween: 30,
    // loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   scroll/
window.addEventListener("scroll",()=>{
    let scrollBox = document.querySelector(".scroll");
    if(document.body.scrollTop>30||document.documentElement.scrollTop>30){
        scrollBox.style.display="block";
        scrollBox.addEventListener("click",()=>{
            window.scrollTo({
                top:"0",
                behavior:"smooth", 
            })
        })
    }else{
        scrollBox.style.display="none";
    }
})

// navbar 

let toggle = document.querySelector(".nav-toggle");
toggle.addEventListener("click",()=>{
    console.log("l")
    let toggleMeny = document.querySelector(".toggle");
    // console.log(toggleMeny);
    toggleMeny.classList.toggle("toggle-active");
    let ul = document.querySelector(".ul");
    console.log(ul);
    ul.classList.toggle("ul-active")
})