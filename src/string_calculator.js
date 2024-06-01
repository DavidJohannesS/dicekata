// StringCalculator.js
function StringCalculator() {}
//adding a method/function to the prototype object of the stringcalculator function
StringCalculator.prototype.add = function (string_numbers) {
  //
  //adding code for first testcase
  if (string_numbers === "") {
    return 0;
  } else {
    var numbers = string_numbers.split(",");
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += parseInt(numbers[i]);
    }
    return sum;
  }
};
function FindAlf(){}
FindAlf.prototype.add=function(string)
{
	if(string==='')
		{ return 'SpaceShip lost forever!'};
	 let charIndex = 0, xPos = 0, yPos = 0;
	if(string==="|")
		{return "SpaceShip lost forever!"};
    // Iterate over the map until the spaceship is found
    while(string[charIndex] !== "X")
    {
        xPos++;//update horizontal coor
        if(string[charIndex] === "|")
        {
            xPos = 0;//if newlinechar reset x coord
            yPos++; //increment y coor as we moved down one
        }
        charIndex++;
    };

    // Return the spaceship's coordinates
    return `[${xPos},${yPos}]`;
};
function DiceGame(){}
DiceGame.prototype.add=function(array)
{
      return 0;
}
