# Main Concepts

A computer program is a text file that contains a sequence of commands for a computer. There are many programming languages. Each of them requires the programmer to follow specific rules when writing the program so that the computer understands how to execute it. You will study the Javascript language and its rules.

## Commands

All programs contain commands. With the help of commands, you can "talk" to your computer.

For example, console.log() is used to print messages to the console (press F12 and select the Console tab to see it – there may arleady be a lot of messages 😊):

![image](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/Ekran%20Al%C4%B1nt%C4%B1s%C4%B1.JPG)

**Please note:** end your command with ```;``` — so the computer knows for sure that this is the end of the command.

## Comments

A comment is an explanatory text for a program. It is not executed by the computer but helps programmers understand a program's logic better.

Comments can be single-line or multi-line.

Single-line comments are indicated by two backslash characters ```//```. For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/comments.JPG)

Multi-line comments start with ```/*``` and end with ```*/```. For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/multi-linecomments.JPG)

## Literals

All programs work with data, such as numbers or strings. Literal is a way to write some data in the program.

Number literals consist of digits, ```-``` and ```.``` characters and do not require quotes: ```42```, ```-5```, ```3.14```.

## Concatenation

In Javascript, you can concatenate (combine) strings using the ```+``` operator.

Please note: in this context, the ```+``` operator performs concatenation (not arithmetic addition of numbers).

For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/concatenation1.JPG)

You can concatenate not only strings but also other values, for example, a string with a number:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/concatenation2.JPG)

**Please note:** if at least one of the values combined by the operator + is a string, then the concatenation is performed (and we get a "glued" string). Concatenation can be performed several times in a row. For example:
String literals are always written in quotes: ```'Misha'```, ```'Hello, world!'```.

## Variables

Variables are used to store data. Variables are used to store data. This is like a box with a name in which we can put something. Later we can take the stored data to use it in our program.

The assignment operator ```=``` is used to set a variable value.

JavaScript allows you to create variables using ```let``` and ```const``` keywords.

Let's consider examples:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/variables.JPG)

**Please note:** the variable name should explain what data is stored in it. Typically it contains one or more words in English. The first word should start with a small letter and the rest with a capital letter. Numbers (inside the name) and ```_``` or ```$``` characters are also possible but rarely used.

For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/name.JPG)

## Expressions

To calculate something in our program, we can combine variables and literals using operators. For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/calculate.JPG)

To calculate the expression value, you need:

1. Replace each variable with its value.
2. Perform the calculations.

For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/expression.JPG)

Let's look at another example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/anotherExample.JPG)

# Data Types

All values in Javascript have a specific data type. It determines which commands can be executed with certain values. For example, you can perform any mathematical operations with numbers (add, multiply, divide, and so on), and strings can be "glued" (concatenated) or divided into parts.

Let's consider data types in Javascript.

## Numbers

All the numbers (integer and fractional) have the ```number``` data type.

For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/numbers.JPG)

## Strings

The ```string``` data type is used for strings (sequences of characters).

For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/strings.JPG)

**Please note:** all the strings must be enclosed in quotes.


## Boolean

```boolean``` values can be either ```true``` or ```false```. Such values check conditions inside of ```if``` constructs and loops.

For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/boolean.JPG)

## null and undefined

There are two more special values: ```null``` and ```undefined```.

```null``` is "nothing". It is explicitly assigned to a variable when we do not know the needed value yet or want to remove its old value. For example, we have a box with a gift, and then the gift is taken out of the box, and the box becomes empty:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/null.JPG)

```undefined``` is the default value (before we set a variable value). For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/undefined.JPG)

## How to Find Out the Data Type

The ```typeof``` operator can be used to get the data type of your value or even an entire expression.

For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/typeof.JPG)

**Please note:** ```typeof null``` returns the ```'object'``` string, while ```typeof undefined``` returns the ```undefined``` string:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/objct.JPG)

# Numbers

In Javascript, all numbers are of the ```number``` type. They can contain both integer and fractional values.

Let's look at what operations we can perform with numbers and their priority.

## Operations

I hope you still remember from math lessons what operations you can perform with numbers: addition, subtraction, multiplication, division, exponentiation, and a remainder of the division.

Let's consider examples:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/operations.JPG)

Using the ```%``` operator, you can get the last digit of a number, for example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/digit.JPG)

