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
