
describe('DiceGame',function(){
      beforeEach(function(){
	    test=new DiceGame();
      });
      it('return 6 for [1,2,3,4,5]',function(){
	    expect(test.add([1,2,3,4,5])).toEqual(6);
      });
});
