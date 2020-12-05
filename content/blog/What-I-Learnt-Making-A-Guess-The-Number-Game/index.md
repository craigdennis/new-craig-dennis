---
title: What I Learnt Making A Guess The Number Game
date: "2020-11-28T22:40:32.169Z"
description: This is what I learnt making a guess the number game. This includes Event Listeners, QuerySelectors and more.
category: blog
---

I have taken a new approach to my learning. I have stopped with the coding along to courses and started to take action in my own learning. 

Most courses that I’ve seen teach you by projects. The problem comes when you don't engage and just copy code. This does not cement what you are doing into your brain. 

My approach is to take the project and code it myself. If I come across something that I'm struggling then I will use a developer's best friend. Google.

Once I have a working version of the project I then go back and watch the video on 3x speed to see any differences.

The first project that I have worked on is a guess the number game. A number is randomly selected to guess and it is your job to guess it right.

## Things learnt

These are some of the things that I learnt:

- Element selector
- Random number
- Event listeners
- Get value from user input

## TODO

If you are looking to have a go at coding this project yourself then here's your to do list. Feel free to share your finished project with me on [twitter](http://www.twitter.com/craig_dennis3).

1. Create UI in HTML and CSS
2. Create all the element selectors
3. Create random number 
4. Capture users input
5. Create game logic which includes win condition and help for guessing
6. Implement scoring
7. Implement high score 
8. Dealing with the user reaching 0 in their score

## Learnings

### Element Selector

Element selectors are required learning for when you are looking to manipulate things on your website. The two ways that I have used them in this project are querySelector and getElementByID.

### Query Selector

QuerySelector allows you to select an element by a class that is assigned to the element. Let's look at an example from the project. When the users wins the game, the number you have been trying to guess gets revealed.

For us to achieve that, we have to select the element so we change the content. Below is the HTML of the element, with the class "number-to-guess".

```html
<p class='number-to-guess'>?</p>
```

 

With the knowledge of which class is assigned to this element, we can select the correct element by passing it into the querySelector method as a string. Below is a snippet of the code used. In this instance, we are creating a constant called "numberToGuessLabel" and assigning the element to it. 

```jsx
const numberToGuessLabel = document.querySelector('.number-to-guess');
```

### GetElementByID

Another way we can select an element is by the getElementByID. This works in the same way as the querySelector but instead of selecting by the class, we select by the ID.

In this project, there are times when we have used the getElementByID. One of these instances is for where we display the score. 

```html
<p>Score: <span id='score-label'>0</span></p>
```

We have created a constant "scoreLabel" and added the method getElementByID. It works in the same way as querySelector, where the parameter that you pass in is the string of the ID that is in the element.

```jsx
const scoreLabel = document.getElementById('score-label');
```

QuerySelector and getElementByID are both important for you to know and understand as it is one of the key ways to interact with the HTML document.

## Getting value from the input

Getting input from your users is a valuable thing if you want a website that a user can interact with. In this project, we need to get the input from the user so we can see if the user has guessed correctly or if we need to give them a tip of guessing higher or lower.

The code below is how we achieved this by selecting the input by the class that is assigned to it by using querySelector then adding the .value at the end which grabs whatever value is in the input.

```jsx
const guessedNumber = document.querySelector('.guess-input').value;
```

## Random Number

The project would not be a fun game if the number you had to guess was the same every time. To make it random we need to add some code to do so. There can be many ways to achieve this but on this occasion, I went for the below code.

All you need to do is replace max with the highest number that you want to find a number between and replace the min with the lowest number that you want to find a number between.

For this project, max was 20 and min was 1.

```jsx
Math.floor(Math.random() * (max - min) ) + min;
```

Then it was a case of adding some logic via an IF statement to check if the user's input was the same as the randomly selected number.

## Event Listeners

Event listeners are another important part of an interactive website. These allow your user to create action.

In this project, we have two actions that we would like the user to do. One is to check if the number they have guessed is correct and the other is to reset the game to play again.

Adding an event listener can look like the below.

You select the element that the user interacts with to trigger the action. You then add an event listener and select which event that you are listening for. On this occasion, we are listening to a click on our button. Then you add the function which will execute the action that you have coded.

There more events that you can listen for. You can find a full list over on the [MDN documents](https://developer.mozilla.org/en-US/docs/Web/Events). 

```jsx
document.querySelector('button').addEventListener('click', function(){
//do things in here

});
```

You can write the function as above or you can pass the reference to the function that you want to execute which we have done in the example below. This allows you to separate the function out of the addEventListener method.

```jsx
checkBtn.addEventListener('click', checkGuess);
```

Put that all together and you have yourself a guess the number game. You can find the full working game [here](https://mini-projectz.netlify.app/guess-my-number/index.html).

If you want to keep up to date with more things that I am learning, helpful tips and motivational messages follow me on [twitter](http://www.twitter.com/craig_dennis3).