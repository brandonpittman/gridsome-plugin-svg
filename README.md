---
title: README
date: 2019-09-23
tags: [ 'svg', 'gridsome' ]
---

# gridsome-plugin-svg

Everytime I start a new [Gridsome](https://gridsome.org), I have to go and set up SVG inlining. It's annoying having to do it over and over, so like my [Tailwind CSS](https://github.com/brandonpittman/gridsome-plugin-tailwindcss), I created a simple plugin to add it to my projects. Right now, it's super simple, without any options, but that'll surely evolve as time goes on.

## Usage

Install the package with `npm install -D gridsome-plugin-svg`. Then, in `gridsome.config.js`, add the following:

```javascript
plugins: [
  {
    use: 'gridsome-plugin-svg',
    options: {
      // coming soon
    }
  }
]
```
