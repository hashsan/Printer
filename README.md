# Printer
tiny message print

https://codepen.io/pinkromeo/pen/zYewxrm
```js
import {Printer} from "https://hashsan.github.io/Printer/Printer.js"

var print = Printer(document.body)
print('xyz')

```

## and frame labo
```css
@import url(https://hashsan.github.io/fujiyama/fujiyama.css);
:root{
  --background-2:url(https://i.pinimg.com/564x/4d/bf/9d/4dbf9d248de2a2e27d74a49eba77d253.jpg);  
}

/*
FujiyamaEditor
*/
#cept{
  position:fixed;
  top:10vh;
  right:1rem;
  box-sizing:border-box;
  border:2px solid whitesmoke;
  border-radius:0.25rem;
}
.body{
  min-height:50vh;
  height:50vh;
  max-height:50vh;
  overflow-y:scroll;
  background:#f5f5f599;  
  
}

[contenteditable]{
  padding-left:1rem;
  overflow-y:unset;
}
.long{
  height:200vh;
}

.header,.footer{
  padding-left:0.5rem;
  color:#555;
  background:#efefef;  
}

.footer{
  position:absolute;
  bottom:0;
  right:0.5rem;
  transition:color 2s ease-in;
}
.header .file{
  background:unset;
  border:unset;
  font-family:inherit;
  font-weight:inherit;
  outline:none;
}



body{
  overflow-y:scroll;
}

```
```js
function make(prefix){
  const _prefix =prefix.replace('#','')
  const temp=`
<div id="${_prefix}" class="box">
  <div class="header">
    <input class="file" type="text" value="title none" disabled>
  </div>
  <div class="body">
    <div class="wrap long" contenteditable="plaintext-only">
  </div>
  </div>
  <div class="footer">this is message</div>
</div>  
  `.trim()
  var el = document.createElement('div')
  el.innerHTML=temp
  el = el.children[0]
  return el
}

```
