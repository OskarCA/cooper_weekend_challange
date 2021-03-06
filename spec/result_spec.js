describe("Male 13", function() {
  //
  var person;

  beforeEach(function() {
    person = new Person({
      gender: "male",
      distance: 1500,
      age: 13
    });
  });

  it('should retun Poor', function() {
    expect(person.result_cooper()).toEqual('Poor');
  });

  describe("Male 21", function() {

    beforeEach(function() {
      person = new Person({
        gender: "male",
        distance: 2201,
        age: 21
      });
    });


    it('should retun Average', function() {
      expect(person.result_cooper()).toEqual('Average');
    });

  });

  describe("Male 51", function() {

    beforeEach(function() {
      person = new Person({
        gender: "male",
        distance: 2201,
        age: 51
      });
    });


    it('should retun Above Average', function() {
      expect(person.result_cooper()).toEqual('Above Average');
    });
  });

  describe("Female 51 ", function() {

    beforeEach(function() {
      person = new Person({
        gender: "female",
        distance: 1105,
        age: 51
      });
    });


    it('should retun Below Average', function() {
      expect(person.result_cooper()).toEqual('Below Average');
    });

  });

  describe("Female 21 ", function() {

    beforeEach(function() {
      person = new Person({
        gender: "female",
        distance: 1405,
        age: 21
      });
    });


    it('should retun Poor', function() {
      expect(person.result_cooper()).toEqual('Poor');
    });
  });

  describe("Female 14 ", function() {

    beforeEach(function() {
      person = new Person({
        gender: "female",
        distance: 2100,
        age: 14
      });
    });

    it('should retun Excellent', function() {
      expect(person.result_cooper()).toEqual('Excellent');
    });

  });
});