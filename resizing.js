let dist_screen_cm = 22.5; //in cm // we assume a viewing distance of 20-25 cm 
let css_pix = 0.016; //approximate size of css pixel in cm

function cm2dva(size_cm, dist_cm){
    //size_cm:  size of an object in the screen in centimeters
    //dist_cm: distance from the participant to the screen in centimeter

    //return: size of the object in degrees visual angle

    let size_dva = 2*Math.atan2(size_cm,(2*dist_cm))*180/Math.PI; //returns the angle in degrees
    return size_dva;
}


//In general, the size in dva of the previous objects in pixels is calculated by the general procedure:
// object_size_cm = object_size_pix * css_pix
// object_size_dva = cm2dva(object_size_cm, dist_screen_cm)

let original_visible_dot_pix = 50; 
let original_visible_dot_cm = original_visible_dot_pix*css_pix;

let original_visible_dot_dva = Math.round(cm2dva(original_visible_dot_cm, dist_screen_cm));
//For the original experiment, the Invisible Dots were 6 times bigger in diameter than the visible dots (300px width). 
let original_invisible_dot_dva = original_visible_dot_dva*6;

//or just

let original_pix_in_dva = cm2dva(css_pix, dist_screen_cm); //how much one pixel (size css_pix in centimeters) is in dva, given the distance to the screen in centimeters
// object_size_dva = object_size_pix*original_pix_in_dva


let original_serial_dva = []; //displacement of the dots in the serial task now in dvas
let original_serial_pix = [250, 150, 50, -50, -150, -250]; //positions of dots in the original serial task in pixels
for(let i=0; i<original_serial_pix.length; i++){
    original_serial_dva.push(Math.round(original_serial_pix[i]*original_pix_in_dva));
}


//IS IT BETTER TO HAVE SIZE_DVA = OBJ_SIZE_PIX*ORIGINAL_PIX_IN_DVA? And then round the number
//OR: have a baseline,i.e, the original visible dot is circa 2dva, and stablish all multiples of that as multiples of 2dva?

// Should I take the original displacements as a function of the visible dots size? 
// Should I calculate their size in dva by using that you estimated a distance of 20-25 cm to the screen and then the size of the css pixel? Or should I use the calculated pixel size by the 
//credit card test and the distance from the blind spot to calculate the sizes in dva?
//FOR NOW: get size of one css pixel in dva (at screen distance 22.5) and translate each position to dva. Rounding the numbers in the end.


let original_jumps_pix = [250,150,-150,-250];
let original_jumps_dva = [];
for(let i=0; i<original_jumps_pix.length; i++){
    original_jumps_dva.push(Math.round(original_jumps_pix[i]*original_pix_in_dva));
}


//--------------------------------------------------------------------------------------------------------------------------------------------------


//now given that we have the sizes in dva of the original objects, lets see how big they need to be when we change the distance, and 
//now considering that we have the relation from pixel in centimeters given by the credit card test.


