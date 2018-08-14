const trails = {
    whiskyRapids: "Whisky Rapids Trail: This looped trail leads along the Oxtongue River to scenic Whiskey Rapids. The trail guide discusses the ecology and history of an Algonquin river.",

    hardwoodLookout: "Hardwood Lookout Trail: This walk introduces the visitor to the ecology of a typical Algonquin hardwood forest and culminates in a fine view of Smoke Lake and the surrounding hills.",
    
    mizzyLake: "Mizzy Lake Trail: This trail requires an early start and a full day to do properly. It visits nine ponds and small lakes and affords some of the best chances to see wildlife in the Parkway Corridor. Dogs are not permitted on the trail.",
    
    peckLake: "Pack Lake Trail: This trail circumnavigates the shoreline of Peck Lake. The trail guide explores the ecology of a typical Algonquin lake.",
    
    trackTower: "Track and Tower Trail: This looped trail features a spectacular lookout over Cache Lake. An optional 5.5 km side trip follows an abandoned railway to Mew Lake.",
    
    hemlockBluff: "Hemlock Bluff Trail: This trail leads through a mixed forest to an impressive view of Jack Lake.",
    
    batLake: "Bat Lake Trail: This looped trail introduces the hiker to basic park ecology while visiting a beautiful hemlock stand, a fine lookout, and acidic Bat Lake.",
    
    twoRivers: "Two Rivers Trail: This looped trail includes an easy climb to a pine-clad cliff.",
    
    centennialRidges: "Centennial Ridges Trail: This demanding loop rewards the hiker with spectacular viewing along two high ridges.",
    
    boothsRock: "Booth's Rock Trail: This trail visits two lakes and a spectacular lookout, returning via an abandoned railway. ",
    
    lookout: "Lookout Trail: This trail is relatively steep and rugged but affords the hiker with a magnificent view of several hundred square kilometres of Algonquin.",
    
    bigPines: "Big Pines Trail: This trail visits spectacularly large, old growth White Pine and the remains of an 1880s logging camp.",
    
    spruceBog: "Spruce Bog Boardwalk: Several boardwalk sections in the looped trail give you an excellent close-up look of two typical northern Black Spruce bogs. The trail is located right off of the Highway 60 corridor, making it very accessible for bird watching.",
    
    beaverPond: "Beaver Pond Trail: This trail provides excellent views of two beaver ponds.",
    
    loggingMuseum: "Algonquin Logging Museum Trail: This trail and exhibit summarizes the logging history of the Algonquin area. Features a re-created camboose camp and a fascinating steam-powered amphibious tug called an “alligator”.",
};

$(function(){

    // when the form submits
    $('form').on('submit', function(){
        // create an empty object (will be used to store the results from the user's choice)
        let results = {};
        // check the user choice in the first fieldset
        $('fieldset.difficulty').val();
        // append the items from the trails object to the new object which correspond to that user choice
        // check the user choice in the second fieldset
        // remove the items the new object which don't correspond to that user choice
        // check the user choice in the third fieldset
        // remove the items the new object which don't correspond to that user choice
        // if there is more than one key left in the object, get a random chocie out of the remaining trails

    });

});




