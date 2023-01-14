$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [" Front-end Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Front-end Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
   
});
function sendEmail(){
    let name=document.getElementById("name").value
    let contacts=document.getElementById("contacts").value
    let email=document.getElementById("email").value
    let message=document.getElementById("message").value
    let body="Name :"+name+"<br> Contact :"+contacts+"<br>Email :"+email+"<br>Message :"+message;

Email.send({
Host : "smtp.elasticemail.com",
Username : "alamnasim492@gmail.com",
Password : "1EB8FB929F7DFF5B951C48956611C3E0F7AA",
To : 'alamtaufique492@gmail.com',
From :"alamnasim492@gmail.com" ,
Subject : "New Contact from Enquary",
Body: body,
    }).then((message) => alert("Message sent Sucessfully"));
  }


