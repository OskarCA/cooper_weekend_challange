function Person(attr){
    this.gender = attr.gender
    this.distance = attr.distance
    this.age = attr.age
}
Person.prototype.result = function () {
    var person_result = new Result();
    person_result.result_male(this);
};
