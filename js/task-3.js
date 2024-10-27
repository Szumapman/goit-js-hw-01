"use strict";

function getElementWidth(content, padding, border) {
    //  I assume that the function should always receive 3 arguments and they should be in numericpx format, such as 10px, 5px, 2px.
    if (!content.endsWith("px") || !padding.endsWith("px") || !border.endsWith("px")) {
        return "Invalid input";
    }
    content = parseFloat(content)
    padding = parseFloat(padding)
    border = parseFloat(border)
    if (content < 0 || padding < 0 || border < 0) {
        return "Invalid input";
    }
    return content + padding * 2 + border * 2;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
