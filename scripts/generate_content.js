const sourceText = document.getElementById('text-source').innerHTML
const fontSizes = [6, 7, 8, 10, 12, 14, 18, 20, 24, 48];

document.querySelectorAll(
    '.font-sans-serif, .font-serif, .font-system-ui'
).forEach(element => {
    // Duplicate text typeface
    element.innerHTML = sourceText;

    // Generate different font sizes
    fontSizes.forEach(size => {
        let clone = element.cloneNode(true);
        clone.style.fontSize = size + 'px';
        element.parentNode.insertBefore(clone, element.nextSibling);
    });
    // Remove the original element
    element.parentNode.removeChild(element);
});

// Duplicate the original container to different styles
var sourceContent = document.getElementById('content-source').innerHTML;

document.querySelectorAll(
    '.content-light, .content-dark, .content-low-contrast'
).forEach((div) => {
    div.innerHTML = sourceContent;
});
