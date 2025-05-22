/*
Question 1 : Transform and Filter Usernames
You are given an array of user objects, each with a username property containing names in inconsistent formats (some have uppercase letters, spaces, special characters, or numbers).
Write a JavaScript function getCleanUsernames(users) that returns a new array of usernames that meet the following conditions:

    Only alphabetic characters are allowed (remove numbers, spaces, and special characters).
    All characters should be in lowercase.
    The username should be at least 4 characters long after cleaning.
    The final array should be sorted alphabetically in ascending order.

Your function must use method chaining and avoid loops (for, forEach, while, etc.).
Example Input:

const users = [
  { username: 'John_Doe123' },
  { username: '  alice! ' },
  { username: 'BoB' },
  { username: 'charlie99' },
  { username: 'eve@2020' }
];

Expected Output:

["alice", "charlie", "johndoe"]


const users = [
    { username: "John_Doe123" },
    { username: "  alice! " },
    { username: "BoB" },
    { username: "charlie99" },
    { username: "eve@2020" },
];

// [ "John_Doe123", "  alice! ", "BoB", "charlie99", "eve@2020" ]

const formatName = function (userName) {
    return userName
        .toLowerCase()
        .split("")
        .filter(function (ch) {
            const asciiVal = ch.charCodeAt(0);
            return asciiVal >= 97 && asciiVal <= 122;
        })
        .join("");
};

const res = users
    .map((obj) => formatName(obj.username))
    .filter((username) => username.length >= 4)
    .sort((a, b) => a.localeCompare(b));

console.log(res);
*/
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
/*
Question 2 : Normalize and Group Emails by Domain
You are given an array of email addresses with inconsistent casing and possible extra spaces. Write a function groupEmailsByDomain(emails) that:

    Removes any leading/trailing spaces from each email.
    Converts the entire email to lowercase.
    Groups the cleaned emails by domain name (the part after @), storing them in an object.
    Each key in the returned object should be a domain, and its value should be an alphabetically sorted array of emails belonging to that domain.
> You must use method chaining and avoid any traditional loops (for, while, etc.).
Example Input:

const emails = [
  '  Alice@Example.com ',
  'BOB@GMAIL.COM',
  'charlie@Gmail.com ',
  'david@EXAMPLE.COM ',
  ' eve@yahoo.com'
];

Expected Output:

{
  "example.com": ["alice@example.com", "david@example.com"],
  "gmail.com": ["bob@gmail.com", "charlie@gmail.com"],
  "yahoo.com": ["eve@yahoo.com"]
}
*/

/*
const emails = [
    "  Alice@Example.com ",
    "BOB@GMAIL.COM",
    "charlie@Gmail.com ",
    "david@EXAMPLE.COM ",
    " eve@yahoo.com",
];

const getKey = (email) => email.split("@").at(1);

const res = emails
    .map((email) => email.trim().toLocaleLowerCase())
    .reduce(function (acc, email) {
        const key = getKey(email);
        if (acc[key] === undefined) acc[key] = new Array(email);
        else acc[key].push(email);
        return acc;
    }, {});

console.log(res);
*/

/*
Question 3 : Clean and Reverse Words
You are given a string containing multiple words separated by spaces, but some words may contain special characters, digits, or extra whitespace.
Write a function cleanAndReverseWords(str) that:

    Splits the string into words.
    Removes all non-alphabetic characters from each word.
    Converts each cleaned word to lowercase.
    Removes any empty strings that result after cleaning.
    Returns a new string where the cleaned words are in reverse order, joined by a single space.
> You must use method chaining and no loops (for, while, etc.).
Example Input:

const input = "  Hello123!   @World$$        this-- is45 ###JavaScript ";

Expected Output:

"javascript is this world hello"
*/
/*
const input = "  Hello123!   @World$$        this-- is45 ###JavaScript ";

const formatWord = function (word) {
    return word
        .toLowerCase()
        .split("")
        .filter(function (ch) {
            const asciiVal = ch.charCodeAt(0);
            return asciiVal >= 97 && asciiVal <= 122;
        })
        .join("");
};

const res = input
    .split(" ")
    .filter((word) => word !== "")
    .map((word) => formatWord(word))
    .reverse()
    .join(" ");

console.log(res);
*/
/*
Question 4: Extract Valid Numbers and Sort
You are given an array of mixed strings, where each string might contain alphabetic characters, symbols, and digits.
Write a function extractAndSortNumbers(arr) that:

    Extracts only the numeric characters from each string.
    Converts the result to a number.
    Filters out any values that result in an empty string or NaN.
    Returns a sorted array of valid numbers in ascending order.
> Must use method chaining and no loops.
Example Input:

const input = ['a12b', '##98', 'hello123', '$$', '0042'];

Expected Output:

[12, 42, 98, 123]
*/
/*
const input = ["a12b", "##98", "hello123", "0000000^", "$$", "0042"];

const getNum = function (str) {
    const numStr = str
        .split("")
        .filter(function (ch) {
            const asciiVal = ch.charCodeAt(0);
            return asciiVal >= 48 && asciiVal <= 57;
        })
        .join("");

    if (numStr === "") return NaN;
    return Number(numStr);
};

const res = input
    .map((str) => getNum(str))
    .filter((num) => !isNaN(num))
    .sort((a, b) => a - b);

console.log(res);
*/

/*
Question 5: Unique First Characters
You are given an array of strings. Write a function getUniqueFirstLetters(arr) that:

    Trims each string and converts it to lowercase.
    Ignores any empty or falsy values (e.g., '', null, undefined).
    Extracts the first letter of each cleaned string.
    Returns an array of unique first letters, sorted alphabetically.
> Must be solved using method chaining, no loops, and only functional array methods.
Example Input:

const input = [' Apple', 'banana', '  Cherry', '', null, 'avocado', 'blueberry'];

Expected Output:

['a', 'b', 'c']
*/

/*
const input = [
    "banana",
    " Apple",
    "  Cherry",
    "",
    null,
    "avocado",
    "blueberry",
];

const res = Object.keys(
    input
        .filter((ele) => ele)
        .map((word) => word.trim().at(0).toLocaleLowerCase())
        .reduce(function (acc, ch) {
            acc[ch] = null;
            return acc;
        }, {})
).sort((a, b) => a.localeCompare(b));

console.log(res);
*/
