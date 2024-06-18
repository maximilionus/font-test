var sourceContent = document.getElementById('content-source').innerHTML;
var targetDivs = document.querySelectorAll('.content-light, .content-dark');

targetDivs.forEach((div) => {
    div.innerHTML = sourceContent;
});
