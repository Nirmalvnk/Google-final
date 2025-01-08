// const express = require('express');
// const passport = require('passport');
// const session = require('express-session');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// require('dotenv').config();
// const cors = require('cors');


// const app = express();
// app.use(cors({ origin: 'http://localhost:3000', credentials: true }));




// console.log("Google Client ID:", process.env.GOOGLE_CLIENT_ID);
// console.log("Google Secret Key:", process.env.GOOGLE_CLIENT_SECRET);

// app.use(
//     session({
//         secret: "secret",
//         resave: false,
//         saveUninitialized: true
//     })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//             callbackURL: 'http://localhost:3000/auth/google/callback'
//         },
//         (accessToken, refreshToken, profile, done) => {
//             return done(null, profile);
//         }
//     )
// );

// passport.serializeUser((user, done) => done(null, user));
// passport.deserializeUser((user, done) => done(null, user));

// app.get("/", (req, res) => {
//     res.send("<a href='/auth/google'>Login With Google</a>");
// });

// // app.get(
// //     "/auth/google",
// //     (req,res,next)=>{
// //         req.session.destroy(()=>{
// //             next();
// //         });
// //     },
// //     passport.authenticate('google', { scope: ["profile", "email"] })
// // );

// app.get(
//     "/auth/google/callback",
//     passport.authenticate('google', {scope: ["profile", "email"], failureRedirect: "/" }),
//     (req, res) => {
//         res.redirect('http://localhost:5173/sidebar');
//     }
// );

// app.get("/profile", (req, res) => {
//     if (req.isAuthenticated()) {
//         res.send(`Welcome ${req.user.displayName}`);
//     } else {
//         res.redirect('/');
//     }
// });

// app.get("/logout", (req, res,next) => {
//     req.logout((err) => {
//         if (err) return next(err);
//         req.session.destroy(() => {
//             res.clearCookie('connect.sid'); // Clear the session cookie
//             res.redirect('/'); // Redirect to the login page
//         });
//     });
// });

// app.listen(3000, () => {
//     console.log(`Server running on port 3000`);
// });





// =====================================================================================




const express = require('express');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

console.log("Google Client ID:", process.env.GOOGLE_CLIENT_ID);
console.log("Google Secret Key:", process.env.GOOGLE_CLIENT_SECRET);
console.log("GitHub Client ID:", process.env.GITHUB_CLIENT_ID);
console.log("GitHub Secret Key:", process.env.GITHUB_CLIENT_SECRET);

app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true
    })
);

app.use(passport.initialize());
app.use(passport.session());

// Google OAuth Strategy
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: 'http://localhost:3000/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            return done(null, profile);
        }
    )
);

// GitHub OAuth Strategy
passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: 'http://localhost:3000/auth/github/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            return done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// Home Route with Links to Google and GitHub Login
app.get("/", (req, res) => {
    res.send(`
        <a href='/auth/google'>Login With Google</a><br>
        <a href='/auth/github'>Login With GitHub</a>
    `);
});

// Google Authentication Route
app.get(
    "/auth/google",
    passport.authenticate('google', { scope: ["profile", "email"] })
);

app.get(
    "/auth/google/callback",
    passport.authenticate('google', { scope: ["profile", "email"], failureRedirect: "/" }),
    (req, res) => {
        res.redirect('http://localhost:5173/sidebar');
    }
);

// GitHub Authentication Route
app.get(
    "/auth/github",
    passport.authenticate('github', { scope: ["user:email"] })
);

app.get(
    "/auth/github/callback",
    passport.authenticate('github', { failureRedirect: "/" }),
    (req, res) => {
        res.redirect('http://localhost:5173/sidebar');
    }
);

// Profile Route (Only Accessible after Login)
app.get("/profile", (req, res) => {
    if (req.isAuthenticated()) {
        res.send(`Welcome ${req.user.displayName || req.user.username}`);
    } else {
        res.redirect('/');
    }
});

// Logout Route
app.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.session.destroy(() => {
            res.clearCookie('connect.sid'); // Clear the session cookie
            res.redirect('/'); // Redirect to the login page
        });
    });
});

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});



