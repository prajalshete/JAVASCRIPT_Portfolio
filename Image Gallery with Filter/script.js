function filterImages() {
    const category = document.getElementById("categorySelect").value;  // Get the selected category
    const images = document.querySelectorAll("#gallery img");  // Get all images
  
    images.forEach(image => {
      // If the category is "all", show all images, otherwise, filter by class
      if (category === "all" || image.classList.contains(category)) {
        image.style.display = "block";  // Show image
      } else {
        image.style.display = "none";  // Hide image
      }
    });
  }
  