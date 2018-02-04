describe("person", function() {
  var person;

  beforeEach(function() {
    person = new Person({
      gender: "male",
      distance: 1500,
      age: 13
    });

  });
  it('Should return male', function() {
    expect(person.gender).toEqual("male");
  });
  it('Should return distance', function() {
    expect(person.distance).toEqual(1500);
  });
  it('Should return age', function() {
    expect(person.age).toEqual(13);
  });

});