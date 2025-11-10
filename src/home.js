export function homePage() {
  const homeBtn = document.getElementById("home");
  const content = document.getElementById("content");

  // If the Home button is clicked, add the home page elements to the DOM
  homeBtn.addEventListener("click", (e) => {
    if (content.querySelector(".intro") || content.querySelector(".hours"))
      return;

    let intro = document.createElement("div");
    intro.classList.toggle("intro");

    let introHead = document.createElement("h2");
    introHead.textContent = "Where East Meets West on a Plate";
    introHead.classList.toggle("intro-heading");

    let descBox = document.createElement("p");
    descBox.textContent =
      "Spice Route Kitchen blends the heart of Nigeria with the soul of China. From sizzling suya noodles to pepper chicken dim sum, every dish tells a story of cultures meeting on one plate. Inspired by the ancient Spice Route, we bring rich spices, bold flavors, and soulful warmth to every meal.";
    descBox.classList.toggle("description-box");

    let exploreBtn = document.createElement("button");
    exploreBtn.textContent = "Explore menu";
    exploreBtn.classList.toggle("explore");

    //append the intro heading, description and explore button to the intro container
    intro.append(introHead, descBox, exploreBtn);

    let hours = document.createElement("div");
    hours.classList.toggle("hours");

    let pOne = document.createElement("p");
    pOne.textContent = "Operating hours";
    let pTwo = document.createElement("p");
    pTwo.textContent = "Weekdays: 9am - 8pm";
    let pThree = document.createElement("p");
    pThree.textContent = "Weekends: 9am - 11pm ";

    //append all the paragraphs to the hours container

    hours.append(pOne, pTwo, pThree);

    content.appendChild(intro);
    content.appendChild(hours);
  });
}
