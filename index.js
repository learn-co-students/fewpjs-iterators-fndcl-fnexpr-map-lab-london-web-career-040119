const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = () => {
//  return tutorials
//}

function titleCase(tutorial){
  return tutorial.split(' ').map(function (word){
    return word[0].toUpperCase().concat(word.slice(1))
  })
}

let transformedTutorials = []

function titleCased(){
  tutorials.map(function(tutorial){
     transformedTutorials.push(titleCase(tutorial).join(' '))
})
return transformedTutorials
}
