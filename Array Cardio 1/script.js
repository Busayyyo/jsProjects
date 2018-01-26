const nigerianWriters = [
   {firstname: 'TM', lastname: 'Aluko', DOB:1918, DOD:2010},
   {firstname: 'Yemi', lastname: 'Ajibade', DOB:1929, DOD:2013},
   {firstname: 'Buchi', lastname: 'Emecheta', DOB:1944, DOD:2017},
   {firstname: 'Olauda', lastname: 'Equaino', DOB:1745, DOD:1797},
   {firstname: 'Abubakar', lastname: 'Imam', DOB:1911, DOD:1981},
   {firstname: 'Samuel', lastname: 'Johnson', DOB:1846, DOD:1901},
   {firstname: 'Nkem', lastname: 'Nwakwor', DOB:1936, DOD:2001}
]

const people = ['Agatha, Christie',  'Whodunit, Citizen', 'Daniele, Steele', 'Romance, Merican',
  'William, Shakespeare', 'taylor, swift', 'jk, rolling', 'Tolu, Badmus', 'Flaky, Jones', 'Matt, Robinson', 'Luke, Sheperd', 'Meredith, Grey', 'Lexie, Grey', 'Amelia, Sheperd', 'Jackson, Avery', 'April, Avery'];

//writers born in the 1900's
const nineteen = nigerianWriters.filter(function(writer){
  if(writer.DOB >1899 && writer.DOB < 2000) {
    return true;
  }
})

//names of all writers in the array
 const names = nigerianWriters.map(function(name){
   console.log(`${name.firstname} ${name.lastname}`)
 })


 //sorting writers from oldest to youngest
 //solution 1
 const ageOrder = nigerianWriters.sort(function(a,b) {
   if(a.DOB > b.DOB) {
     return 1;
   }else {
     return -1;
   }
 })
//solution 2
 //const ageOrder = nigerianWriters.sort((a,b) => a.DOB > b.DOB ? 1 : -1 )
 //console.table(ageOrder);


//summation of number of years lived by the writers
  const totalYears = nigerianWriters.reduce(function(total, writer){
    return total + (writer.DOD - writer.DOB);
  }, 0);
  console.log(totalYears);


  //sort by the number of years lived
  const yearsLived = nigerianWriters.sort(function(a,b) {
    const firstWriter = a.DOD - a.DOB;
    const nextWriter = b.DOD - b.DOB;
    if(firstWriter < nextWriter) {
      return -1;
    } else{
      return 1;
    }
  });

  console.table(yearsLived);


//sort People's last names alphabetically
  const lastName = people.sort(function(a,b) {
    const [aFirstName , aLastName]= a.split(', ');
    const [bFirstName, bLastName] = b.split(', ');
    if(aLastName > bLastName) {
      return 1
    } else {
      return -1
    }

  });
  console.log(lastName);


  //reduce - counting the instances of activity occurence
  const activity = ['dance', 'read', 'sleep', 'sing', 'dance', 'sleep', 'dance', 'read', 'sing', 'laugh', 'sleep', 'read', 'sing', 'sleep'];
  const frequency = activity.reduce(function(a,b){
    if(b in a) {
      a[b]++;
    } else {
      a[b] = 1;
    }
      return a;
  }, {})
  console.log(frequency)
