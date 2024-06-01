describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});
	it('should return the sum of a single number', function() {
        expect(calculator.add('1')).toEqual(1);
    });

    it('should return the sum of two numbers', function() {
        expect(calculator.add('1,2')).toEqual(3);
    });

	it('should return the sum of multiple numbers', function() {
        expect(calculator.add('1,27')).toEqual(28);
    });

    it('should return the sum of large numbers', function() {
        expect(calculator.add('1,5,27,45')).toEqual(78);
    });

	it('should return the sum of large numbers', function() {
        expect(calculator.add('1,10,100,1000,10000')).toEqual(11111);
    });
});
describe('FindAlf',function(){
	beforeEach(function(){
		test=new FindAlf();
	});
	it('empty string case',function()
	{
		expect(test.add('')).toEqual("SpaceShip lost forever!");
	});
	//test for new line char
	it('should return "SpaceShip lost forever!" for "|"', function() {
        expect(test.add('|')).toEqual("SpaceShip lost forever!");
    });
	//test for spaceship is at beginning
	it(' return "[0,0]" for "X"', function() {
        expect(test.add('X')).toEqual("[0,0]");
    });
	//defining full map with upcoming test functions
	it('should return "[1,0]" for ".X"', function() {
        expect(test.add('.X')).toEqual("[1,0]");
    });
	it('should return "[2,2]" for ".......|........|..X"', function() {
        expect(test.add('.......|........|..X')).toEqual("[2,2]");
    });
	it('should return "[3,4]" for "........|........|.......|....X"', function() {
        expect(test.add('........|........|.......|....X')).toEqual("[4,3]");
    });
	it('should return "[6,0]" for "........|........|.......|....|..|...|X"', function() {
        expect(test.add('........|........|.......|....|..|...|X')).toEqual("[0,6]");
    });

});
describe('DiceGame',function(){
      beforeEach(function(){
	    test=new DiceGame();
      });
      it('return 6 for [1,2,3,4,5]',function(){
	    expect(test.add([1,2,3,4,5])).toEqual(6);
      });
});
