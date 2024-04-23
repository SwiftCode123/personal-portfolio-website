/*For scrollButton
- Offsets the amount from the top to the amount you want to scroll
to the desired pixel
*/
function scrollToTarget(offset) {
    var targetElement = document.getElementById("myIntroduction");

    window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth"
    });
}

/*
For mobiles, scroll to a different part of the page
*/

document.getElementById("scrollButton").addEventListener("click", function(event) 
{
    event.preventDefault(); 

    var offset = window.innerWidth < 768 ? 50 : 50; 
    scrollToTarget(offset);
});

/*For typing text animation*/
const text = document.querySelector(".sec-text")

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Student";
    }, 0);

    setTimeout(() => {
        text.textContent = "Designer";
    }, 4000);

    setTimeout(() => {
        text.textContent = "Developer";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);

