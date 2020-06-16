// for await of (es9 2018) - now allowed to iterate over the await promises
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
            ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
    } catch (err) {
        console.log('ooopss!', err)
    }
}

const loopThroughUrls = urls => {
    for (url of urls) {
        console.log(url)
    }
}

loopThroughUrls(urls)
/* RESULT:
    https://jsonplaceholder.typicode.com/users
    https://jsonplaceholder.typicode.com/posts
    https://jsonplaceholder.typicode.com/albums
    undefined
*/

const getData2 = async function() {
// creating an array of the fetched promises
    const arrayofPromises = urls.map(url => fetch(url));
// need 'await' since we're looping over promises
    for await (let request of arrayofPromises) {
// once again 'await' is needed since 'request.json()' is a promise(awaiting data)
        const data = await request.json();
// returns data
        console.log(data);
    }
}