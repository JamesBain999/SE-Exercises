// const collection = ['james', 'dylan', 'alexander', 'ernie']

// const cohort = {1: 'james',2:  'dylan',3:  'alexander',4:  'ernie'}


// //for...of is for keys/property/name
// for (let guy of collection){
//     console.log(guy)
// }

// //for...in is for values
// for (let guy in cohort){
//     console.log(guy)
// }

//  const person = {
//      name: 'bob',
//      age: 33,
//      suburb: 'sydney'
//  }
 

// //object to map
// const mapPerson = new Map(Object.entries(person));
// console.log(mapPerson)

// //map to object
// console.log(Object.fromEntries(mapPerson))

// function displayPerson({name= 'bilbo', age= 321, xxx='adelaide'}) {
//     console.log(`${name} lives at ${xxx} and is ${age} years old`)
// }

// displayPerson(person)

// const beforeEpoch = new Date(1703040000000)
// const atEpoch = new Date(0)

// console.log(beforeEpoch)
// console.log(atEpoch)

// const room = {
//     number: 23, toJSON() { return this.number }
//    }
//    const meetup = {
//     title: "Strategy Conference", participants: ['Chris', 'Tina']
//    }
//    meetup.place = room; // meetup references room
//    room.occupiedBy = meetup; // room references meetup
//    console.log( JSON.stringify(meetup) ); // no more circular references as room stringifies to 23
//    // {"title":"Strategy Conference","participants":["Chris","Tina"],"place":23}


//    const meetup = {
//     title: "Strategy Conference", participants: ['Chris', 'Tina'], date: '2023-06-01'
//    }

//    const meetupString = JSON.stringify(meetup) // convert object to string
//    const meetupParsed = JSON.parse(meetupString, (key , value) => { // convert string to object
//     if ( !isNaN(Date.parse(value)) ) return new Date(value) //if valid date, create Date object
//     return value;
//    })

//    console.log(meetupParsed) // { title, participants: (as above), date: 2023-06-01T00:00:00.000Z }

