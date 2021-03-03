# jsmacs

## The idea

Some of you are going to hate me. But I don't care (okay maybe I do, but I'll get over it, probably).

I'm a fan of emacs, and I'm very sad it has effectively lost the editor wars (I dream of what it would be like if it had the adoption levels of Vim).

I am also a fan of JavaScript. It's ubiquitous and powerful (granted not as powerful as lisp).

So I wonder, can I take inspiration from emacs, and make something like it, but with JavaScript.

_To build something that can be infinitely extensible._

How closely it resembles emacs I don't know yet. It feels very unimaginative to make an emacs clone, and yet emacs does so many things well. So I'll aim to strike a balance.

There are a couple of pretty big wins when it comes to choosing this particular language

- We have a programming environment right in the browser
  - By that extension this could easily reach in an _optional_ cloud space
- npm provides a wealth of resources we are able to tap into
- There is greater possibility for rich visualisations.

## Features

### Buffers

Also core to the way emacs works, buffers are like the windows within an operating system, providing views into the files and various applications that run within emacs.

## The Technicals

This is very much a work in progress and highly subject to change.

### Running

jsmacs will likely run as a client server model, as the front-end, by design, is highly limited. The ideal would have a loosly coupled interface between the backend and frontend, giving the flexibility of jsmacs being able to run in different environments.

### Configuration

I envisage a .jsmacs.d folder in the home directory that holds what is likely to look like a regular node project folder.

### Bundling with Webpack

Lazy loading is a big win here. If we're in a programming environment with many different mode available to us, we don't want to load everything at once, rather we want to load only what we need. To my knowledge Webpack does this best. But my knowledge is pretty limited.
