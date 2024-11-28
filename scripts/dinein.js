document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search input');
    const searchButton = document.querySelector('.search button');
    const restaurantContainers = document.querySelectorAll('.restaurant-self');

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') performSearch();
    });

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        restaurantContainers.forEach(restaurant => {
            const restaurantName = restaurant.querySelector('h3').textContent.toLowerCase();
            const restaurantLocation = restaurant.querySelector('p').textContent.toLowerCase();

            if (restaurantName.includes(searchTerm) || restaurantLocation.includes(searchTerm)) {
                restaurant.style.display = 'flex';
            } else {
                restaurant.style.display = 'none';
            }
        });
    }
});