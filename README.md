# jsmacs

## The big picture

Some of you are going to hate me. But I don't care (okay maybe I do, but I'll get over it, probably).

I'm a fan of emacs, and I'm very sad it has effectively lost the editor wars (I dream of what it would be like if it had the adoption levels of Vim).

I am also a fan of JavaScript. It's ubiquitous and powerful (though granted, not as powerful as lisp).

So I wonder, can I take inspiration from emacs, and make something like it, with JavaScript.

_To build something that can be infinitely extensible._

How closely it resembles emacs I don't know yet. It feels very unimaginative to make an emacs clone, and yet emacs does so many things well. So aim is to strike a balance.

There are a few wins when it comes to choosing this particular language and technology:

- We have a programming environment right in the browser
  - By that extension this could easily reach in an _optional_ cloud space
- npm provides a wealth of resources we are able to tap into
- There is greater possibility for rich visualisations.
- Styling has its own domain language, allowing for greater separation of concerns
- There are a multitude of cross compilation options, allow this to be programmed in many different possible languages

## Aims

- A hackackable JavaScript environment
- Improvements over emacs in terms of interactions and useability

## Features

- _Buffers_ - these are the entities that contain files and other running "programs".
- _Windows_ - the views into those buffers.

## The Technicals

This is very much a work in progress and highly subject to change.

My philosophy will be to keep dependencies to a bare minimum necessary.

### High level overview

- A module is registered/installed by placing it in a `modules` folder (and perhaps adding it to a yaml/js file)
- Each module will have its own store that is dynamically attached to jsmacs.
- They will be responsible for spawning buffers.
- The module will be responsible for keeping track of the data within its buffers.

### Running

jsmacs will run as a client server model, as the front-end of any web page is, by design, highly limited. The ideal would have a loosly coupled interface between the backend and frontend, giving the flexibility of jsmacs being able to run in different environments.

### Configuration

I envisage a .jsmacs.d folder in the home directory that holds what is likely to look like a regular node project folder.

A section could be dedicated to the theming of the front-end.

## Technologies used

### Preact

Initially I wanted to use VanillaJS, but I soon realised I'm not half as clever as I need to be to pull that off. So I can only apologise if in the unlikely scenario this project takes off and people with slower machines (maybe even faster machines) find their ram and cpu usage spiking.

Preact is a good comprimise, though it isn't backed by a corporation I believe it has stood the test of time, and offers a siginificant performance boost.

### Redux

Redux offers quite a few opportunities down the line for debugging and time-travel.

### Webpack

Lazy loading is a big win here. If we're in a programming environment with many different mode available to us, we don't want to load everything at once, rather we want to load only what we need. To my knowledge Webpack does this best. But my knowledge is pretty limited.
