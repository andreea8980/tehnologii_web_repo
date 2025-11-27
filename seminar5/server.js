import http from 'http'; 
const dataStore = [
    { id: 1, name: "Laptop", price: 2500 },
    { id: 12, name: "Mouse", price: 50 },
    { id: 123, name: "Keyboard", price: 150 }
];

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'application/json');

    if (method === 'GET') {
        const urlParts = url.split('/');

        if (urlParts.length === 3 && urlParts[1] === 'resources') {
            const resourceId = parseInt(urlParts[2]);

            const resource = dataStore.find(r => r.id === resourceId);

            if (resource) {
                res.writeHead(200);
                res.end(JSON.stringify(resource));
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ message: `resursa cu ID-ul ${resourceId} nu a fost gasita` }));
            }
            return; 
        }

        if (url === '/') {
            res.writeHead(200);
            res.end(JSON.stringify({ message: 'serverul ruleaza' }));
            return;
        }
    }

    res.writeHead(404);
    res.end(JSON.stringify({ message: 'eroare' }));
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`serverul ruleaza la adresa http://localhost:${PORT}`);
});