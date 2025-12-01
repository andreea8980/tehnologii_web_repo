import express from 'express';
import Book from './book.js';
import statusRouter from './statusRouter.js';

const app=express();
const port=3000;
const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] Metoda: ${req.method} | URL: ${req.originalUrl}`);
    next();
};

app.use(requestLogger); 

app.use(express.urlencoded({extended:true}));
app.use(express.json())

const bookRouter=express.Router();
app.use('/api', bookRouter);
app.use('/api/status', statusRouter);

app.get('/', (req,res)=>{
    res.send('Welcome to my API');

})
app.listen(port,()=>{
    console.log('Running on port '+port);
})

let books = [new Book(1, "Dune", "sf", "Frank Herbert"),
new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
new Book(3, "Foundation", "sf", "Asimov")]

bookRouter.route('/books')
.get((req, res) => { 
    let filteredBooks = [];
    if (req.query.genre) {
        filteredBooks = books.filter(x => x.genre === req.query.genre);
    } else {
        filteredBooks = books; 
    }
    res.json(filteredBooks);
})
.post((req, res) => { 
    let newBook = new Book(req.body.id,
        req.body.name, 
        req.body.genre,
         req.body.author);

   books.push(newBook);
   console.log(books);
   return res.json(newBook);
})
bookRouter.route('/books/:bookId')
    .put((req, res) => {
        let bookModif = books.find(e => e.id === Number(req.params.bookId))
        bookModif.genre = req.body.genre
        bookModif.author = bookModif.author
        return res.json(bookModif)
    })
    .delete((req, res) => {
        const bookIdToDelete = Number(req.params.bookId);
        const initialLength = books.length;
        books = books.filter(book => book.id !== bookIdToDelete);
        if (books.length < initialLength) {
            console.log(`Cartea cu ID-ul ${bookIdToDelete} a fost stearsa`);
            return res.status(204).send(); 
        } else {
            return res.status(404).json({ error: `Cartea cu ID-ul ${bookIdToDelete} nu a fost gasita.` });
        }
    });