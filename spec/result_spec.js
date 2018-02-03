describe("result", function() {
  var person_result = new Result();
  var person;

  beforeEach(function() {
    person = new Person({
      gender: "male",
      distance: 1500,
      age: 13
    });
  });

  it('should retun male', function() {
    expect(person_result.result(person)).toEqual('Poor');
  });


});
