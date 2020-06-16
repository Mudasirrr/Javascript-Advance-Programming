// ASYNC AWAIT

movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

// one of async/await is to make code look synchronous (syntactic sugar)
async function playerStart(){
    const first = await movePlayer(100, 'Left'); // pause
    const second = await movePlayer(400, 'Left'); // pause
    await movePlayer(10, 'Right'); // pause
    await movePlayer(330, 'Left') // pause
}

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await response.json();
    console.log(data);
}

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

// getData()