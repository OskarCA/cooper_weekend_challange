describe("result", function() {
  var result = new Result();

  beforeEach(function() {
    person = new Person({
      gender: "male",
      distance: 1500,
      age: 13
    });
  });

  it('should retun male', function() {
    expect(result.gender_check(person)).toEqual('male');
  });


});
