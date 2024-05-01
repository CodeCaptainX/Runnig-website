// Data array with event information
const events = [
  {
    imageSrc: "./image/teenager-run.jpg",
    imageAlt: "Marathon Runner",
    date: "Saturday, 10 Oct 2024",
    eventName: "London Marathon 2024",
    location: "London",
    price: "£75.00",
  },
  {
    imageSrc: "./image/teenager-run.jpg",
    imageAlt: "Marathon Runner",
    date: "Saturday, 10 Oct 2024",
    eventName: "London Marathon 2024",
    location: "London",
    price: "£75.00",
  },
  {
    imageSrc: "./image/teenager-run.jpg",
    imageAlt: "Marathon Runner",
    date: "Saturday, 10 Oct 2024",
    eventName: "London Marathon 2024",
    location: "London",
    price: "£75.00",
  },
  {
    imageSrc: "./image/teenager-run.jpg",
    imageAlt: "Marathon Runner",
    date: "Saturday, 10 Oct 2024",
    eventName: "London Marathon 2024",
    location: "London",
    price: "£75.00",
  },
  {
    imageSrc: "./image/teenager-run.jpg",
    imageAlt: "Marathon Runner",
    date: "Saturday, 10 Oct 2024",
    eventName: "London Marathon 2024",
    location: "London",
    price: "£75.00",
  },
  {
    imageSrc: "./image/teenager-run.jpg",
    imageAlt: "Marathon Runner",
    date: "Saturday, 10 Oct 2024",
    eventName: "London Marathon 2024",
    location: "London",
    price: "£75.00",
  },
  {
    imageSrc: "./image/teenager-run.jpg",
    imageAlt: "Marathon Runner",
    date: "Saturday, 10 Oct 2024",
    eventName: "London Marathon 2024",
    location: "London",
    price: "£75.00",
  },
  {
    imageSrc: "./image/teenager-run.jpg",
    imageAlt: "Marathon Runner",
    date: "Saturday, 10 Oct 2024",
    eventName: "London Marathon 2024",
    location: "London",
    price: "£75.00",
  },
  {
    imageSrc: "./image/teenager-run.jpg",
    imageAlt: "Marathon Runner",
    date: "Saturday, 10 Oct 2024",
    eventName: "London Marathon 2024",
    location: "London",
    price: "£75.00",
  },
];
const parentofSlide = document.querySelector(".element-slide");
events.map((event) => {
  const html = `
    <div class="element-for-slide">
      <div class="class-for_image">
        <img src="${event.imageSrc}" alt="${event.imageAlt}">
      </div>
      <div class="text-slide">
        <p>${event.date}</p>
        <h4>${event.eventName}</h4>
        <p><i class="fa-solid fa-location-dot"></i> ${event.location}</p>
        <p><i class="fa-regular fa-money-bill-1"></i> ${event.price}</p>
      </div>
    </div>
    
  `;

  // Append the new content to the parent element
  parentofSlide.innerHTML += html;
});
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");
// const slideElement = document.querySelectorAll(".element-for-slide");
// let num = 0;
// let slide = 0;
// let numberofnum;
// let newofslide;
// const functionOfforward = function () {
//   if (window.innerWidth <= 320) {
//     newofslide = 1.1;
//     numberofnum = -285;
//   } else if (window.innerWidth <= 375) {
//     newofslide = 1.1;
//     numberofnum = -335;
//   } else if (window.innerWidth <= 425) {
//     newofslide = 1.1;
//     numberofnum = -370;
//   } else if (window.innerWidth <= 500) {
//     newofslide = 1.1;
//     numberofnum = -380;
//   } else if (window.innerWidth <= 768) {
//     newofslide = 1.2;
//     numberofnum = -230;
//   } else if (window.innerWidth <= 1040) {
//     newofslide = 1.5;
//     numberofnum = -230;
//   } else {
//     newofslide = 2;
//     numberofnum = -273;
//   }
//   numberofnum--;
//   if (slide >= slideElement.length) {
//     num = 0;
//     slide = 0;
//   }

//   console.log("Adjusted 'num':", num);
//   console.log("Adjusted 'slide':", slide);
//   num += numberofnum;
//   slide += newofslide;
//   slideElement.forEach((element) => {
//     element.style.transform = `translateX(${num}px)`;
//   });
// };

// Variables to manage horizontal scrolling and slides
// const slideElements = document.querySelectorAll(".element-for-slide");
// let num = 0;
// let slide = 0;

