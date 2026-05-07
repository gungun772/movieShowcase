const express=require('express');
const path=require('path');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const chokidar = require('chokidar');
const app=express();
app.use(cors());
const filePath = path.join(__dirname, 'users.json');
mongoose.connect('mongodb://localhost:27017/G3chitkaraUsers');
const loginUserSchema = new mongoose.Schema({
  email: String,
  number: String,
  password: String
});
const LoginUser = mongoose.model('user', loginUserSchema);
const delay = ms => new Promise(res => setTimeout(res, ms));
async function syncUsersFromFile() {
  try {
    await delay(200); 
    const fileContent = await fs.promises.readFile(filePath, 'utf8');  
    const jsonData = JSON.parse(fileContent);
    if (!Array.isArray(jsonData)) {
      console.error('user.json must contain an array of user objects');
      return;
    }
    await LoginUser.deleteMany({});
    await LoginUser.insertMany(jsonData);  
    console.log(`Synced ${jsonData.length} user(s) to MongoDB`);
  } catch (err) {
    console.error('Error syncing users:', err.message);
  }
}
chokidar.watch(filePath, {
  usePolling: true,
  interval: 300,
  awaitWriteFinish: {
    stabilityThreshold: 500,
    pollInterval: 100
  }
}).on('change', () => {
  console.log('user.json changed. Syncing...');
  syncUsersFromFile();
});

//movie data store
const movieFilePath = path.join(__dirname, 'movies.json');
mongoose.connect('mongodb://localhost:27017/G3chitkaraUsers');
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  director: String,
  genre: String,
  rating: Number,
  description: String
});
const Movie = mongoose.model('movie', movieSchema);
const waitForFileSave = ms => new Promise(res => setTimeout(res, ms));
async function syncMoviesFromFile() {
  try {
    await waitForFileSave(200); 
    const fileContent = await fs.promises.readFile(movieFilePath, 'utf8');
    const jsonData = JSON.parse(fileContent);
    if (!Array.isArray(jsonData)) {
      console.error('movies.json must contain an array of movie objects');
      return;
    }
    await Movie.deleteMany({});  
    await Movie.insertMany(jsonData); 

    console.log(`Synced ${jsonData.length} movie(s) to MongoDB`);
  } catch (err) {
    console.error('Error syncing movies:', err.message);
  }
}
chokidar.watch(movieFilePath, {
  usePolling: true,
  interval: 300,
  awaitWriteFinish: {
    stabilityThreshold: 500,
    pollInterval: 100
  }
}).on('change', () => {
  console.log('movies.json changed. Syncing...');
  syncMoviesFromFile();
});
console.log('Watching for changes in movies.json...');
app.use(bodyParser.json());  
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res,next)=>{
    res.sendFile(__dirname+"/front.html");
})
app.get('/home',(req,res,next)=>{
    res.sendFile(__dirname+"/home.html");
})
app.get('/admin',(req,res,next)=>{
    res.sendFile(__dirname+"/admin.html");
})

app.get('/front',(req,res,next)=>{
    console.log(req.url);
    res.sendFile(__dirname+"/front.html");
})
app.get('/signPage',(req,res,next)=>{
    console.log(req.url);
    res.sendFile(__dirname+"/login_page.html");
})
app.get('/contact',(req,res,next)=>{
    res.sendFile(__dirname+"/contact.html");
})
app.get('/register',(req,res,next)=>{
    res.sendFile(__dirname+"/register.html");
})
app.get('/loginPage',(req,res,next)=>{
    res.sendFile(__dirname+"/signin.html");
})
app.get('/addmovie',(req,res,next)=>{
    res.sendFile(__dirname+'/add-movie.html');
})
app.get('/updatemovie',(req,res,next)=>{
    res.sendFile(__dirname+'/update-movie.html');
})
// function loadMovies() {
//     return fs.existsSync(DB_FILE) ? JSON.parse(fs.readFileSync(DB_FILE, 'utf8')) : [];
// }

// function saveMovies(movies) {
//     fs.writeFileSync(DB_FILE, JSON.stringify(movies, null, 2), 'utf8');
// }
const MOVIE_FILE = path.join(__dirname, 'movies.json');
function loadMovies() {
    return fs.existsSync(MOVIE_FILE) ? JSON.parse(fs.readFileSync(MOVIE_FILE, 'utf8')) : [];
}

function saveMovies(movies) {
    fs.writeFileSync(MOVIE_FILE, JSON.stringify(movies, null, 2), 'utf8');
}
app.get('/addition',(req,res,next)=>{
   res.sendFile(__dirname+'/movies.json')
})

app.post('/addition', (req, res) => {
    const { title, year, director, genre, rating, description } = req.body;

    
    if (!title || !year || !director || !genre || !rating || !description) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    let movies = loadMovies();

    const newMovie = { title, year, director, genre, rating, description };
    movies.push(newMovie);

    saveMovies(movies);

    res.status(201).json({ success: true, message: 'Movie added successfully' });
});


