// WorkAssign model

// Default constructor
var WorkAssign = function(date, mobile, type, field, amount) {
    
    var text1 = 0;
    var text2 = 0;
    //var fruits = document.getElementById("myInput").value;

    switch(type) {
    case "Plucking":
        text1 = 1;
        break;
    case "Cleaning":
        text1 = 2;
        break;
    case "Drainage":
        text1 = 3;
        break;
    // default:
    //     text1 = "I have never heard of that fruit...";
    }

    switch(field) {
        case "Field_1":
            text2 = 1;
            break;
        case "Field_2":
            text2 = 2;
            break;
        case "Field_3":
            text2 = 3;
            break;
        case "Field_4":
            text2 = 4;
            break;
        case "Field_5":
            text2 = 5;
            break;
        case "Field_6":
            text2 = 6;
            break;
        case "Field_7":
                text2 = 7;
                break;
        case "Field_8":
                text2 = 8;
                break;
        case "Field_9":
            text2 = 9;
            break;
       
        
    

        // default:
        //     text1 = "I have never heard of that fruit...";
        }

    //this.division = division;
    this.date = date;
    this.lMobile = mobile;
    this.typeID = text1;
    this.field = text2;
    this.amount = amount;


  }
  
  // Export workAssign model
  module.exports = WorkAssign;