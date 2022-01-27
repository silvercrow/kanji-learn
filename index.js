addEventListener('fetch', (event) => { 
    const response = new Response('Hello David :D', {
        headers: { 'Content-Type': 'text/plain' },
    });
    event.respondWith(response);
});