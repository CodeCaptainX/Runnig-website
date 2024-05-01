document.addEventListener("DOMContentLoaded", function () {
  // Select all filter containers
  const filterContainers = document.querySelectorAll(".filter-container");

  filterContainers.forEach(function (container) {
    const parent = container.querySelector(".filter-options");
    const fordropDown = container.querySelector(".for-tile-drop-down");

    const children = parent.querySelectorAll(".filter-option");
    let totalHeight = 0;
    const seeMoreButton = container.querySelector(".show-more");
    const seeLessButton = container.querySelector(".show-less");
    const DropDown = container.querySelector(".drop-down-icon");

    children.forEach((child) => {
      const childRect = child.getBoundingClientRect();
      totalHeight += childRect.height;
    });

    parent.style.maxHeight = 0 + "px";
    const childrenArray = Array.from(children);
    const slicedChildren = childrenArray.slice(0, 0);
    let heightOfSlicedChildren = 0;
    slicedChildren.forEach((child) => {
      const childRect = child.getBoundingClientRect();
      heightOfSlicedChildren += childRect.height;
    });

    parent.style.maxHeight = heightOfSlicedChildren + "px";
    const iconClicks = container.querySelectorAll(".drop-down-icon");

    iconClicks.forEach((icon) => {
      icon.addEventListener("click", function () {
        const slicedChildren = childrenArray.slice(0, 5);
        let heightOfSlicedChildren = 0;
        slicedChildren.forEach((child) => {
          const childRect = child.getBoundingClientRect();
          heightOfSlicedChildren += childRect.height;
        });
        seeLessButton.style.display = "none";
        seeMoreButton.style.display = "block";
        // Toggle the maxHeight between 0 and totalHeight
        if (parent.style.maxHeight === "0px") {
          parent.style.maxHeight = heightOfSlicedChildren + "px";
          DropDown.style.transform = "rotate(180deg)";
        } else {
          parent.style.maxHeight = "0px";
          seeMoreButton.style.display = "none";
          DropDown.style.transform = "rotate(0deg)";
        }
      });
    });

    fordropDown.addEventListener("click", function () {
      const slicedChildren = childrenArray.slice(0, 5);
      let heightOfSlicedChildren = 0;
      slicedChildren.forEach((child) => {
        const childRect = child.getBoundingClientRect();
        heightOfSlicedChildren += childRect.height;
      });
      seeLessButton.style.display = "none";
      seeMoreButton.style.display = "block";
      // Toggle the maxHeight between 0 and totalHeight
      if (parent.style.maxHeight === "0px") {
        parent.style.maxHeight = heightOfSlicedChildren + "px";
        DropDown.style.transform = "rotate(180deg)";
      } else {
        parent.style.maxHeight = "0px";
        seeMoreButton.style.display = "none";
        DropDown.style.transform = "rotate(0deg)";
      }
    });
    iconClicks.forEach((icon) => {
      icon.addEventListener("click", function () {
        const slicedChildren = childrenArray.slice(0, 5);
        let heightOfSlicedChildren = 0;
        slicedChildren.forEach((child) => {
          const childRect = child.getBoundingClientRect();
          heightOfSlicedChildren += childRect.height;
        });
        seeLessButton.style.display = "none";
        seeMoreButton.style.display = "block";
        // Toggle the maxHeight between 0 and totalHeight
        if (parent.style.maxHeight === "0px") {
          parent.style.maxHeight = heightOfSlicedChildren + "px";
          DropDown.style.transform = "rotate(180deg)";
        } else {
          parent.style.maxHeight = "0px";
          seeMoreButton.style.display = "none";
          DropDown.style.transform = "rotate(0deg)";
        }
      });
    });
    let i = 4;
    seeMoreButton.addEventListener("click", function () {
      i += 4;
      const slicedChildren = childrenArray.slice(0, i);
      let heightOfSlicedChildren = 0;
      slicedChildren.forEach((child) => {
        const childRect = child.getBoundingClientRect();
        heightOfSlicedChildren += childRect.height;
      });
      seeLessButton.style.display = "block";
      parent.style.maxHeight = heightOfSlicedChildren + "px";
      if (i >= children.length) {
        seeMoreButton.style.display = "none";
        i = 4;
      }
    });
    seeLessButton.addEventListener("click", function () {
      i -= 4;
      if (i <= 0 || i > children.length) {
        seeLessButton.style.display = "none";
        i = 5;
      }
      const slicedChildren = childrenArray.slice(0, i);
      let heightOfSlicedChildren = 0;
      slicedChildren.forEach((child) => {
        const childRect = child.getBoundingClientRect();
        heightOfSlicedChildren += childRect.height;
      });

      seeMoreButton.style.display = "block";
      parent.style.maxHeight = heightOfSlicedChildren + "px";
    });
  });
});

const button = document.getElementById("buttonforShowText");
const textHidden = document.querySelector(".textHidden");
const iconUpsideDown = document.querySelector(".upsidedown"); // Assuming the class is "fa-angle-up"

