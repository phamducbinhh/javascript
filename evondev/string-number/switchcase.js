const fruit = "lemon"
switch (fruit) {
    case "apple":
        console.log('ban thich an tao');
        break;
    case "water": //gom nhóm
    case "lemon":
        console.log('ban thich an chanh va water');
        break;

    default:
        console.log("ban khong thich an gi");
        break;
}

const number = "500";
switch (Number(number)) {
    case 500:
        console.log("500");
        break;

    default:
        break;
}


