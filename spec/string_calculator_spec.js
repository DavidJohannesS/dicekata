describe('DiceGame',function(){
      beforeEach(function(){
        test=new DiceGame();
      });
      it('return 6 for [1,2,3,4,5]',function(){
        expect(test.add([1,2,3,4,5])).toEqual(6);
      });
      it('return something for empty array',function(){
        expect(test.add([])).toEqual(-1);

      });
      it('return 2 for [6,6,4,4,1,4]',function(){
        expect(test.add([6,6,4,4,1,3])).toEqual(2);
      });
      it('return to low if array less than 4 dice',function(){
        expect(test.add([1,2,3])).toEqual(-1);
      });
      it('return to high if array higher than 6 dice',function(){
        expect(test.add([1,2,3,4,5,6,1])).toEqual(-1);
      });
      it('return "Not a valid dice" for numbers higher than 6',function(){
        expect(test.add([1,7,6,9])).toEqual(-1);
      });
      it('return "Not a valid dice" for negative numbers',function(){
        expect(test.add([-1,-2,3,4])).toEqual(-1);
      });
});