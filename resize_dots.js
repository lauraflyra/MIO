function cm2dva(size_cm, dist_cm){
    //size_cm:  size of an object in the screen in centimeters
    //dist_cm: distance from the participant to the screen in centimeter

    //return: size of the object in degrees visual angle

    let size_dva = 2*Math.atan2(size_cm,(2*dist_cm))*180/Math.PI; //returns the angle in degrees
    return size_dva;
}

function pix2dva(size_pix, dist_pix){
    //size_dva: size of an object in the screen in pixels
    //dist_pix: distance from the participant to the screen in pixels

    //return: size of the object in degrees visual angle

    let size_dva = 2*Math.atan2(size_pix, 2*dist_pix)*180/Math.PI;
    return size_dva;
}


function cm2pix( height_card_pix, width_card_pix){
        //height_card_pix: height of the resized credit card in pixels
        //width_card_pix: width of the resized credit card in pixels
      
       //return: number of pixels in one centimeter of screen, 
                //averaging with the linear transformation from both dimensions

       let width_card_cm = 8.56;
       let height_card_cm = 5.398;
       let cm2pix_from_width = width_card_pix/width_card_cm;
       let cm2pix_from_height = height_card_pix/height_card_cm;
   
       let cm_pix = (cm2pix_from_height+cm2pix_from_width)/2 //averaging both values 

        return cm_pix;
}



function dva2pix(size_dva, view_dist_cm, cm_pix){
    // size_dva: size of an object in the screen (needs to be smaller than 10 dva)
    // view_dist_cm: distance from participant to the screen in centimeters
    //cm_pix: number of pixels in one centimeter of screen
    //return: size of an object in the screen in pixels 

    //use: If we want the stimulus to be sized as 2dva, we can get the distance from the 
    //participant to the screen, the transformation from centimeters to pixels
    //and use it to calculate the size of the stimulus in pixels. 

    //only works for visual angles smaller than about 10 degrees!!!!
    let size_pix = parseInt(cm_pix*view_dist_cm*Math.tan(size_dva * Math.PI / 180)); 

    return size_pix; 

}
