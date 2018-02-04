The challenge this weekend was to convert a cooper test template into JavaScript.

To use the program you need to:

Create a person.
Person takes arguments gender, distance, age as an object.
```
var bob = new Person({gender: 'male', distance: 1500, age: 21});
```

To get your result you need to create a new instance of the class result,
and call the result_cooper function witch takes an argument person.

```
var result = new Result();
result.result_cooper(bob);

=> 'Poor'
```


To undertake this test you will require:

400 meter track
Stopwatch
Whistle
Assistant
How to conduct the test
This test requires the athlete to run as far as possible in 12 minutes.

The athlete warms up for 10 minutes
The assistant gives the command “GO”, starts the stopwatch and the athlete commences the test
The assistant keeps the athlete informed of the remaining time at the end of each lap (400m)
The assistant blows the whistle when the 12 minutes has elapsed and records the distance the athlete covered to the nearest 10 meters
