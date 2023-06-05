# 25 May 2023 

### Hay I'm [Abdullah Al-Habal](http://abdullah.infinityfreeapp.com/) from Damascus , Syria 

I found this site [30DayJavaScript](https://30dayjavascript.js.org) , that talks about learning js in 30 days,
I will list everything I learned from the site in this Repository , to be accessible to everyone and please send any feedback . 

### from [30DayJavaScript](https://30dayjavascript.js.org) :  In case you need help or wants help others you may join the  [telegram group](https://t.me/ThirtyDaysOfJavaScript ).

### JavaScript is the language of the web
JavaScript is used to add interactivity to websites, to develop mobile apps, desktop applications, games and nowadays JavaScript can be used for machine learning and AI. JavaScript (JS) has increased in popularity in recent years and has been the leading programming language for six consecutive years and is the most used programming language on Github.

### Setup ظأآ 
#### Install Node.js 
download from [Node.js](https://nodejs.org/en) the LTS [ life time support package] 
to check if you already have Node.js installed on your machine , or to check what version of Node we had 
by opening the device terminal [ command prompt] and run this command 
`node --version`  OR  `node -v` 

### Browser ≡اî 
#### Google Chrome 
Install [Google Chrome](https://www.google.com/chrome/) - we don't use the browser console to develop applications but we can write small JS code 

#### Opening Google Chrome Console 
we can open Google chrome console either by clicking three dots at the top right corner of the browser , selecting More tools -> Developer tools 
or using a keyboard shortcut <br>
. mac `Command+Option+j` <br>
.Win/Linux `Ctrl+Shift+J` <br>
the console is the place where our js code goes , The Google Console V8 Engine changes our js code to machine code 

### Writing Code on Browser Console 
to write javascript code , we used a built-in function `console.log()` we passed an argument as input data , and the function displays the output , like the "Hello World" <br>
`console.log("Hello , World!")` <br>
the `console.log()` function can take multiple parameters separated by commas , the syntax looks like as `console.log("param1,param2,param3)` <br>

### The Comments in js 
 
#### Single Line Comment 

` // this is a comment`

#### Multiline  Comment 

``` 
    /**
     this is a comment
    */
```

### Adding Javascript to a Web Page 

#### javascript can be added to a web page in three different ways :

##### [1] . Inline Script 
##### [2] . Internal Script 
##### [3] . External Script , Multiple External Scripts


### Inline Script 
in `index.html` file <br> 
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title> Javascript:Inline Script </title>
  </head>
  <body>
    <button onclick="alert('Learning Js !')">Click Me</button>
  </body>
</html>
``` 
### Internal  Script 
The internal script can be written in the `head` or the `body` , but it is preferred to put it on the body of the `HTML` document 
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript:Internal Script</title>
  </head>
  <body>
    
    <!-- html goes here  -->
    
    <script>
      console.log('Hellow World!')
    </script>
  </body>
</html> 
```

### External  Script 
using external script link on the `head` or the `body` 
the external script file  `script.js` , the html code look like 
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript:Internal Script</title>
  </head>
  <body>
    
    <!-- html goes here  -->
    
    <script src="script.js">    </script> // the javascript link
  </body>
</html> 
```

