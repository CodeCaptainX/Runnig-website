const amountForID = document.getElementById("amount");

const lightboxLinks = document.querySelectorAll("a[data-fslightbox]");

const count = lightboxLinks.length;

// Log the count to the console (for debugging)
console.log(`There are ${count} lightbox links on the page.`);

// Update the inner text of the element with the ID "amount"

amountForID.innerText = `${count}`;

const routeText = document.querySelector(".for-text-wrap"); // Get the clamped text
const readMoreButton = document.querySelector(".read-more-btn"); // Get the Read More button

readMoreButton.addEventListener("click", () => {
  if (
    routeText.style.webkitLineClamp == 1 ||
    readMoreButton.innerHTML == "Read more"
  ) {
    routeText.style.webkitLineClamp = "unset";
    readMoreButton.innerText = "Read less";
  } else {
    routeText.style.webkitLineClamp = 1;
    readMoreButton.innerHTML = "Read more";
  }
});

// !=====================================================
function toggleAnswer(faq) {
  const isOpen = faq.classList.contains("open");
  faq.classList.toggle("open");
}

// !================================
const elemntOfroad = document.querySelectorAll(".for-road");
elemntOfroad;
console.log(elemntOfroad.length);

const heightOftheElement = document.querySelector(".footer");
const heightOftheElement12 = document.querySelector(".for-sticky-bar1");
const amountOfheight = heightOftheElement.getBoundingClientRect().height;
console.log("🚀 ~ amountOfheight:", amountOfheight);

function checkIfScrolledToEnd() {
  const scrollPosition = window.innerHeight + window.scrollY;

  let valuestop = window.scrollY - amountOfheight;
  const documentHeight = document.body.scrollHeight;
  console.log(
    "🚀 ~ checkIfScrolledToEnd ~ document.body.scrollHeight:",
    document.body.scrollHeight
  );

  if (scrollPosition >= documentHeight - 500) {
    heightOftheElement12.style.display = "none";
  } else if (scrollPosition <= documentHeight - 500) {
    heightOftheElement12.style.display = "flex";
  }
}

// Attach the scroll event listener to the window
window.addEventListener("scroll", function () {
  if (window.innerWidth < 1100) {
    checkIfScrolledToEnd();
  } else {
    heightOftheElement12.style.display = "none";
  }
});