// // Function to move slides horizontally based on window width
// const functionOfforward = () => {
//   let numberOfNum;
//   let newofslide;
//   if (window.innerWidth <= 320) {
//     newofslide = 1.1;
//     numberOfNum = -285;
//   } else if (window.innerWidth <= 375) {
//     newofslide = 1.1;
//     numberOfNum = -335;
//   } else if (window.innerWidth <= 425) {
//     newofslide = 1.1;
//     numberOfNum = -370;
//   } else if (window.innerWidth <= 500) {
//     newofslide = 1.1;
//     numberOfNum = -380;
//   } else if (window.innerWidth <= 768) {
//     newofslide = 1.2;
//     numberOfNum = -230;
//   } else if (window.innerWidth <= 1040) {
//     newofslide = 1.5;
//     numberOfNum = -230;
//   } else {
//     newofslide = 2;
//     numberOfNum = -273;
//   }

//   // If slide count exceeds the number of slides, reset
//   if (slide >= slideElements.length) {
//     num = 0;
//     slide = 0;
//   }

//   // Increment horizontal position and slide count
//   num += numberOfNum;
//   slide += newofslide;

//   // Apply the horizontal transform to slide elements
//   slideElements.forEach((element) => {
//     element.style.transform = `translateX(${num}px)`;
//   });
// };

// const scrollElement = document.querySelector(".element-slide");
// const functionOfbackward = () => {
//   let numberOfNum;
//   let newofslide;
//   if (window.innerWidth <= 320) {
//     newofslide = -1.1;
//     numberOfNum = 285;
//   } else if (window.innerWidth <= 375) {
//     newofslide = -1.1;
//     numberOfNum = 335;
//   } else if (window.innerWidth <= 425) {
//     newofslide = -1.1;
//     numberOfNum = 370;
//   } else if (window.innerWidth <= 500) {
//     newofslide = -1.1;
//     numberOfNum = 380;
//   } else if (window.innerWidth <= 768) {
//     newofslide = -1.2;
//     numberOfNum = 230;
//   } else if (window.innerWidth <= 1040) {
//     newofslide = -1.5;
//     numberofnum = 230;
//   } else {
//     newofslide = -2;
//     numberOfNum = 270;
//   }

//   num += numberOfNum;
//   slide += newofslide;

//   console.log("Adjusted 'num':", num);
//   console.log("Adjusted 'slide':", slide);

//   if (slide >= slideElement.length) {
//     num = 0;
//     slide = 0;
//   } else {
//     slideElement.forEach((element) => {
//       element.style.transform = `translateX(${num}px)`;
//     });
//   }
// };

// const onWheel = (event) => {
//   event.preventDefault();
//   const scrollAmount = -event.deltaY;
//   scrollElement.scrollLeft += scrollAmount;
//   functionOfforward();
// };

// scrollElement.addEventListener("wheel", onWheel, { passive: false });

// nextBtn.addEventListener("click", functionOfforward);

// prevBtn.addEventListener("click", functionOfbackward);

// Elements to be manipulated for sliding
// const slideElements = document.querySelectorAll(".element-for-slide");
// const scrollElement = document.querySelector(".element-slide");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");
// let num = 0;
// let slide = 0;

// const functionOfforward = () => {
//   let numberOfNum;
//   let newOfSlide;
//   if (window.innerWidth <= 320) {
//     newOfSlide = 1.1;
//     numberOfNum = -285;
//   } else if (window.innerWidth <= 375) {
//     newOfSlide = 1.1;
//     numberOfNum = -335;
//   } else if (window.innerWidth <= 425) {
//     newOfSlide = 1.1;
//     numberOfNum = -370;
//   } else if (window.innerWidth <= 500) {
//     newOfSlide = 1.1;
//     numberOfNum = -380;
//   } else if (window.innerWidth <= 768) {
//     newOfSlide = 1.2;
//     numberOfNum = -230;
//   } else if (window.innerWidth <= 1040) {
//     newOfSlide = 1.5;
//     numberOfNum = -230;
//   } else {
//     newOfSlide = 2;
//     numberOfNum = -273;
//   }
//   num += numberOfNum;
//   slide += newOfSlide;

//   if (slide >= slideElements.length) {
//     num = 0;
//     slide = 0;
//   }

//   slideElements.forEach((element) => {
//     element.style.transform = `translateX(${num}px)`;
//   });
// };

