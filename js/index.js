const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav
const navItems = document.querySelectorAll('a');
navItems[0].innerHTML = siteContent['nav']['nav-item-1'];
navItems[1].innerHTML = siteContent['nav']['nav-item-2'];
navItems[2].innerHTML = siteContent['nav']['nav-item-3'];
navItems[3].innerHTML = siteContent['nav']['nav-item-4'];
navItems[4].innerHTML = siteContent['nav']['nav-item-5'];
navItems[5].innerHTML = siteContent['nav']['nav-item-6'];

//Change nav items to green
navItems.forEach(e => e.style.color = 'green');



const nav = document.querySelector('nav');

// prepend
const frontTag = document.createElement('a');
frontTag.innerHTML = 'prepend';
frontTag.href = '#';
nav.prepend(frontTag);

// AppendChild
const backTag = document.createElement('a');
backTag.innerHTML = 'append';
backTag.href = '#';
nav.appendChild(backTag);




//cta h1
const headerOne = document.querySelector('h1');
headerOne.innerHTML = siteContent['cta']['h1'];


// btn
const ctaBtn = document.querySelector('button');
ctaBtn.innerHTML = siteContent['cta']['button'];

//cta Img
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//  Main Content Headers
const ftHeadings = document.getElementsByTagName('h4');
ftHeadings[0].innerHTML = siteContent['main-content']['features-h4'];
ftHeadings[1].innerHTML = siteContent['main-content']['about-h4'];
ftHeadings[2].innerHTML = siteContent['main-content']['services-h4'];
ftHeadings[3].innerHTML = siteContent['main-content']['product-h4'];
ftHeadings[4].innerHTML = siteContent['main-content']['vision-h4'];

// Middle Img
const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Ft content
const featContent = document.getElementsByTagName('p');
featContent[0].innerHTML = siteContent['main-content']['features-content'];
featContent[1].innerHTML = siteContent['main-content']['about-content'];
featContent[2].innerHTML = siteContent['main-content']['services-content'];
featContent[3].innerHTML = siteContent['main-content']['product-content'];
featContent[4].innerHTML = siteContent['main-content']['vision-content'];

//Contact and footer
featContent[5].innerHTML = siteContent['contact']['address'];
featContent[6].innerHTML = siteContent['contact']['phone'];
featContent[7].innerHTML = siteContent['contact']['email'];
featContent[8].innerHTML = siteContent['footer']['copyright'];

//Contact 
const contactHeading = document.getElementsByTagName('h4');
contactHeading[5].innerHTML = siteContent['contact']['contact-h4'];