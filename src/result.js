function Result() {}
//Stack Overflow - https://stackoverflow.com/questions/14718561/how-to-check-if-a-number-is-between-two-values
Number.prototype.between = function(a, b) {
  var min = Math.min(a, b),
    max = Math.max(a, b);

  return this > min && this < max;
};

// function reult


Result.prototype.gender_check = function(obj){
  switch (true) {
    case obj.gender === 'male':
      result_male(obj);
      break;
    case obj.gender === 'female':
      result_female(obj);
      break;
  }
}
