function Result() {}
//Stack Overflow - https://stackoverflow.com/questions/14718561/how-to-check-if-a-number-is-between-two-values
Number.prototype.between = function(a, b) {
    var min = Math.min(a, b),
        max = Math.max(a, b);

    return this >= min && this <= max;
};

// function reult


Result.prototype.gender_check = function(obj) {
    switch (true) {
        case obj.gender === 'male':
            return Result.prototype.result_male(obj);
            break;
        case obj.gender === 'female':
            return Result.prototype.result_female(obj);
            break;
    }
}

Result.prototype.result_male = function(obj) {
    switch(true) {
        case obj.age.between(13, 14):
            switch (true) {
                case (obj.distance >= 2700):
                    return 'Excellent'
                    break;
                case (obj.distance.between(2400, 2699)):
                    return 'Above Average'
                    break;
                case (obj.distance.between(2200, 2399)):
                    return 'Average'
                    break;
                case (obj.distance.between(2100, 2199)):
                    return 'Below Average'
                    break;
                case (obj.distance <= 2100):
                    return 'Poor'
                break;

                }
            break;
    }

        // case obj.age.between(13, 14):
        //     switch (true) {
        //         case obj.distance >= 2700:
        //             return 'Excellent'
        //         case obj.distance.between(2400, 2699):
        //             return 'Above Average'
        //         case obj.distance.between(2200, 2399):
        //             return 'Average'
        //         case obj.distance.between(2100, 2199):
        //             return 'Below Average'
        //         case obj.distance <= 2100:
        //             return 'Poor'
        //
        //     }
        //     break;
        // }
}
