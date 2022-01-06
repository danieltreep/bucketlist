// Search function 
let input = document.querySelector(".searchbar");

function searchFilter() {
    
    // Gets the value typed in the searchbar and converts to lower case
    searchString = input.value.toLowerCase();

    // Checking if there is an input value
    // console.log(searchString);

    // Creates a variable for the cards
    const cards = document.querySelectorAll(".container");
    
        for (let i = 0; i < cards.length; i++) {

            const location = document.getElementsByClassName("location");
            const country = document.getElementsByClassName("country");
                
            if (location[i].textContent.toLowerCase().includes(searchString) || 
                country[i].textContent.toLowerCase().includes(searchString)) {

                cards[i].style.display = "";

            } else if (cards[i].className.includes(searchString) && searchString === "visited"){

                cards[i].style.display = "";

            } else {

                cards[i].style.display = "none";

            }
    }
}
input.addEventListener('input', () => {
    searchFilter();
});

// Filter function

