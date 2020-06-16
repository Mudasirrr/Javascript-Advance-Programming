// What you have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];// What you need
//   [20, 24, 56, 88]

console.log("For Each Loop")
officers.forEach(function(officer){
    console.log((officer.id))
    // return officer.id;
})
console.log(ret)
  

console.log("map")
var officersId = officers.map(inde=>inde.id)
console.log(officersId)