button.addEventListener("click", function () {
  button.style.transition = " transform 0.3s ease-in-out";
  textHidden.classList.toggle("expanded");
  if (textHidden.classList.contains("expanded")) {
    iconUpsideDown.style.transform = "rotate(180deg)";
  } else {
    iconUpsideDown.style.transform = "rotate(0deg)";
  }
});
// !================================
const map_fixed = document.querySelector(".maps");
const fixed_item = document.querySelector(".big-parent-ever");
window.addEventListener("scroll", () => {
  if (window.scrollY > 135) {
    console.log(window.scrollY);
    map_fixed.classList.add("fixed");
    fixed_item.classList.add("fixed-for-list-item");
  } else {
    map_fixed.classList.remove("fixed");
    fixed_item.classList.remove("fixed-for-list-item");
  }
});
// !=============================

const for_list_2 = document.querySelector(".for-flex-position-ab");

const Sort_button = document.querySelectorAll(".Sort-sort");

Sort_button.forEach((element) => {
  element.addEventListener("click", function () {
    const for_big = document.querySelector(".for-bg");
    document.querySelector(".sorting-container").style.display = "flex";
    for_big.style.display = "flex";
  });
});
const X_sign = document.querySelector(".x-sort");
X_sign.addEventListener("click", () => {
  const for_big = document.querySelector(".for-bg");
  document.querySelector(".sorting-container").style.display = "none";
  for_big.style.display = "  none";
});

const filter_button = document.querySelector(".button-filter");
const across_sign = document.querySelector(".absolute");
const filter_button_id = document.querySelector("#button-filter");
filter_button.addEventListener("click", function () {
  for_list_2.style.display = " flex";
});
across_sign.addEventListener("click", function () {
  for_list_2.style.display = " none";
});
filter_button_id.addEventListener("click", function () {
  for_list_2.style.display = " flex";
  Sort_button;
});
const modal = document.querySelector(".for-modal-parent");
const heartIcons = document.querySelectorAll(".heart");

// Show the modal
function showModal() {
  modal.style.bottom = "0";
  modal.style.display = "flex";
}

// Hide the modal
function hideModal() {
  modal.style.display = "none";
}

// Toggle the modal when a heart icon is clicked
heartIcons.forEach((element) => {
  element.addEventListener("click", function (event) {
    // Prevent the event from bubbling up to the global listener
    event.stopPropagation();
    if (modal.style.display === "none" || modal.style.display === "") {
      showModal();
    } else {
      modal.style.bottom = "-350px";

      setTimeout(hideModal, 600);
    }
  });
});

// Close the modal when clicking anywhere outside of it
document.addEventListener("click", function (event) {
  // Check if the click was outside the modal

  if (modal.style.display === "flex" && !modal.contains(event.target)) {
    modal.style.bottom = "-350px";
    setTimeout(hideModal, 600);
  }
});

// !============================
// const acrossPage = document.querySelectorAll(".for-card");
// acrossPage.addEventListener("click", function () {
//   window.location.href = "./pages/Even-detail.html"; // Change to your desired URL
// });

// !===================================================================

const cardsData = [
  {
    imageSrc: "/image/chosen.jpg",
    imageAlt: "Hello",
    date: "Sunday, 21 April 2024",
    location: "Greenwich Park, London",
    typeOfSport: "Running",
    starRating: 4.8,
    reviewCount: 78,
    eventLink: "./Event-detail.html",
    favorite: false,
  },
  {
    imageSrc: "/image/chosen.jpg",
    imageAlt: "Hello",
    date: "Sunday, 21 April 2024",
    location: "Greenwich Park, London",
    typeOfSport: "Running",
    starRating: 4.8,
    reviewCount: 78,
    eventLink: "./Event-detail.html",
    favorite: false,
  },
];

// Reference to the container
const cardContainer = document.querySelector(
  ".for-flex-center-in-mobile-phone"
);

const amountofData = cardsData.slice(0, 4);

// Use forEach to render the data
amountofData.forEach((card) => {
  // Create the HTML structure as a string
  const cardHtml = `
    <div class="for-card">
      <div class="for-heart">
            <i class="fa-regular fa-heart heart"></i>
      </div>
      <div class="for-image">
        <img src="${card.imageSrc}" alt="${card.imageAlt}">
      </div>
      <div class="text-telling-the-location">
        <p>${card.date}</p>
        <div>
          <div class="for-location">
            <i class="fa-solid fa-location-dot"></i>
            <p>${card.location}</p>
          </div>
          <div class="for-type-sport">
            <i class="fa-solid fa-person-running"></i>
            <p>${card.typeOfSport}</p>
          </div>
        </div>
        <div class="for-star-reviews">
          <i class="fa-regular fa-star"></i>
          <p>${card.starRating}</p>
          <p>(${card.reviewCount} reviews)</p>
        </div>
        <div class="for-a-tage">
          <a href="${card.eventLink}">Get atmospheres</a>
        </div>
      </div>
      <div class="for-heart">
        <i class="fa-regular fa-heart heart"></i>
      </div>
    </div>
  `;

  cardContainer.innerHTML += cardHtml;
});

