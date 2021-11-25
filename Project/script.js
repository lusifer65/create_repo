// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    for(let i in contacts)
    {
  if(contacts[i].firstName==name)
  {
    if(prop in contacts[i])
    {

      return contacts[i][prop];
    }
    return "NO such property";
  }
}
  return "No such Contact";
    // Only change code above this line
  }
  
  console.log(lookUpProfile("Akira", "fsdfh"));
  console.log(lookUpProfile("Bob", "number"))