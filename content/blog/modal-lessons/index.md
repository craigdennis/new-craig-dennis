---
title: What I Learnt Making Modals
date: "2020-12-13T13:00:00.169Z"
description: What I learnt from making a modal. Using Objects and using non-code time to find solutions.
category: blog
---

What’s a modal I hear you ask. In plain speak it’s a box with content that appears, still letting you see the site behind it. The site usually goes into "no focus mode", basically it has a translucent black overlay.

The main use for a modal is to focus a users attention to some important detail or action that is required. 

You will see them commonly used on websites to offer discount codes in exchange for an email address, as an alert to the user or to highlight information that you want to make sure the user will see.

I think out in the wild you tend to see the first type, pop up boxes giving out discount codes or a download of a free ebook or pdf.

## TODO

If you are looking to have a go at coding this project yourself then here's your to-do list. Feel free to share your finished project with me on [twitter](http://www.twitter.com/craig_dennis3).

1. Create buttons
2. Create modal
    1. Create the Modal
    2. Create the overlay
3. Create actions to pop modal

Most of the things that are needed to complete this project we looked at on our [Guess The Number Game](https://www.craigdennis.me/What-I-Learnt-Making-A-Guess-The-Number-Game/). 

## Takeaways

There are two main takeaways from this project. One is the way to think about a problem and the other is the use of objects.

### Thinking about a problem

The tutorial of the project I was working from had three modals, but they all had the same text. As usual, when working on projects I like to add my take, maybe throw a few hidden treats in as well 😉

What I decided to do was make three different modals all with different text. My first approach was to make three different modal sections in my HTML. So the below code, three times.

```html
<div class="modal-box" id="myModal">
      <div class="modal modal-1">
        <span class="close">&times;</span>
        <h2 class="modal-title">Modal Title</h2>
        <p class="modal-text">
          This is my modal life. I am living it good and living it well. Don't
          you want want you modal life to look like me. Modal.
        </p>
        <input class="input" placeholder="Email Address" type="text" />
        <br />
        <button class="submit-btn btn">GIVE IT TO ME!</button>
      </div>
    </div>
```

However this solution was giving me problems with the positioning of the modals. At this point, I took a break from the code. It was time away not thinking about the problem that helped me come with the solution.

With JavaScript allowing me to be dynamic, I thought why don't I insert the data into the HTML instead!

So that is what I did. I had one modal template, got the elements that I needed to change: title and text and inserted the data depending on which button was pressed.

### Data Structure

The next thing that I needed to consider is how I was going to store the data of what was in each modal. Seeing as I wanted to try something new I went for storing it in an object.

```jsx
const modal1 = {
  title: 'Looking to increase your brain?',
  text:
    'Looking for ways to age your brain in the good way? Sign up for my newsletter. We deliver you once a week tips that in 15 minutes add points to your IQ, EQ and your SexyQ. Drop you email below!  ',
};
```

Above is the data for one of the modals.  We declare a constant "modal1" then we have a set of curly braces which contains the data of the object.

From there we have name and value pairs.

The name that we have in each object is "title" and "text". The value is different for each modal.

To access the data I used the dot notation.

```jsx
document.querySelector('.modal-title').textContent = modal1.title;
```

In the example above we are selecting the modal's title element, accessing the text content and assigning it the title data in the modal1 object.

## Summary

Not much new to learn from this project. The main things are objects and how we can store data and access it and spending time away from the code can provide you with the solutions.

You can find the working version [here](https://mini-projectz.netlify.app/modal/). I have added something extra let me know if you find it on [twitter](http://www.twitter.com/craig_dennis3) 😉