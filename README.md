# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)





## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
  As always I started with the mobile layout, then proceeded to desktop and finished with JavaScript.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

The part that was a little bit tricky was to figure out how to do the check list with CSS, the rest in my opinions where things I saw in other challenges so I didn't really get stuck at any moment (fortunatily). 

I'm always traying to use other tags like for exemple here I used the <main> instead of using only <div>.

```html
<main id="main-container">
  <div>
  <img src="/assets/images/illustration-sign-up-mobile.svg" alt="Mobile image" id="mobile-img">
  </div>
  <div class="main-container-text">
    <h1>Stay updated!</h1> 
    <p>Join 60,000+ product managers receiving monthly updates on:</p> 
    
      <div class="check-list"><img src="/assets/images/icon-list.svg" class="list-icon"><p>Product discovery and building what matters</p></div>  
      <div class="check-list"><img src="/assets/images/icon-list.svg" class="list-icon"><p>Measuring to ensure updates are a success</p></div> 
      <div class="check-list"><img src="/assets/images/icon-list.svg" class="list-icon"><p>And much more!</p></div>  
    
    <small>Valid email required</small>
   
    <h2>Email address</h2> 
    
    <input type="text" placeholder="email@company.com"> 
    
    <button class="subscribe-btn">Subscribe to monthly newsletter</button>
  </div>
  <div class="desktop-image">
    <img src="/assets/images/illustration-sign-up-desktop.svg" alt="Desktop image">
  </div>
</main>
```

### Continued development

I think my JavaScript skills are yet too basic so I would really like to get better and write better and more effeciant code !


