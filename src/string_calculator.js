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
      let sum = 0;
      for(let i = 0; i < array.length; i++)
        {
          if (array[i] % 2 != 0)
            {
              sum += array[i] - 1;
            }
        }
      return sum;
}
//or return array.reduce((a,b))=>a+(b&1?b-1:0),0);