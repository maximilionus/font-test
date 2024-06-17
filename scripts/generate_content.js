var sourceDiv = document.getElementById('content-source');
var targetDivs = document.querySelectorAll('.content-light, .content-dark');

targetDivs.forEach(function(div) {
     div.innerHTML = sourceDiv.innerHTML;
});
