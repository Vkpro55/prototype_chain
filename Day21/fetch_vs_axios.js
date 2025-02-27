// let res =
//     await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(
//             (response) => {
//                 return response.json();
//             }
//         )
//         .then(
//             (data) => {
//                 console.log(data);
//             }
//         )
//         .catch((error) => {
//             console.log(error);
//         })

try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/123456789') // Invalid ID (doesn't exist)

    console.log(response);

} catch (error) {
    console.error('Error:', error)
}


// fetch() follows the browser's caching policy but does not cache responses itself.

fetch('https://api.example.com/data', { cache: 'no-store' }) // No caching


/**
 Available cache options:

    "default" → Uses the browser’s HTTP cache.
    "no-store" → Always fetches a fresh response.
    "reload" → Forces a fresh request from the network.
    "force-cache" → Always uses cache if available.
 */
