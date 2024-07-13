document.addEventListener("DOMContentLoaded", function () {
  // Fetch and display images
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      const imgContainer = document.getElementById("dog-image-container");
      data.message.forEach((imgUrl) => {
        const img = document.createElement("img");
        img.src = imgUrl;
        imgContainer.appendChild(img);
      });
    });

  // Fetch and display breeds
  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const breeds = data.message;
      const breedList = document.getElementById("dog-breeds");

      for (const breed in breeds) {
        const li = document.createElement("li");
        li.textContent = breed;
        breedList.appendChild(li);
      }

      // Add click behavior to change font color
      breedList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
          event.target.style.color = "purple";
        }
      });

      // Add filter functionality
      const breedDropdown = document.getElementById("breed-dropdown");
      breedDropdown.addEventListener("change", function (event) {
        const selectedLetter = event.target.value;
        const breedItems = breedList.getElementsByTagName("li");

        Array.from(breedItems).forEach((item) => {
          if (item.textContent.startsWith(selectedLetter)) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
});
