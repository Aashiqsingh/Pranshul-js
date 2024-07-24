var option = prompt("1 -- punjabi \n2 -- gujarati \n3 -- chinese")


switch (option) {

    case "punjabi":
        console.log("You have been selected punjabi food for your family with best package");
        break;

    case "gujarati":
        console.log("You have been selected gujarati food for your family with best package");
        break;

    case "chinese":
        console.log("You have been selected chinese food for your family with best package");
        break;

    default:
        console.log("Invalid option, please select from the given options");
}