# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sashamahalia/lotide`

**Require it:**

`const _ = require('@sashamahalia/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the first item in an array
* `tail`: returns a new array with all items from the input array except for the first item
* `countLetters`: returns an object with the letters of an input phrase as keys, and the number of times each letter has been used as each key's value
* `assertArraysEqual`: A manual test that logs a pass or failure message bassed on two arrays being equal or not
* `assertEqual`: A manual test that logs a pass or failure message bassed on asserting equality between two primative data type
* `assertObjectsEqual`: A manual test that logs a pass or failure message bassed on asserting equality between two primative objects
* `eqArrays`: A manual test that returns true or false based on the contents of two arrays being equal or not
* `eqArrays`: A manual test that returns true or false based on the contents of two objects being equal or not
* `findKey`: returns the key of an object, based on the requirements of a callback function.
* `findKeyByValue`: returns the key of an object when given its value as input
* `map`: returns an array where all items in the input array have been transformed based on the logic of a callback function
* `middle`: returns an array with the middle value or values
* `takeUntil`: returns a new array with the contents of the input array up until the requirement of a callback function is met
* `without`: returns a new array without anything included in the itemsToRemove input