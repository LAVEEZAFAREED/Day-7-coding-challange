//Day 7: coding  challenge
//Question 1: Dinner guest:Use one of your program from exercise 14 through 18 to print a message
//indicating the number of people you are inviting to dinner.
let guests: string[] = ["Albert einstein","Marie curie","Leonardo da Vinci","Issac Newton", "Charles Darwin"];
console.log(`I am inviting ${guests.length} people to dinner.`) ;

//Question 2:Think of something you could store in an array.for example you couldmake a list
//of mountains,rivers,countries,cities,language,or anything else you'd like .write a program
//that creates a list containing these items.
let countries: string[] = ["Japan","New Zealand","Ice Land","Switzerland"];
console.log("countries I'd like to visit:", countries);

//Question 3:Think of something you could store in a typeScript Object.Write a program
//that creates object containing these items.
let book: {title: string; author: string; yearPublished: number} =  {
  title: " The Hobbit",
  author: "J.R.R. Tolkien",
  yearPublished: 1937
};
console.log(`book Info: ${book.title} by ${book.author},published in {book.yearPublished}`
);





