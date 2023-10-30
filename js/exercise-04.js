/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/

/*
    1. true && console.log("moo");

    True is a bolean value that represents a truhty condition

    && is a logical AND operator, so this evalue the expresion on both sides and returns the result of the second expresion
    if the first value is true, if the first value is false it dosn't return nothing.

    console.log("moo"); Print on console the value between (), in this case a String with value "moo"

    This will do the console.log because the first expresion is true, so will execute the second expresion.


    2. false && console.log("moo moo?")

    False is a bolean value that represents a falsy condition

    && is a logical AND operator, so this evalue the expresion on both sides and returns the result of the second expresion
    if the first value is true, if the first value is false it dosn't return nothing.

    console.log("moo moo?"); Print on console the value between (), in this case a String with value "moo moo?"

    This wont return nothing, because as the first expresion is false, the second expresion is not evaluated at all.
    console.log("moo moo?"); function will not ever be called.


    3. true || console.log("hello friend");

    || is a logical OR operator, as same like && it evaluate both side expresions, if the first expresion is true,
    it returns the first value, if its not true, it will evaluate the second expresion, if its true too, it will return it

    this line wont return the console.log, because the first expresion its true, so will not evaluate the second expresion


    4. false || console.log("bye friend");

    || is a logical OR operator, as same like && it evaluate both side expresions, if the first expresion is true,
    it returns the first value, if its not true, it will evaluate the second expresion, if its true too, it will return it

    this line will return the console.log("bye friend"); as the first value is falsy value, will evaluate the second one
    as the second expresion is a console.log(); it will log on console the string inside ()

*/
