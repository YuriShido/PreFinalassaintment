let users = {

  'p01': {
    id: 'p01',
    name: 'Richard Sanderson',
    age: 22,
    bio: 'World traveller, big 401k',
    friends:['p02', 'p04']
  },

  'p02': {
    id: 'p02',
    name: 'Austin Powers',
    age: 47,
    bio: 'International man of mystery',
    friends:['p03', 'p04']
  },

  'p03': {
    id: 'p03',
    name: 'Fred Flinstone',
    age: 4000,
    bio: 'yaba-daba-doo',
    friends:['p02', 'p04', 'p01']
  },

  'p04': {
    id: 'p04',
    name: 'Taylor Swift',
    age: 26,
    bio: 'I make music in my spare time',
    friends:['p02', 'p03']
  },


  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  
  getUserByID: function(userID) {
    // should return a sentence containing all of the info about the user (name age, and bio)
  //  console.log(users[userID])
  //  console.log(`Hi my name is ${users[userID].name}.  I'm ${users[userID].age} years old. ${users[userID].bio}` );
   return `Hi my name is ${users[userID].name}.  I'm ${users[userID].age} years old. ${users[userID].bio}` ;
  },

  getUserByName: function(userName) {
        // should return a sentence containing all of the info about the user (name age and bio)
    let userID;
    for (let user in users) {
      if(users[user].name === userName)
      userID = users[user].id
    } 
    console.log(`Hi my name is ${users[userID].name}.  I'm ${users[userID].age} years old. ${users[userID].bio}` );
    // console.log(users[userID].name, users[userID].age, users[userID].bio)
    //  let userID = Object.keys(users)
    //  console.log(userID)
    //  let Names = Object.values(users)
    //  let det = Object.values(users[userID[userName]])
    //  let Names = users[userID[0]].name
    //  console.log(Names)
  
  },

  addUser: function(name, age, bio, friends) {
   
    
    let newUser = {
      id: users.generateUid(),
      name: name,
      age: age,
      bio: bio,
      friends: friends
    };
     users[newUser.id] = newUser
     console.log(users[newUser.id]);

    //will need a random id as well when creating a new user. console log the user object to confirm it was added. 
  },

  getFriendsByID: function(userID) {
    // this function will take in a userID, and using this, return a list of all of their friends names. 

    let FriendsID = users[userID].friends
    for(i = 0; i < userID.length; i++) {
      
      console.log(users[FriendsID[i]].name);
    } 
    
  }

}

// users.getUserByID('p01')
// users.getUserByName('Taylor Swift')
users.addUser('Beyonce', '34', 'She is Diva', 'p01')

// users.getFriendsByID('p03')
