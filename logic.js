
//  owlCarousel banner-------------------------------------------------       
$('.owl-carousel.banner_list').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
      responsive:{
          0:{
          items:1
           },
          600:{
            items:1
              },
               1000:{
                items:1
               }
          }
      })
// owl carousel model list--------------------------------------
      $('.owl-carousel.mdl_list').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
      responsive:{
          0:{
          items:1
           },
          600:{
            items:3
              },
               1000:{
                items:4
               }
          }
      })
// owl carousel for blogs---------------------------------
      $('.owl-carousel.blog_list').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
      responsive:{
          0:{
          items:1
           },
          600:{
            items:3
              },
               1000:{
                items:3
               }
          }
      })

// home form start ----------------------
      $('.error_main').hide();
   $(document).ready(function(){
       $('#submit_btn').click(function(){
           
           var name   = $('#username').val();
           var mobile = $('#mobile').val();
           var email  = $('#email').val();
   var password = $('#password').val();
           // alert(name+" "+mobile+" "+email);

           // if(name || mobile || email == ''){
           // 	$('.error_main').show();
           // 	$('.error_msg').text("All Fields are compulsory");
           // }else{
           // 	if(!validateChar(name)){
           // 		$('.error_main').show();
           // 		$('.error_msg').text("username should be Char Only");
           // 	}
           // }


 
           if(name == ''){
               $('.error_main').show();
               $('.error_msg').text("please enter username");
           }else{
               if(mobile == ''){
                   $('.error_main').show();
                   $('.error_msg').text("please enter mobile");
               }else{
                   if(email == ''){
                       $('.error_main').show();
                       $('.error_msg').text("please enter email");
       //   }else{
                   // if(password == ''){
                   // 	$('.error_main').show();
                 //   	$('.error_msg').text("please enter password");
                   }else{
                       if(!validateChar(name)){
                           $('.error_main').show();
                           $('.error_msg').text("please enter Valid username");
                       }else{
                           if(!validateNum(mobile)){
                               $('.error_main').show();
                               $('.error_msg').text("Mobile should be number only");
                           }else{
                               if(mobile.length<10){
                                   $('.error_main').show();
                                   $('.error_msg').text("Mobile should be 10 digit");
                               }else{
                                   if(!validateEmail(email)){
                                       $('.error_main').show();
                                       $('.error_msg').text("please enter Valid email");
               //   }else{
                                   // if(!validatePass(password)){
                                   // 	$('.error_main').show();
                               // 		$('.error_msg').text("please enter Valid password");
                                   }else{
                                       $('.error_main').show();
                                       $('.error_msg').text("Succesfully Send").css("color","green");
                                       // $('#frmreg')[0].reset();
                                       
                                       setTimeout(function(){
                                           $('.error_main').hide();
                                           $('#frmreg').submit();
                                       }, 2000);
                                   }
                               }
                           }
                       }
                   }
               }
           }
 
       });
       $('.cancel p').click(function(){
           $('.error_main').hide();
       });


       // Only letters
       function validateChar(input) {
           var regex = /^[A-Za-z]+$/;
           //input ==> JOHN
           if(input.match(regex)){
               return true;
           }else{
               return false;
           }
       }
       //Only Number
       function validateNum(input){
           var regex = /^[0-9]*$/;
           if(input.match(regex)){
               return true;
           }else{
               return false;
           }
       }
       // Email
       function validateEmail(input) {
           var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           if(input.match(regex)){
               return true;
           }else{
               return false;
           }
       }
       // Password Aa@1 length 8-16
       function validatePass(input) {
           var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
           if(input.match(regex)){
               return true;
           }else{
               return false;
           }
       }
   });
// home form ends-----------------------

// Paginga pagination jq---------------------------
$(".paginate").paginga({
 itemsPerPage : 3,
// use default options
});
// // Open the Modal
// function openModal() {
// document.getElementById("myModal").style.display = "block";
// }

// // Close the Modal
// function closeModal() {
// document.getElementById("myModal").style.display = "none";
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
// showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
// showSlides(slideIndex = n);
// }

// function showSlides(n) {
// var i;
// var slides = document.getElementsByClassName("mySlides");
// var dots = document.getElementsByClassName("demo");
// var captionText = document.getElementById("caption");
// if (n > slides.length) {slideIndex = 1}
// if (n < 1) {slideIndex = slides.length}
// for (i = 0; i < slides.length; i++) {
// slides[i].style.display = "none";
// }
// for (i = 0; i < dots.length; i++) {
// dots[i].className = dots[i].className.replace(" active", "");
// }
// slides[slideIndex-1].style.display = "block";
// dots[slideIndex-1].className += " active";
// captionText.innerHTML = dots[slideIndex-1].alt;
// }


// // gallery lightbox
//       // selecting all required elements
//       const gallery = document.querySelectorAll(".gallery .image"),
//       previewBox = document.querySelector(".preview-box"),
//       previewImg = previewBox.querySelector("img"),
//       closeIcon = previewBox.querySelector(".icon"),
//       currentImg = previewBox.querySelector(".current-img"),
//       totalImg = previewBox.querySelector(".total-img"),
//       shadow = document.querySelector(".shadow");
      
      
//       window.onload = ()=>{//once window loaded}
//           for (let i=0; i<gallery.length; i++){
//               totalImg.textContent = gallery.length; // passing gallery images length to totalImg
//               let newIndex = i; //passing i value to newIndex variable
//               let clickImgIndex;
//               gallery[i].onclick = ()=>{
//                   clickImgIndex = newIndex; //passing clicked img index to clickImgIndex Variable
//                   console.log(i);
//                   function preview(){
//                       currentImg.textContent = newIndex + 1; //passing newIndex value to currentImg by adding +1
//                       let selectedImgUrl = gallery[newIndex].querySelector("img").src; //getting user clicked image url
//                       previewImg.src = selectedImgUrl; //passing user clicked img url to previewImg source
                      
//                   }
      
//                   //let's work on previous and next button
//                   const prevBtn = document.querySelector(".prev");
//                   const nextBtn = document.querySelector(".next");
//                   if(newIndex == 0){
//                       prevBtn.style.display = "none";
//                   }
      
//                   if(newIndex >= gallery.length - 1){
//                       nextBtn.style.display = "none";
//                   }
//                   prevBtn.onclick = ()=>{
//                       newIndex--; //decrement newIndexValue
//                       if(newIndex == 0){
//                           preview();
//                           prevBtn.style.display = "none";
//                       }
//                       else{
//                           preview(); //calling again above function to update image
//                           nextBtn.style.display = "block";
//                       }
//                   }
      
//                   nextBtn.onclick = ()=>{
//                       newIndex++; //increament newIndexValue
//                       if(newIndex >= gallery.length - 1){
//                           preview();
//                           nextBtn.style.display = "none";
//                       }
//                       else{
//                           preview(); //calling again above function to update image
//                           prevBtn.style.display = "block";
//                       }
//                   }
      
      
      
      
      
//                   preview(); //calling above function
//                   previewBox.classList.add("show");
//                   shadow.style.display = "block";
//                   document.querySelector("body").style.overflow = "hidden";
      
//                   closeIcon.onclick = ()=>{
//                       newIndex = clickImgIndex; //passing clicked img index to clickImgIndex Variable
//                       prevBtn.style.display = "block";
//                       nextBtn.style.display = "block";
//                       previewBox.classList.remove("show");
//                       shadow.style.display = "none";
//                       document.querySelector("body").style.overflow = "auto";
//                   }
//               }
//           }
//       }

    //   gallery lightbox ends