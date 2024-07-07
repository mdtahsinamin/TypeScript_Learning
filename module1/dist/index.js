"use strict";
/**
 *  Primitive data type in ts
 * * number
 * * string
 * * boolean
 * * null
 * * undefined
 * * symbol
 *
 * Non Primitive Data type
 * * Array
 * * Tuple
 * * object
 */
let firstName = "Tahsin";
// if ts assume/ infer the data type, its call implicit data type
// if we declare the data tye, its call explicit data type
let rollNumber = 1802054;
let isAdmin = true;
let x = undefined;
let y = null;
let d;
d = 1523;
// Array
let friends = ["rachel", "monica"];
friends.push("tanzir");
let eligibleRolList = [1, 2, 3];
eligibleRolList.push(5);
// tuple -> array -> order -> type of values
let coordinates = [1, 5];
let ageName = [50, "Mr.X", true];
