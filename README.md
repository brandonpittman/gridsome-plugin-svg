# gridsome-plugin-svg

Everytime I start a new [Gridsome](https://gridsome.org) project, I have to go and set up SVG inlining. It's annoying having to do it over and over, so like my [Tailwind CSS](https://github.com/brandonpittman/gridsome-plugin-tailwindcss) plugin, I created something to make adding SVGs to my projects easier. 

## Usage

Install the package with `npm install -D gridsome-plugin-svg`. Then, in `gridsome.config.js`, add the following:

```javascript
plugins: [
  {
    use: 'gridsome-plugin-svg',
    options: {
    // default options below
    goesBothWays: false,
    svgo: [
      {
        removeTitle: false
      },
      {
        prefixIds: {
          prefix: (_, {path}) => basename(path, '.svg'),
          delim: '-',
        },
      },
      {
        removeDesc: false
      },
      {
        removeViewBox: false,
      },
      {
        sortAttrs: true,
      }
      ],
    }
  }
]
```

## Options

You can use any plugin from [SVGO](https://github.com/svg/svgo#what-it-can-do). I've included some defaults that take accessibility into account. There is also an option titled `goesBothWays`. If set to true, you can add `?inline` to the end of the import to use as a standard Vue component and imports without `?inline` tacked on will instead return the path to the SVG, making it usable for external `img` sources as well. It lends some extra flexibility, but is a little unintuitive, so it's off by default. I personally like this approach, and may possibly change the default to this in the future.

```javascript
import Foo as '@/assets/svg/foo.svg?inline' // will be inlined
import Bar as '@/assets/svg/bar.svg' // will return path to SVG
```
