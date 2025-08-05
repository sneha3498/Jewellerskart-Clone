const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


const left_animate = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
})

const setup = document.querySelectorAll(".width-text,.arrow");
setup.forEach((e1) => left_animate.observe(e1));


const about_us = document.querySelectorAll(".about-us");
about_us.forEach((e1) => left_animate.observe(e1));

const custo12 = document.querySelectorAll(".custo1,custo12");
custo12.forEach((e1) => left_animate.observe(e1));

const empower_text = document.querySelectorAll(".Empower-text");
empower_text.forEach((e1) => left_animate.observe(e1));


const right_animate = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('video1');
        }
        else {
            entry.target.classList.remove('video1');
        }
    })
})

const video = document.querySelectorAll(".video");
video.forEach((e1) => right_animate.observe(e1));

const custo3 = document.querySelectorAll(".custo3");
custo3.forEach((e1) => right_animate.observe(e1));




const bottom_animate = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('custo_order_secs');
        }
        else {
            entry.target.classList.remove('custo_order_secs');
        }
    })
})

const custo_order = document.querySelectorAll(".custo-order");
custo_order.forEach((e1) => bottom_animate.observe(e1));

const empower_img = document.querySelectorAll(".Empower-img");
empower_img.forEach((e1) => bottom_animate.observe(e1));



function customize() {
    const num = Math.floor(Math.random() * 4) + 1;
    if (num == 1) {
        click1();
    }
    else if (num === 2) {
        click2();
    }

    else if (num === 3) {
        click3();
    }
    else {
        click4();
    }
    setTimeout(customize, 4000);

}

customize();

function click1() {
    var col1 = document.querySelector(".custo2 .p1");
    var col2 = document.querySelector(".custo2 .p2");
    var col3 = document.querySelector(".custo2 .p3");
    var col4 = document.querySelector(".custo2 .p4");

    col2.style.backgroundColor = "gray";
    col2.style.color = "black";
    col3.style.backgroundColor = "gray";
    col3.style.color = "black";
    col4.style.backgroundColor = "gray";
    col4.style.color = "black";

    col1.style.backgroundColor = "blue";
    col1.style.color = "white";
    document.querySelector(".custo1 img").setAttribute("src", "images/custo-img1.jpg");
    document.querySelector(".custo3 h1").innerHTML = "Upload Your Design";
    document.querySelector(".custo3 p").innerHTML = "<p>To build a customized Jewelry piece, upload the design along with the extact specifications asked. After filling in all the details move on to the next step. </p>";

}

function click2() {
    var col1 = document.querySelector(".custo2 .p1");
    var col2 = document.querySelector(".custo2 .p2");
    var col3 = document.querySelector(".custo2 .p3");
    var col4 = document.querySelector(".custo2 .p4");

    col1.style.backgroundColor = "gray";
    col1.style.color = "black";
    col3.style.backgroundColor = "gray";
    col3.style.color = "black";
    col4.style.backgroundColor = "gray";
    col4.style.color = "black";

    col2.style.backgroundColor = "blue";
    col2.style.color = "white";
    document.querySelector(".custo1 img").setAttribute("src", "images/custo-img2.jpg");
    document.querySelector(".custo3 h1").innerHTML = "Customised Jewellery";
    document.querySelector(".custo3 p").innerHTML = "<p>After getting all the details from you, we will prepare the digital format of your Jewelry piece for you to view and verify the specifications provided by you. You will be shared with the estimated cost of your Jewellery piece at this point.</p>";

}

function click3() {
    var col1 = document.querySelector(".custo2 .p1");
    var col2 = document.querySelector(".custo2 .p2");
    var col3 = document.querySelector(".custo2 .p3");
    var col4 = document.querySelector(".custo2 .p4");

    col1.style.backgroundColor = "gray";
    col1.style.color = "black";
    col2.style.backgroundColor = "gray";
    col2.style.color = "black";
    col4.style.backgroundColor = "gray";
    col4.style.color = "black";

    col3.style.backgroundColor = "blue";
    col3.style.color = "white";
    document.querySelector(".custo1 img").setAttribute("src", "images/custo-img3.jpg");
    document.querySelector(".custo3 h1").innerHTML = "Design & manufacture";
    document.querySelector(".custo3 p").innerHTML = "<p>Once wew get all the confirmations from you regarding the design and specifications. We will wait for the token amount to be received. Once the token amount is received, we will start the Jewelry Making process.</p>";

}


function click4() {
    var col1 = document.querySelector(".custo2 .p1");
    var col2 = document.querySelector(".custo2 .p2");
    var col3 = document.querySelector(".custo2 .p3");
    var col4 = document.querySelector(".custo2 .p4");

    col1.style.backgroundColor = "gray";
    col1.style.color = "black";
    col2.style.backgroundColor = "gray";
    col2.style.color = "black";
    col3.style.backgroundColor = "gray";
    col3.style.color = "black";
    col4.style.backgroundColor = "blue";
    col4.style.color = "white";
    document.querySelector(".custo1 img").setAttribute("src", "images/custo-img4.jpg");
    document.querySelector(".custo3 h1").innerHTML = "Get It Delivered";
    document.querySelector(".custo3 p").innerHTML = "<p>Once your Jewellry is fully ready, we will be waiting for any type of outstanding. After checking and performing the QCs, we will get Your Jewellery piece delivered to your desired address.</p>";

}










function testimonials() {
    const num = Math.floor(Math.random() * 3) + 1;

    if (num === 1) {
        document.querySelector(".our-testimonials-para p").innerHTML = "<p>I Partnered with the Jewellerskart team for a social media management proposal a month bac.</p>";
        document.querySelector(".our-testimonials-para .pt-3").innerHTML = "<p>-Meet Parmar</p>";
        document.querySelector(".testimonials-img img").setAttribute("src", "images/our-testimonials1.png");

    }
    else if (num === 2) {
        document.querySelector(".our-testimonials-para p").innerHTML = "<p>Jewellerkart has come out with a unique idea of introducing a website to the Jewellery re.</p>";
        document.querySelector(".our-testimonials-para .pt-3").innerHTML = "<p>-Viki Jewellery</p>";
        document.querySelector(".testimonials-img img").setAttribute("src", "images/our-testimonials2.png");
    }
    else {
        document.querySelector(".our-testimonials-para p").innerHTML = "<p>I wanted a customized website for my jewellery shop. I was in a long search of someone tha.</p>";
        document.querySelector(".our-testimonials-para .pt-3").innerHTML = "<p>-Khusboo Kumari</p>";
        document.querySelector(".testimonials-img img").setAttribute("src", "images/our-testimonials3.png");
    }
    setTimeout(testimonials, 2000);

}

testimonials();



