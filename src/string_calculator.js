function DiceGame(){}
DiceGame.prototype.add=function(array)
{
      if(array.length==0){return -1;}
      if(array.length<4||array.length>6)
        {return -1;}
      for(let i = 0; i < array.length; i++)
        {
          if(array[i] > 6 || array[i] < 1)
            {
              {return -1;}
            }
        }
}
