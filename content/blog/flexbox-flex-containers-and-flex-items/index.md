---
title: Flexbox: Flex Containers and Flex Items
date: "2020-09-7T22:40:32.169Z"
description: Learn about flex containers and flex items to increase your flexbox knowledge.
---


*Photo by [chuttersnap](https://unsplash.com/@chuttersnap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/wardrobe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

Flexbox has been a godsend to me. It upped my CSS game and allowed me greater control over positioning things on the websites.

The first thing that you need to understand to start using flexbox is what flex containers and flex items are.

Understanding these is the foundation of using flexbox.

To help picture how containers and items work think of it like this.

If we take a room in your house.

In the room we place different types of furniture; we have a chest of drawers, a sideboard and a wardrobe.

And in these pieces of furniture, we have different items; in one we have pants and sock, another we have all our clothes and the other we have midnight snacks.

The furniture, we can place in different parts of the room. And in the furniture, the items are arranged in the manner of which we have placed them in there.

This is similar to how flexbox works on a webpage.

The room in this example is the webpage. The furniture are the different components that make up the webpage; such as the navbar, a gallery or a features section.

And the objects in the furniture are the items that make up the components.

So a navbar could be made up with a company logo and an unordered list with links.

A gallery could be made up of 5 images.

And a features section could be made up of different cards and within them could be a header text and body text.

Taking this thinking and applying it into the flexbox world, knowing how flex containers and flex items behave with each other will help you understand flexbox.

It is all about upstanding what set of items do you want to have control of, to arrange, and taking them and putting them into a container so you have the power of flexbox to hand.

Let's take the navbar example to put this into context. This is the result that we are aiming for. A navbar with a logo on the left and links on the right for navigation.

![https://cdn.hashnode.com/res/hashnode/image/upload/v1599394868642/GjXfoHzPH.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1599394868642/GjXfoHzPH.png)

In this example, the room is the webpage. The furniture that we are putting in this room is the navbar (which will be what we are using for our container). And the items are the logo and the nav links.

We want to control the positioning on the logo and the nav links (the items) within the navbar (the container).

To simply do this we turn the navbar into a flexbox container by applying display: flex in this CSS of the navbar.

```
nav {
  display: flex;
}

```

This then gives us the power to apply the different properties of flexbox on the flex-container to arrange the items within the container.

In the navbar example, we have applied the align-items property to align the items within the navbar to centre and the justify-content property to apply space between the items.

We have added some other CSS style to make it look prettier and we have even created another flex-container on the unordered list so the list items are under the control of flexbox as well.

```
nav {
  background-color: #2a2a2a;
  color: white;
  display: flex;
  font-size: 1.5em; 
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
}

ul {
  list-style: none;
  display: flex;
}

li {
  margin-left: 1em;
}

```

I hope this introduction to flex-container and flex-items helps with your outstanding with using flexbox.

I have recently released a FREE book on flexbox called Flexbox Answered: answers to the most common flexbox questions which can help answer some more question on flexbox that you might have.

You can download a copy free on my website [www.craigdennis.me](http://www.craigdennis.me/)

Full Code

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css">
    <title>Navbar</title>
  </head>
  <body>
    <nav>
        <div>MY LOGO</div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  </body>
</html>

```

```
nav {
  background-color: #2a2a2a;
  color: white;
  display: flex;
  font-size: 1.5em; 
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
}

ul {
  list-style: none;
  display: flex;
}

li {
  margin-left: 1em;
}

```