You can also check if a number is even:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/evenNumber.JPG)

## Priority

Usually, operations are performed from left to right. But multiplication and division have higher priority, so they are executed before addition and subtraction. For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/priority.JPG)

To specify the correct calculation order, you should use parentheses ```()```. Then this operation will be performed first, and then all the others, and ```(5 + 1) * 10``` will be ```60```.

# Strings

Strings represent text data. They can be written in single, double, or backticks. Let's consider examples.

## Creating a String

Here is a string in single quotes:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/str.JPG)

You can insert variable values, expressions, and line breaks using backticks. This insertion is called **interpolation**:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/interpolation.JPG)

In the console we get:

```
Hi, Misha!
Welcome to the team.
a + b = 8
```

Double quotes (```"Misha"```, ```"Hello, world!"```) work the same way as single quotes, but we won't use them to avoid confusion with double quotes in HTML.

**Please note:** the quotes type should match at the beginning and the end of your string.

## Concatenation

In Javascript, you can concatenate (combine) strings using the ```+``` operator.

**Please note:** in this context, the ```+``` operator performs concatenation (not arithmetic addition of numbers).

For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/concatenation1.JPG)

You can concatenate not only strings but also other values, for example, a string with a number:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/concatenation2.JPG)

**Please note:** if at least one of the values combined by the operator ```+``` is a string, then the concatenation is performed (and we get a "glued" string). Concatenation can be performed several times in a row. For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/concatenation3.JPG)

## Empty String

An empty string is a string that does not contain any characters.

The empty string is declared like this:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/emptyString.JPG)

Typically, the empty string is used to "glue" parts to it as the program runs.

For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/glue.JPG)

# Boolean

Sometimes you need to check if a particular condition is true. As a result, you will get one of two answers: ```yes, true``` or ```no, not true```.

Javascript uses the ```boolean``` type for such checks. It contains only two values: ```true``` or ```false```.

For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/bln.JPG)

## Number Comparison

Javascript uses the following operators to compare numbers: ```===```, ```!==```, ```>```, ```<```, ```>=``` and ```<=```.

Let's consider examples:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/numberComparison.JPG)

## String Comparison

Strings in Javascript are compared letter by letter in alphabetical order. Let's explain:

1. Compare the first letter of the first string with the first letter of the second string.
2. If the first letters are different, the larger string is the one where the first letter is later in the alphabet.
3. When the first letters are equal, the second letters are compared according to the same principle, and so on.
4. The comparison continues until the following letter of one of the strings is greater than the corresponding letter in the other string.
5. If one of the strings runs out of letters and the second does not, then the second one is greater.
6. If all letters match, then the strings are equal.

For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/stringComparison.JPG)

**Please note:** in Javascript, lowercase letters come after uppercase letters, so comparing ```'a' > 'Y'``` evaluates to ```true```:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/stringComparison2.JPG)

## The Negation Operator (!)

To get a variable's or expression's opposite value, use the logical negation operator !.

For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/negation.JPG)

To apply the negation operator to an entire expression, you can use the ():

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/negation2.JPG)

## Logical AND (&&)

If you need to check that all conditions are met, you can use the ```&&``` operator — logical AND.

It returns ```true``` only if all of its arguments are true. Otherwise — ```false```.

For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/and.JPG)

## Logical OR (||)

If you need to check that at least one of the conditions is truthy, you can use the ```||``` operator — logical OR.

It returns ```true``` if **at least one** of its arguments is ```true```. Otherwise — ```false```.

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/or.JPG)

We'll discuss what the ```&&``` and ```||``` operators return later.

## Combining Conditions

You can also combine more than two conditions, for example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/combining.JPG)

If you use different operators in one expression, then you should use ```()```:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/combining2.JPG)

**Please note:** the ```&&``` operator priority is higher than ```||```, so it will be executed first (unless you use parentheses).

# Function

A function is a small part of code that can be executed multiple times. It can take different arguments and return some results.

It allows you to avoid writing the same or similar code many times.

## Function Declaration

The ```function``` keyword is used to create a function. Let's consider an example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/function.JPG)

Where:

- ```function``` tells us that this is a function;
- ```sayHello``` is the function name;
- ```personName``` is the function parameter. There can be several parameters separated by commas, or not at all, then the ```()``` parentheses should be empty;
- the commands in curly braces ```{}``` are the function body. They are executed on each function call.