// `<div class="for-card">
//   <div class="for-heart">
//     <i class="fa-regular fa-heart heart"></i>
//   </div>
//   <div class="for-image">
//     <img src="/image/chosen.jpg" alt="hello" />
//   </div>
//   <div class="text-telling-the-location">
//     <p>Sunday,21 April 2024</p>
//     <div>
//       <div class="for-location">
//         <i class="fa-solid fa-location-dot"></i>
//         <p>Greenwich Park,london</p>
//       </div>

//       <div class="for-type-sport">
//         <i class="fa-solid fa-person-running"></i>
//         <p>Greenwich Park,london</p>
//       </div>
//     </div>
//     <div class="for-star-reviews">
//       <i class="fa-regular fa-star"></i>
//       <p>4.8</p>
//       <p>(78 reviews)</p>
//     </div>
//     <div class="for-a-tage">
//       <a href="./Even-detail.html">Get atmospheres</a>
//     </div>
//   </div>
//   <div class="for-heart">
//     <i class="fa-regular fa-heart heart"></i>
//   </div>
// </div>; `;
// !===========================================

const filtersData = {
  filters: [
    {
      title: "Sports",
      options: [
        { name: "Triathlon", count: 93 },
        { name: "Aquabike", count: 41 },
        { name: "Road Cycling", count: 57 },
        { name: "Obstacle", count: 32 },
        { name: "Aquathlon", count: 30 },
        { name: "Duathlon", count: 28 },
        { name: "Hiking", count: 24 },
        { name: "Swimming", count: 23 },
        { name: "Mountain Biking", count: 7 },
        { name: "SwimRun", count: 4 },
      ],
      actions: {
        showMore: true,
        showLess: true,
      },
    },
    {
      title: "Distance",
      options: [
        { name: "Triathlon", count: 93, checkboxId: "triathlon" },
        { name: "Aquabike", count: 41, checkboxId: "aquabike" },
        { name: "Road Cycling", count: 57, checkboxId: "road-cycling" },
        { name: "Obstacle", count: 32, checkboxId: "obstacle" },
        { name: "Aquathlon", count: 30, checkboxId: "aquathlon" },
        { name: "Duathlon", count: 28, checkboxId: "duathlon" },
        { name: "Hiking", count: 24, checkboxId: "hiking" },
        { name: "Swimming", count: 23, checkboxId: "swimming" },
        { name: "Mountain Biking", count: 7, checkboxId: "mountain-biking" },
        { name: "SwimRun", count: 4, checkboxId: "swimrun" },
      ],
      actions: {
        showMore: true,
        showLess: true,
      },
    },
    {
      title: "Month",
      options: [
        { name: "Triathlon", count: 93, checkboxId: "triathlon" },
        { name: "Aquabike", count: 41, checkboxId: "aquabike" },
        { name: "Road Cycling", count: 57, checkboxId: "road-cycling" },
        { name: "Obstacle", count: 32, checkboxId: "obstacle" },
        { name: "Aquathlon", count: 30, checkboxId: "aquathlon" },
        { name: "Duathlon", count: 28, checkboxId: "duathlon" },
        { name: "Hiking", count: 24, checkboxId: "hiking" },
        { name: "Swimming", count: 23, checkboxId: "swimming" },
        { name: "Mountain Biking", count: 7, checkboxId: "mountain-biking" },
        { name: "SwimRun", count: 4, checkboxId: "swimrun" },
      ],
      actions: {
        showMore: true,
        showLess: true,
      },
    },
  ],
};

// Reference to the main container
const container = document.querySelector(".for-data-dropdown");

// Loop through the data and render content using divs
filtersData.filters.forEach((filter) => {
  const filterHtml = `
    <div class="filter-container">
      <div class="div-class">
        <div class="for-tile-drop-down">
          <h2>${filter.title}</h2>
          <i class="fa-solid fa-angle-up drop-down-icon"></i>
        </div>
        <div class="filter-options">
          ${filter.options
            .map(
              (option) => `
            <div class="filter-option">
              ${
                option.checkboxId
                  ? `
                <input type="checkbox" id="${option.checkboxId}" name="sports" value="${option.name}">
                <label for="${option.checkboxId}">${option.name} (${option.count})</label>
              `
                  : `
                ${option.name} (${option.count})
              `
              }
            </div>
          `
            )
            .join("")}
        </div>
    
     ${
       filter.actions
         ?  `

          <div class="forflexButton">
              <button class="show-more">Show more</button>
              <button class="show-less">Show less</button
          </div>
      </div>`
         : "hello"
     } 
    </div>
  `;

  // Append the HTML content to the main container
  container.innerHTML += filterHtml;
});

// !===========================================
// !===========================================
// !===========================================
// !===========================================
// !===========================================
