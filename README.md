# Typewriter
A small typewritting introduction to the great me

Ok this was an interesting concept that caught my eye and wanted to implement it somehow, so kind of made this.

To view the website, visit the page:
https://spade0211.github.io/Typewritter/

# The Concept
The main thing to do is to cover the text with `::after` and then reduce its size so that the letters *appear*
while the `::before` acts as the cursor which starts moving left as the size of `::after` reduces to feel like 
the content is being typed out.

A simple html file:
```
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
```
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
 ```