**Please note:** it's best to start the name with a verb that describes the action your function performs. The first word starts with a small letter, and all subsequent words start with a capital letter:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/functionName.JPG)

## Function Call

To call a function, you need to write its name and then specify arguments (if you have any) in parentheses.

Let's consider the previous example and pass various arguments to the ```sayHello()``` function:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/functionCall.JPG)

You can call a function even before it has been declared:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/functionCall2.JPG)

**Please note:** the value ```3``` goes to ```x```, and ```2``` goes to ```y```.

## Function Return Value

For a function to return some value, you need to write the ```return``` keyword in its body, and on the right, specify a value or expression that you want to return.

Let's consider an example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/functionReturn.JPG)

The result of a function is substituted in the place where it was called. In the examples below, the result is assigned to a variable:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/functionReturn2.JPG)

Let's consider another example where the result of a function is not written to a variable (it is printed to the console, but not saved anywhere):

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/functionReturn3.JPG)

If there is no ```return``` keyword in a function, or if there is no value to the right of ```return```, then the result is ```undefined```.

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/functionReturn4.JPG)

**Please note:** ```return``` completely terminates the current function execution, so no further commands are executed:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/functionReturn5.JPG)

# Conditionals

As you already know, the commands in the program are executed sequentially (from top to bottom). But sometimes, we need some commands to be executed only on a specific condition. For this, conditional statements are used.

Let's take a closer look at conditional statements.

## IF Statement

### Single Condition

Use the ```if``` statement if you need to check only one condition.

Let's consider an example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/ifSingle.JPG)

After the ```if``` keyword, you need to put parentheses ```()``` and write **condition** inside. Then put curly braces ```{}```, and write your commands inside — this is **block body**. The block body will only be executed if the condition is truthy.

Here the condition is ```age >= 18```. If we have ```age = 16```, then the condition is false, and the command inside the block is not executed. So in the console we get:

```
Go to the shop
Come back home
```

### Multiple Conditions

If you need to check multiple conditions, you can use the ```if``` statement inside another ```if```. For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/ifMultiple.JPG)

But it is challenging to track such a **nested** construction, for example, where the braces opened and where closed. Therefore, it is better to use the ```&&``` and ```||``` logical operators to combine conditions:

An example of checking two conditions using the ```&&``` operator:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/ifNestedAnd.JPG)

An example of checking two conditions using the ```||``` operator:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/ifNestedOr.JPG)

## ELSE Statement

Sometimes you need to execute different commands depending on whether the condition is truthy or not. You can perform that with two ```if``` statements with opposite conditions. For example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/else.JPG)

But there is a shorter and more convenient way to do the same — using the ```else```:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/else2.JPG)

If the condition is met, then in the console we will see:

```
The condition isAdult === true
```

Otherwise, in the console we will see:

```
The condition isAdult !== true
```

## ELSE IF Statement

If you need to execute one command out of several, depending on some condition, then you can use the ```else if``` statement.

Let's consider an example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/elseif.JPG)

With ```age = 5```, in the console we get: ```Child```.

You can also add the ```else``` statement at the end, which will work if none of the conditions above is truthy:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/elseif2.JPG)

With ```age = 1```, in the console we get: ```Baby```.

## RETURN Keyword Inside IF

When the ```if``` statement is used within a function, the ```return``` keyword can be helpful to avoid multiple ```else if``` statements.

Let's consider an example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/ifReturn.JPG)

## Conditional (Ternary) Operator

Sometimes you need to set different values for a variable depending on a condition. You can do it using the ```if``` and ```else``` statements:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/Conditional.JPG)

But this is not very convenient for two reasons:

1. Construction is too big.
2. We cannot use ```const``` for the ```result``` because we need to reassign it inside the ```if else```.

There is another way — **conditional (ternary) operator**. Let's consider an example:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/Conditional2.JPG)

If the ```age >= 18``` condition is met (as in our example), then ```'Adult'``` (after ```?```) will be selected. Otherwise — ```'Not an adult '``` (after ```:```).

For clarity, you can write condition in parentheses:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/Conditional3.JPG)

If the expression is too long, then you can write each value on a new line:

![](https://github.com/SenaOzcn/Javascript-basics/blob/MIT-License/images/Conditional4.JPG)

This operator is often called a ternary because it is the only operator that uses 3 parts.
