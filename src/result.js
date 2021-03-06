function Person(attr) {
  this.gender = attr.gender;
  this.distance = attr.distance;
  this.age = attr.age;
}
//Stack Overflow - https://stackoverflow.com/questions/14718561/how-to-check-if-a-number-is-between-two-values
Number.prototype.between = function(a, b) {
  var min = Math.min(a, b),
    max = Math.max(a, b);

  return this >= min && this <= max;
};

Person.prototype.result_cooper = function(obj) {
  var gender = this.gender;
  switch (true) {
    case gender === 'male':
      return this.result_male();
    case gender === 'female':
      return this.result_female();
  }
};

Person.prototype.result_male = function() {
  var age = this.age;
  var distance = this.distance;
  switch (true) {
    case age.between(13, 14):
      switch (true) {
        case distance >= 2700:
          return 'Excellent';
        case distance.between(2400, 2699):
          return 'Above Average';
        case distance.between(2200, 2399):
          return 'Average';
        case (distance.between(2100, 2199)):
          return 'Below Average';
        case (distance < 2100):
          return 'Poor';
      }
      break;

    case age.between(15, 16):
      switch (true) {
        case distance >= 2800:
          return 'Excellent';
        case distance.between(2500, 2799):
          return 'Above Average';
        case distance.between(2300, 2499):
          return 'Average';
        case distance.between(2200, 2299):
          return 'Below Average';
        case distance < 2200:
          return 'Poor';
      }
      break;

    case age.between(17, 19):
      switch (true) {
        case distance >= 3000:
          return 'Excellent';
        case distance.between(2700, 2999):
          return 'Above Average';
        case distance.between(2500, 2699):
          return 'Average';
        case distance.between(2300, 2599):
          return 'Below Average';
        case distance < 2300:
          return 'Poor';
      }
      break;

    case age.between(20, 29):
      switch (true) {
        case distance >= 2800:
          return 'Excellent';
        case distance.between(2400, 2799):
          return 'Above Average';
        case distance.between(2200, 2399):
          return 'Average';
        case distance.between(1600, 2199):
          return 'Below Average';
        case distance < 1600:
          return 'Poor';
      }
      break;

    case age.between(30, 39):
      switch (true) {
        case distance >= 2700:
          return 'Excellent';
        case distance.between(2300, 2699):
          return 'Above Average';
        case distance.between(2000, 2299):
          return 'Average';
        case distance.between(1500, 1999):
          return 'Below Average';
        case distance < 1500:
          return 'Poor';
      }
      break;

    case age.between(40, 49):
      switch (true) {
        case distance >= 2500:
          return 'Excellent';
        case distance.between(2100, 2499):
          return 'Above Average';
        case distance.between(1700, 2099):
          return 'Average';
        case distance.between(1400, 1699):
          return 'Below Average';
        case distance < 1400:
          return 'Poor';
      }
      break;

    case (age >= 50):
      switch (true) {
        case distance >= 2400:
          return 'Excellent';
        case distance.between(2000, 2399):
          return 'Above Average';
        case distance.between(1600, 1999):
          return 'Average';
        case distance.between(1300, 1599):
          return 'Below Average';
        case distance < 1300:
          return 'Poor';
      }
      break;
  }
};

Person.prototype.result_female = function() {
  var age = this.age;
  var distance = this.distance;
  switch (true) {
    case age.between(13, 14):
      switch (true) {
        case distance >= 2000:
          return 'Excellent';
        case distance.between(1900, 1999):
          return 'Above Average';
        case distance.between(1600, 1899):
          return 'Average';
        case distance.between(1500, 1599):
          return 'Below Average';
        case distance < 1500:
          return 'Poor';
      }
      break;

    case age.between(15, 16):
      switch (true) {
        case distance >= 2100:
          return 'Excellent';
        case distance.between(2000, 2099):
          return 'Above Average';
        case distance.between(1700, 1999):
          return 'Average';
        case distance.between(1600, 1699):
          return 'Below Average';
        case distance < 1600:
          return 'Poor';
      }
      break;
    case age.between(17, 19):
      switch (true) {
        case distance >= 2300:
          return 'Excellent';
        case distance.between(2100, 2299):
          return 'Above Average';
        case distance.between(1800, 2099):
          return 'Average';
        case distance.between(1700, 1799):
          return 'Below Average';
        case distance < 1700:
          return 'Poor';
      }
      break;

    case age.between(20, 29):
      switch (true) {
        case distance >= 2700:
          return 'Excellent';
        case distance.between(2200, 2699):
          return 'Above Average';
        case distance.between(1800, 2199):
          return 'Average';
        case distance.between(1500, 1799):
          return 'Below Average';
        case distance < 1500:
          return 'Poor';
      }
      break;

    case age.between(30, 39):
      switch (true) {
        case distance >= 2500:
          return 'Excellent';
        case distance.between(2000, 2499):
          return 'Above Average';
        case distance.between(1700, 1099):
          return 'Average';
        case distance.between(1400, 1699):
          return 'Below Average';
        case distance < 1400:
          return 'Poor';
      }
      break;

    case age.between(40, 49):
      switch (true) {
        case distance >= 2300:
          return 'Excellent';
        case distance.between(1900, 2299):
          return 'Above Average';
        case distance.between(1500, 1899):
          return 'Average';
        case distance.between(1200, 1499):
          return 'Below Average';
        case distance < 1200:
          return 'Poor';
      }
      break;

    case (age >= 50):
      switch (true) {
        case distance >= 2200:
          return 'Excellent';
        case distance.between(1700, 2199):
          return 'Above Average';
        case distance.between(1400, 1699):
          return 'Average';
        case distance.between(1100, 1399):
          return 'Below Average';
        case distance < 1100:
          return 'Poor';
      }
      break;
  }
};