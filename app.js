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

var typed = new Typed(".auto-type", {
    strings: ["Curious", "Passionate", "Artistic"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

function openTab(event, tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
  
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
      button.classList.remove('active');
    });
  
    // Show the clicked tab content and add active class to the clicked button
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
  }
  