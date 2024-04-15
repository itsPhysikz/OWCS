document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const matches = document.querySelectorAll(".match");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const selectedRegions = [];
            const region = button.getAttribute("data-region");

            // Toggle the selection status of the clicked button
            if (selectedRegions.includes(region)) {
                // If the region is already selected, remove it
                const index = selectedRegions.indexOf(region);
                selectedRegions.splice(index, 1);
                button.classList.remove("active");
            } else {
                // If the region is not selected, add it
                selectedRegions.push(region);
                button.classList.add("active");
            }

            // Show matches belonging to the selected regions and hide others
            matches.forEach(match => {
                const matchRegion = match.getAttribute("data-region");
                if (selectedRegions.includes("all") || selectedRegions.includes(matchRegion)) {
                    match.style.display = "block";
                } else {
                    match.style.display = "none";
                }
            });
        });
    });
});
