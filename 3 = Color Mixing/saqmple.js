function mixingcolor(color1,color2){
    // Ensure color1 and color2 are strings
    if (typeof color1 !== 'string' || typeof color2 !== 'string') {
      return "Invalid input: Colors must be strings";
    }
    // case insensitive comparision between these colors ...
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();
    // sort color for the automatically without any case insenstive ...
    if(color1 > color2){
        [color1,color2] = [color2,color2];
    }
    // combining the color into single stirngs.... 
    const colormix = color1 + "-" + color2 ;
    let result;

    switch(colormix) {
        case "blue-red":
        case "red-blue":
            result = "purple";
            break;
        case "red-yellow":
        case "yellow-red":
            result = "orange";
            break;
        case "blue-yellow":
        case "yellow-blue":
            result = "green";
            break;
        default:
            result = "Invalid";
    }
    console.log(result);
}

// Test the function
mixingcolor("red", "blue");    // Output: purple