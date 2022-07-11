module.exports = function toReadable (number) {
  var numText = "";
    var numStr = number.toString();

    //dictionaries
    var ones = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    var tens = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    }

    var prefixes = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    }
    

    if(number < 10){
       return numText += ones[number];
    }else if(number in tens){
        return numText += tens[number];
    }else if(number < 100){
        numText += prefixes[numStr.charAt(0)];
        if(numStr.charAt(1) != "0"){
            numText += " " + ones[numStr.charAt(1)];
            return numText;
        }

        return numText;
    }else{
        numText += ones[numStr.charAt(0)];
        numText += " hundred";

        if(numStr.substring(1) != "00"){
            if(numStr.charAt(1) == "0"){
                numText += " " + ones[numStr.charAt(2)];
                return numText;
            }else if(numStr.substring(1) in tens){
                numText += " " + tens[numStr.substring(1)];
                return numText;
            }else if(numStr.charAt(2) == "0"){
                numText += " " + prefixes[numStr.charAt(1)];
                return numText;
            }else{
                numText += " " + prefixes[numStr.charAt(1)];
                numText += " " + ones[numStr.charAt(2)];
                return numText;
            }
        }
        return numText;
    }
}
