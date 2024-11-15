const slugify = function (title) {
    const titleArray = title.split(" ");

    for (let i = 0; i < titleArray.length; i++) {

        titleArray[i] = titleArray[i].toLowerCase();

        titleArray.join("-");

        // console.log(titleArray.join("-"));
    }

     return titleArray;
    
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"