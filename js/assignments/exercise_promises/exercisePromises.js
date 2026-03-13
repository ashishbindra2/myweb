// Solve the questions below:
https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.26.4&externalPlugins=&assumptions=%7B%7D
// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promis = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "success")
})

promis.then(result => console.log(result))
// #2) Run the above promise and make it console.log "success"


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "success")
}).then(result => console.log(result))
// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
})).then(results => { console.log(results[0]) })
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://jsonplaceholder.typicode.com/users'
]

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?