app.put('/addition/:title', (req, res) => {
    const { title } = req.params;
    const { year, director, genre, rating, description } = req.body;

  
    if (!year || !director || !genre || !rating || !description) {
        return res.status(400).json({ error: 'All fields are required' });
    }

 
    const movies = loadMovies();

   
    const index = movies.findIndex(movie => movie.title.toLowerCase() === title.toLowerCase());

    if (index === -1) {
        return res.status(404).json({ error: "Movie not found" });
    }
    movies[index] = { ...movies[index], year, director, genre, rating, description };

    saveMovies(movies);

    res.json({ success: true, message: "Movie updated successfully"  });
});

app.get('/addition/search', (req, res) => {
    const query = req.query.q ? req.query.q.toLowerCase() : '';
    const movies = loadMovies();
    const matchedMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(query)
    );
    if (matchedMovies.length === 0) {
        return res.status(404).json({ error: 'No matching movies found' });
    }
    res.json(matchedMovies[0]);  
});

app.delete('/delete-movie/:title', (req, res) => {
    const movieTitle = req.params.title.toLowerCase();
    let movies = loadMovies();
    const initialLength = movies.length;

    
    movies = movies.filter(movie => movie.title.toLowerCase() !== movieTitle);

  
    if (movies.length === initialLength) {
        return res.status(404).json({ error: "Movie not found" });
    }

   
    saveMovies(movies);

    res.json({ message: `Movie titled '${movieTitle}' has been deleted successfully.` });
});




// login code
app.get('/create-account',(req,res,next)=>{
    res.sendFile(__dirname+'users.json');
})
app.post('/create-account', (req, res) => {
    const { email, number, password } = req.body;
    if (!email || !number || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    const filePath = path.join(__dirname, 'users.json');
    let users = [];
    if (fs.existsSync(filePath)) {
        const rawData = fs.readFileSync(filePath);
        users = JSON.parse(rawData);
    }
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'Email already in use.' });
    }
    const newUser = {
        email: email,
        number: number,
        password: password,
    };
    users.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    res.status(201).json({ message: 'Account created successfully.' });
});





app.post('/updateVote', (req, res) => {
    const { buttonType, movieName } = req.body; 
    const jsonFilePath = path.join(__dirname, 'likes.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data');
        }
        let jsonData = JSON.parse(data);

        if (!jsonData[movieName]) {
            jsonData[movieName] = {
                likes: 0,
                dislikes: 0
            };
        }
        if (buttonType === 'like') {
            jsonData[movieName].likes = jsonData[movieName].likes === 1 ? 0 : 1; 
        } else if (buttonType === 'dislike') {
            jsonData[movieName].dislikes = jsonData[movieName].dislikes === 1 ? 0 : 1; 
        }
        fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
            if (err) {
                return res.status(500).send('Error writing data');
            }
            res.json({ message: 'vote updated successfully', data: jsonData[movieName] });
        });
    });
});



const emails = [];

// Route to handle form submission
app.post('/submit-email', (req, res) => {
    const email = req.body.email;

    // Store email in memory
    if (email) {
        emails.push(email); // In a real app, you would store it in a database
        console.log(`New email: ${email}`);

        // Redirect the user to the subscription page
        res.redirect(`/subscription.html?email=${encodeURIComponent(email)}`);
    } else {
        res.status(400).send('Email is required');
    }
});

// Serve the subscription page
app.get('/subscription.html', (req, res) => {
    const email = req.query.email;
    if (email) {
        res.send(`
            <html>
                <body>
                    <h1>Welcome to Subscription Page</h1>
                    <p>Thank you for signing up with: ${email}</p>
                    <!-- You can customize this subscription page -->
                </body>
            </html>
        `);
    } else {
        res.status(400).send('No email provided');
    }
});



const DATA_FILE = path.join(__dirname, "contact_data.json");


const loadData = () => {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const data = fs.readFileSync(DATA_FILE, "utf8");
            return JSON.parse(data);
        }
        return [];
    } catch (error) {
        console.error("Error loading data:", error);
        return [];
    }
};


const saveData = (data) => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
        console.log("Data saved successfully.");
    } catch (error) {
        console.error("Error saving data:", error);
    }
};


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "contact.html"));
});


app.post("/contactsubmit", (req, res) => {
    console.log("Request body:", req.body); 

    const { firstName, lastName, email, mobile, message } = req.body;

    if (!firstName || !email || !message) {
        console.log("Missing required fields"); 
        return res.status(400).json({ error: "Missing required fields" });
    }

    const newEntry = { firstName, lastName, email, mobile, message };
    console.log("New entry:", newEntry); 

    let data = loadData();
    data.push(newEntry);
    saveData(data);

    res.json({ success: true, message: "Form submitted successfully!" });
});
const PORT = process.env.PORT || 3000;
app.listen(3000,()=>{
    console.log("listening");
})