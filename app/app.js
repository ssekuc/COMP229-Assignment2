// Third-Party Modules
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

// ES Modules fix for __dirname
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Auth Step 1 - import modules
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

// Auth Step 2 - defien auth strategy
let localStrategy = passportLocal.Strategy;

// Auth Step 3 - import the user model
import user from './models/user.js';

// Configuration Module
import { Secret } from '../config/config.js';

// Import Routes
import indexRouter from './routes/index.route.server.js'
import authRouter from './routes/auth.route.server.js'

// Instantiate Express Application
const app = express();

// Set Up Middlewares

// Setup ViewEngine EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname,'/client')));
app.use(express.static(path.join(__dirname,'../public')));
app.use(express.static('public'));

// Auth Step 4 - Setup Express Session
app.use(session({
    secret: Secret,
    saveUninitialized: false, 
    resave: false
}));

// Auth Step 5 - Setup Flash
app.use(flash());

// Auth Step 6 - Initialize Passport and Session
app.use(passport.initialize()),
app.use(passport.session());

// Auth Setup 7 - Implementing the Auth strategy
passport.use(user.createStrategy());

// Auth Setup 8 - Setup serialization and deserealization
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

// Use Routes
app.use('/', indexRouter);
app.use('/', authRouter);


export default app;

