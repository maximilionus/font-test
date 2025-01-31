/*********************************************************************
Script for filling the index page with content from sample.
Copyright (C) 2024-2025  Max Gashutin <maximilionuss@gmail.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*********************************************************************/


const sourceText = document.getElementById('text-source').innerHTML
const fontSizes = [6, 7, 8, 10, 12, 14, 18, 24];

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

// Show all samples when everything is ready
document.querySelectorAll('.container-samples').forEach((element) => {
    element.style.opacity = 1;
});
