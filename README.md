<h1>CDO</h1><h3>
You will need to put the code below into your file for verification
when we set it up you can join our hard working team of volunteers
</h3>
```html
<!DOCTYPE html>
<html>
<head>
  <title>Parent Window</title>
  <script>
    function sendParentURL() {
      const iframe = document.getElementById('myIframe');
      iframe.contentWindow.postMessage(window.location.href, '*');
    }
    
    window.onload = sendParentURL;
  </script>
</head>
<body>
  <iframe id="myIframe" src="iframe.html"></iframe>
</body>
</html>```
