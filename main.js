// Book 2: Fun Functions (#6 Pottery)

/* Deconstruct the process of making pottery.

        Buy a big lump of clay
        Use a pottery wheel to turn the clay into a bowl
        Put the bowl into a kiln for a bisque firing
        Apply glaze to bowl
        Put glazed bowl in kiln for final firing
        💰💰💰 (haha, yeah right) */



/* 1. Define a function named buyClay. The function needs no parameters. 
It should return an object with no properties on it yet. */

        // create func w/ no properties
        const buyClay = (obj) => {
            return obj;
        };
        // console.log (buyClay);


/*2. Define a function named makePottery. You need to pass it the empty object 
that buyClay produced, so it needs a single parameter to capture that value and use it.

The function should perform the task of adding a new property named shape, and its value 
should be "Bowl". The function should then return the object after the new property was added.*/

        // create fun w/ one obj
        const makePottery = (obj) => {
            // create obj property
            obj.shape = "Bowl"
            // return the entire obj
            return obj;
            };
            // creates a var called potterBowl, thats made of makePottery and buyClay
            const potteryBowl = makePottery(buyClay);
            // Prints: the value of potteryBowl
           console.log(potteryBowl);


 /* 3. Define a function named bisqueFire. You need to give it the object that makePottery produced,
 so it needs a single parameter to capture that value and use it.

The function should perform the task of adding a new property named readyForGlazing, and its value 
should be true. The function should then return the object after the new property was added.*/

         const bisqueFire = (obj) => {
            // create a property ready for glazing to = to true
             obj.readyForGlazing = true;
            return obj;
             };
       //  create a var that contains bisqueFire and the potteryBowl
        const firePottery = bisqueFire(potteryBowl);
        console.log(firePottery)


/*4. Define a function named glazePottery. You need to give it the object that bisqueFire produced, 
so it needs a single parameter to capture that value and use it.

The function should check if the pottery has been bisque fired already and is ready for glazing. If 
it has not, you should log the following message to the console.

        "Make sure you bisque fire the pottery before you glaze it."

If the pottery has been bisque fired, the function should perform the task of adding a new property 
named glazing, and its value should be "Midnight Blue". The function should then return the object after 
the new property was added. */

// create a func w/ one obj
        const glazePottery = (obj) => {
            // create if else, if readyforGlazing is true it will list Midnight Blue
            if (obj.readyForGlazing === true) {
                obj.glazing = "MidnightBlue"
            }
            // otherwise, if it's false it will remind you to fire the glaze
            else{
                obj.readyForGlazing = false
                console.log("Make sure you bisque fire the pottery before you glaze it.")
            }
            // return the entire obj
            return obj;
        };
        // create a new var, that = glazePottery's results + firePottery
        const glazeReady = glazePottery(firePottery);
        // Prints: glazeReady's results
        console.log(glazeReady);



 /*5. Define a function named finalFiring. You need to give it the object that glazePottery produced,
so it needs a parameter to capture that value and use it. It also needs to capture the temperature of 
the kiln, so it needs two parameters.

The function should perform the task of adding a new property named cracked, and its value depend on the 
value of the temperature parameter. If that value is higher than 1200, then the value of the cracked 
property must be true. If the value is 1200, or less, the value should be false.

The function should then return the object after the new property was added.

To test the function, make sure you invoke it and pass two arguments. First test if a high temperate 
cracks the pottery. */

// create fun w/ 2 parameters (1 obj, 1 temp)
        const finalFiring = (obj, temperature) => {
            // if else statement bc if the temp is more than 1200, the obj will be cracked
            if(temperature > 1200) {
            obj.cracked = true;
            }
            // otherwise the obj will no crack
            else {
                obj.cracked = false;
            }
            // return the entire obj
            return obj;
        };

        // create a var if the temp is 1400
        const firedPottery1400 = finalFiring(glazeReady, 1400)
        // Print the results
        console.log(firedPottery1400)