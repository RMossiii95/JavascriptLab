function Calculator()
{
    let response = "y";
    do
    {
        let roomHeight = prompt("Enter the height of the room");
        let roomLength = prompt("Enter the length of the room");
        let roomWidth = prompt("Enter the wifth of the room");

        let perimeter = roomLength * 2 + roomWidth * 2;
        let area = roomLength * roomWidth;
        let volume = area * roomHeight;


        console.log("Perimeter:" + perimeter);
        console.log("Area:" + area);
        console.log("Volume: " + volume);

        let carpetTiles = area/5;
        let paintCans = (perimeter + area);

        console.log("Carpet Tiles needed: " + carpetTiles);
        console.log("Paint cans needed: " + paintCans);

        response = prompt("Would you like to go again?");

    }
    while(response === "y");
}