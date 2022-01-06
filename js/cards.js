// Function to click if the user visited the page
const main = document.querySelector("main");
const card = document.querySelectorAll(".container");

main.addEventListener("click", (event) => {
    const target = event.target;
    
    // If plus is clicked: remove, show check, add visited class
    if (target.className.includes("add")) {
        target.style.display = "none";
        target.nextElementSibling.style.display = "block";
        target.parentNode.parentNode.className = "container visited";
        addLocalStorage();
    
    // If check is clicked: remove, show plus, remove visited class 
    } else if (target.className.includes("checked")) {
        target.style.display = "none";
        target.previousElementSibling.style.display = "block";
        target.parentNode.parentNode.className = "container";
        removeLocalStorage();
    }
});

// Add to Local Storage
function addLocalStorage() {
    const location = document.getElementsByClassName("location");

    // Loop through locations. If card has visited class, add to local storage.
    for (i = 0; i < location.length; i++) {
        if (location[i].parentElement.parentElement.className.includes("visited")) {
            localStorage.setItem(location[i].textContent, true)
        } 
    }
}
// Remove from local storage
function removeLocalStorage() {
    const location = document.getElementsByClassName("location");

    // Loop through locations. If card does not have visited class, remove
    for (i = 0; i < location.length; i++) {
        if (location[i].parentElement.parentElement.className === "container" ) {
            localStorage.removeItem(location[i].textContent);
        } 
    }
}

// Load local storage
function loadLocalStorage() {
    const location = document.getElementsByClassName("location");
    const locationsArray = [];

    // Create array from locations saved in local storage
    for (i = 0; i < localStorage.length; i++) {
        locationsArray.push(localStorage.key([i]));
    }

    // Add checkmark and visited class to every location in array
    for (i = 0; i < location.length; i++) {
        if (locationsArray.includes(location[i].textContent)) {
            location[i].parentNode.previousElementSibling.firstElementChild.style.display = 'none';
            location[i].parentNode.previousElementSibling.firstElementChild.nextElementSibling.style.display = 'block';
            location[i].parentNode.parentNode.className = "container visited";
        } 
    }
}

// Append to page
function show() {

    for (i = 0; i < locations.length; i++) {
    
        const main = document.querySelector("main");
        const html = `
            <div class="container">
                <img src="images/${locations[i].imageFile}.jpg" alt="Image of ${locations[i].location}">
                <div class="visit-bg">
                    <i class="fas fa-plus add"></i>
                    <i class="fas fa-check checked"></i>   
                </div>
                <div class="description">
                    <h3 class="location">${locations[i].location}</h3>
                    <p class="country">${locations[i].country}</p>
                </div>
            </div>
        `;
        main.insertAdjacentHTML('beforeend', html);   
    }
}

// Objects of locations
const locations = [
    {
        location: "Amsterdam", 
        country: "The Netherlands",
        imageFile: "amsterdam"
    },
    {
        location: "Paris", 
        country: "France",
        imageFile: "paris"
    },
    {
        location: "Bern", 
        country: "Switzerland",
        imageFile: "bern"
    },
    {
        location: "Berlin", 
        country: "Germany",
        imageFile: "berlin"
    },
    {
        location: "Oslo", 
        country: "Norway",
        imageFile: "oslo"
    },
    {
        location: "London", 
        country: "United Kingdom",
        imageFile: "london"
    },  
    {
        location: "Rome", 
        country: "Italy",
        imageFile: "rome"
    },  
    {
        location: "Prague", 
        country: "Czech Republic",
        imageFile: "prague"
    },
    {
        location: "Luxembourg City", 
        country: "Luxembourg",
        imageFile: "luxembourg"
    },
    {
        location: "Vatican City", 
        country: "Vatican City",
        imageFile: "vatican"
    }, 
    {
        location: "Andorra la Vella", 
        country: "Andorra",
        imageFile: "andorra"
    },
    {
        location: "Barcelona", 
        country: "Spain",
        imageFile: "barcelona"
    }, 
    // {
    //     location: "Hoofddorp", 
    //     country: "The Netherlands",
    //     imageFile: "hoofddorp"
    // }, 
    {
        location: "Yosemite", 
        country: "United States of America",
        imageFile: "yosemite"
    },  
    {
        location: "Machu Picchu", 
        country: "Peru",
        imageFile: "machu"
    },
    {
        location: "Istanbul", 
        country: "Turkey",
        imageFile: "Istanbul"
    },  
    {
        location: "Darvaza Gas Crater", 
        country: "Turkmenistan",
        imageFile: "turkmenistan"
    },
    {
        location: "Pyramids of Giza", 
        country: "Egypt",
        imageFile: "giza"
    },  
    {
        location: "Chinese wall", 
        country: "China",
        imageFile: "chinese-wall"
    },
    {
        location: "Tatev Monastery", 
        country: "Armenia",
        imageFile: "tatev-monastery"
    },
    {
        location: "Parthenon", 
        country: "Greece",
        imageFile: "parthenon"
    },
    {
        location: "Borobudur", 
        country: "Indonesia",
        imageFile: "Borobudur"
    },  
    {
        location: "Mosque of Samarra", 
        country: "Iran",
        imageFile: "samarra"
    },
    {
        location: "Christ the Redeemer", 
        country: "Brazil",
        imageFile: "redeemer"
    },  
    {
        location: "Petra", 
        country: "Jordan",
        imageFile: "petra"
    },
    {
        location: "Taj Mahal", 
        country: "India",
        imageFile: "taj-mahal"
    },
    {
        location: "Potala Palace", 
        country: "China",
        imageFile: "potala"
    },
    {
        location: "Ankor Wat", 
        country: "Cambodia",
        imageFile: "ankor"
    },
    {
        location: "Uluru-Kata Tjuta", 
        country: "Australia",
        imageFile: "uluru-kata-tjuta"
    },
    {
        location: "Salar de Uyuni", 
        country: "Bolivia",
        imageFile: "salar-de-uyuni"
    },
    {
        location: "Chichen Itza", 
        country: "Mexico",
        imageFile: "chichen"
    },
]

show();
loadLocalStorage();