// const functionOfbackward = () => {
//   let addnum;
//   let amountofSlide;
//   if (window.innerWidth <= 320) {
//     amountofSlide = -1.1;
//     addnum = 285;
//   } else if (window.innerWidth <= 375) {
//     amountofSlide = -1.1;
//     addnum = 335;
//   } else if (window.innerWidth <= 425) {
//     amountofSlide = -1.1;
//     addnum = 370;
//   } else if (window.innerWidth <= 500) {
//     amountofSlide = -1.1;
//     addnum = 380;
//   } else if (window.innerWidth <= 768) {
//     amountofSlide = -1.2;
//     addnum = 230;
//   } else if (window.innerWidth <= 1040) {
//     amountofSlide = -1.5;
//     addnum = 230;
//   } else {
//     amountofSlide = -2;
//     addnum = 270;
//   }
//   num += addnum;
//   slide += amountofSlide;
//   if (slide <= 1) {
//     num = 0;
//     slide = 0;
//   }

//   slideElements.forEach((element) => {
//     element.style.transform = `translateX(${num}px)`; // Move horizontally backward
//   });
// };

// const onWheel = (event) => {
//   event.preventDefault();

//   const scrollAmount = -event.deltaY;
//   scrollElement.scrollLeft += scrollAmount;

//   functionOfforward();
//   if (event.deltaX) {
//     scrollElement.scrollLeft -= scrollAmount;
//     functionOfbackward();
//   }
// };

// scrollElement.addEventListener("wheel", onWheel, { passive: false });

// scrollElement.addEventListener("wheel", onWheel, { passive: false });
// nextBtn.addEventListener("click", functionOfforward);
// prevBtn.addEventListener("click", functionOfbackward);

// !========================
const slideElements = document.querySelectorAll(".element-for-slide");
const scrollElement = document.querySelector(".element-slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let num = 0; // Horizontal position for translation
let slide = 0; // Index for slide tracking

// Function to move slides forward based on window width
const functionOfforward = () => {
  let numberOfNum;
  let newOfSlide;

  // Set horizontal movement based on window width
  if (window.innerWidth <= 320) {
    newOfSlide = 1.1;
    numberOfNum = -285;
  } else if (window.innerWidth <= 375) {
    newOfSlide = 1.1;
    numberOfNum = -335;
  } else if (window.innerWidth <= 425) {
    newOfSlide = 1.1;
    numberOfNum = -370;
  } else if (window.innerWidth <= 500) {
    newOfSlide = 1.1;
    numberOfNum = -380;
  } else if (window.innerWidth <= 768) {
    newOfSlide = 1.2;
    numberOfNum = -230;
  } else if (window.innerWidth <= 1040) {
    newOfSlide = 1.5;
    numberOfNum = -230;
  } else {
    newOfSlide = 2;
    numberOfNum = -273;
  }

  // Update horizontal position and slide index
  num += numberOfNum;
  slide += newOfSlide;

  // If the slide index exceeds the number of slides, reset
  if (slide >= slideElements.length) {
    num = 0;
    slide = 0;
  }

  // Apply the translation to all slide elements
  slideElements.forEach((element) => {
    element.style.transform = `translateX(${num}px)`;
  });
};

// Function to move slides backward
const functionOfbackward = () => {
  let addNum;
  let amountOfSlide;

  // Set horizontal movement based on window width
  if (window.innerWidth <= 320) {
    amountOfSlide = -1.1;
    addNum = 285;
  } else if (window.innerWidth <= 375) {
    amountOfSlide = -1.1;
    addNum = 335;
  } else if (window.innerWidth <= 425) {
    amountOfSlide = -1.1;
    addNum = 370;
  } else if (window.innerWidth <= 500) {
    amountOfSlide = -1.1;
    addNum = 380;
  } else if (window.innerWidth <= 768) {
    amountOfSlide = -1.2;
    addNum = 230;
  } else if (window.innerWidth <= 1040) {
    amountOfSlide = -1.5;
    addNum = 230;
  } else {
    amountOfSlide = -2;
    addNum = 270;
  }

  // Update horizontal position and slide index
  num += addNum;
  slide += amountOfSlide;

  // If slide index goes below the first slide, reset
  if (slide < 1) {
    num = 0;
    slide = 0;
  }

  // Apply the translation to all slide elements
  slideElements.forEach((element) => {
    element.style.transform = `translateX(${num}px)`;
  });
};

// // Function to handle the wheel event
const onWheel = (event) => {
  event.preventDefault();

  const scrollAmount = -event.deltaY; // Translate vertical to horizontal
  scrollElement.scrollLeft += scrollAmount; 


  functionOfforward(); 
};

// Add event listeners
scrollElement.addEventListener("wheel", onWheel, { passive: false }); // Handle scroll events

nextBtn.addEventListener("click", functionOfforward); // Move forward on button click
prevBtn.addEventListener("click", functionOfbackward); // Move backward on button click
