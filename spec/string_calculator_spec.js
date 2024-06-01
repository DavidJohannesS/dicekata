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
});