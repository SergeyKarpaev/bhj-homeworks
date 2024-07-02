const clickerr = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
function changeSizes() {
    clickerr.textContent++;
    if(image.width === 200) {
        image.width = 300
    } else {
        image.width = 200
    }
};
cookie.onclick = changeSizes;