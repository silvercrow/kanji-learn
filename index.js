addEventListener('fetch', (event) => { 
    const response = new Response('Hello David :D this is the second update', {
        headers: { 'Content-Type': 'text/plain' },
    });
    event.respondWith(response);
});