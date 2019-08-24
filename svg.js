var target = document.getElementById("target");

var initialContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
<circle cx="50%" cy="50%" r="25%" />

</svg>`



function handleChange(event) {
  source = document.getElementById("source")
   target.innerHTML = source.value;
}

function addContent(event) {
  source = document.getElementById("source")
   source.value = initialContent;
}

document.getElementById("source").addEventListener("input",handleChange);
window.addEventListener('DOMContentLoaded', (event) => {
  var d = document.getElementById("source")
  d.innerHTML = initialContent;
  handleChange();
});
//document.getElementById("source").addEventListener("change", handleChange);