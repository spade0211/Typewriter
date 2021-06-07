# Typewriter
A small typewritten introduction to the great me
Ok this was an interesting concept that caught my eye and wanted to implement it somehow, so kind of made this.

```
To view the website, visit the page:
https://spade0211.github.io/Typewritter/
```

# The Concept
The main thing to do is to cover the text with `::after` and then reduce its size so that the letters *appear*
while the `::before` acts as the cursor which starts moving left as the size of `::after` reduces to feel like 
the content is being typed out.

A simple html file:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p class="text">Typewritter</p>
</body>
</html>
```

And its linked style.css file:
```css
.text {
    position: relative;
    display: inline-block;
        }
#text::after {
            content: '';
            display: inline-block;
            height: 100%;
            width: 100%;
            background-color: white;
            position: absolute;
            right: 0;
            animation: mask-forward steps(11) forwards 2s;
        }
#text::before {
            content: '';
            display: inline-block;
            height: 100%;
            width: 2px;
            background-color: black;
            position: absolute;
            left: -2px;
            animation: cursor-forward steps(11) forwards 2s;
        }
@keyframes mask-forward {
    to {
        width: 0;
    }
}
@keyframes cursor-forward {
    to {
        left: calc(22% - 2px);
    }
}
 ```

By giving the `::after` an height and width of 100% along with `position absolute` and `display: inline-block`
(keep in mind the parent element is given `position: relative`), 
the pseudo element covers the whole text.
Now the animation will run causing the text to slowly appear. The ~~ease~~ `steps(n)` helps in this _breaky_ animation

The `::before` is used for the cursor, which is given a similar animation to the `::after` to make it seem like the letters are being typed from the cursor.
