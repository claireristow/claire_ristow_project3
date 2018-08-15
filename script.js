const trails = [

    whiskyRapids = {
        name: "Whisky Rapids Trail",
        description: "This looped trail leads along the Oxtongue River to scenic Whiskey Rapids. The trail guide discusses the ecology and history of an Algonquin river.",
        tags: ["some", "medium", "plants"]
        
    },

    hardwoodLookout = {
        name: "Hardwood Lookout Trail",
        description: "This walk introduces the visitor to the ecology of a typical Algonquin hardwood forest and culminates in a fine view of Smoke Lake and the surrounding hills.",
        tags: ["some", "low", "lookout"]
    },

    mizzyLake = {
        name: "Mizzy Lake Trail",
        description: "This trail requires an early start and a full day to do properly. It visits nine ponds and small lakes and affords some of the best chances to see wildlife in the Parkway Corridor. Dogs are not permitted on the trail.",
        tags: ["some", "high", "animals"]
    },

    peckLake = { 
        name: "Peck Lake Trail",
        description: "This trail circumnavigates the shoreline of Peck Lake. The trail guide explores the ecology of a typical Algonquin lake.",
        tags: ["some", "low", "plants"]
    },

    trackTower = {
        name: "Track and Tower Trail",
        description: "This looped trail features a spectacular lookout over Cache Lake. An optional 5.5 km side trip follows an abandoned railway to Mew Lake.",
        tags: ["some", "medium", "lookout"]
    },
    
    hemlockBluff = {
        name: "Hemlock Bluff Trail",
        description: "This trail leads through a mixed forest to an impressive view of Jack Lake.",
        tags: ["some", "medium", "lookout"]
    },

    batLake = {
        name: "Bat Lake Trail",
        description: "This looped trail introduces the hiker to basic park ecology while visiting a beautiful hemlock stand, a fine lookout, and acidic Bat Lake.",
        tags: ["some", "medium", "plants"]
    },
    
    twoRivers = {
        name: "Two Rivers Trail",
        description: "This looped trail includes an easy climb to a pine-clad cliff.",
        tags: ["some", "low", "lookout"]
    },
    
    centennialRidges = {
        name: "Centennial Ridges Trail",
        description: "This demanding loop rewards the hiker with spectacular viewing along two high ridges.",
        tags: ["lots", "high", "lookout"]
    },
    
    boothsRock = {
        name: "Booth's Rock Trail",
        description: "This trail visits two lakes and a spectacular lookout, returning via an abandoned railway.",
        tags: ["some", "medium", "lookout"]
    },
    
    lookout = {
        name: "Lookout Trail",
        description: "This trail is relatively steep and rugged but affords the hiker with a magnificent view of several hundred square kilometres of Algonquin.",
        tags: ["some", "low", "lookout"]
    },
    
    bigPines = {
        name: "Big Pines Trail",
        description: "This trail visits spectacularly large, old growth White Pine and the remains of an 1880s logging camp.",
        tags: ["some", "medium", "lookout"]
    },
    
    spruceBog = {
        name: "Spruce Bog Boardwalk",
        description: "Several boardwalk sections in the looped trail give you an excellent close-up look of two typical northern Black Spruce bogs. The trail is located right off of the Highway 60 corridor, making it very accessible for bird watching.",
        tags: ["none", "low", "animals"]
    },

    beaverPond = {
        name: "Beaver Pond Trail",
        description: "This trail provides excellent views of two beaver ponds.",
        tags: ["some", "low", "animals"]
    },
    
    loggingMuseum = {
        name: "Algonquin Logging Museum Trail",
        description: "This trail and exhibit summarizes the logging history of the Algonquin area. Features a re-created camboose camp and a fascinating steam-powered amphibious tug called an “alligator”.",
        tags: ["none", "low", "plants"]
    }
];

// If there's still time, create a global object (check out the lesson 6.2)

$(function(){

    // when the form submits
    $('form').on('submit', function(event){
        event.preventDefault();

        // store the user choices in vairables
        const experienceChoice = $('input[name=experience]:checked').val();
        const lengthChoice = $('input[name=length]:checked').val();
        const interestChoice = $('input[name=interest]:checked').val();

        // create an array with the user's three choices
        const userChoices = [experienceChoice,lengthChoice, interestChoice];
        console.log(userChoices);
        
        // create an array that stores the results based on the user's choices

        const results = function(){
           return  trails.filter((trail) => {
                let matches = 0;
                for (i = 0; i < trail.tags.length; i++) {
                    console.log(trail.tags[i]);
                    if (userChoices.includes(trail.tags[i])) {
                        matches = matches + 1;
                    }
                }
                return matches === 3;
            });
        }        

        console.log(results());
        
        // if there is more than one result, display the message "You have a couple options! Read about each trail to help make your decision."

        if (results.length > 1) {
            $('section.results').html(`
            <h2 class="trail-name"></h2>
            <p class="trail-description"></p>`)
            // if there are no results that match the users input specifically, display 2 suggestions that meet at least some of the criteria 
        }
            
            // if there is one result, display it
            $('section.results').html(`
            <h2 class="trail-name">${results.name}</h2>
            <p class="trail-description">${results.description}</p>`);
            
        
        
        
    });

});




