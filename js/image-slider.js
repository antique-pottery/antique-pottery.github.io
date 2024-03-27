window.onload = function() {
    let containers = document.getElementsByClassName("image-container");

    function changeImage(containerIndex, n) {
        let images = containers[containerIndex].getElementsByTagName("img");
        let currentIndex = findActiveIndex(images);

        // Hide the current image
        images[currentIndex].classList.remove("active");

        // Calculate the new index
        let newIndex = currentIndex + n;
        if (newIndex >= images.length) {
            newIndex = 0; // Wrap around to the first image
        } else if (newIndex < 0) {
            newIndex = images.length - 1; // Wrap around to the last image
        }

        // Show the new image
        images[newIndex].classList.add("active");
    }

    function findActiveIndex(images) {
        for (let i = 0; i < images.length; i++) {
            if (images[i].classList.contains("active")) {
                return i;
            }
        }
        return -1; // If no active image found
    }

    // Event listeners for navigation buttons
    let prevButtons = document.querySelectorAll('.prev');
    let nextButtons = document.querySelectorAll('.next');

    prevButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let containerIndex = Array.from(this.parentElement.children).indexOf(this.parentElement);
            changeImage(containerIndex, -1);
        });
    });

    nextButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let containerIndex = Array.from(this.parentElement.children).indexOf(this.parentElement);
            changeImage(containerIndex, 1);
        });
    });
};
