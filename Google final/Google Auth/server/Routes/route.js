// const express = require('express');
// const { login, callback, profile, logout } = require('../controllers/authController');
// const passport = require('passport');

// const router = express.Router();

// router.get('/', (req, res) => {
//     res.send("<a href='/auth/google'>Login With Google</a>");
// });

// router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), callback);

// router.get('/profile', profile);

// router.get('/logout', logout);

// module.exports = router;

const express = require('express');
const passport = require('passport');
const { login, callback, profile, logout } = require('../controllers/authController');

const router = express.Router();

// Root route with a login option for Google
router.get('/', (req, res) => {
    res.send("<a href='/auth/google'>Login With Google</a>");
});

// Google authentication route
router.get('/auth/google', passport.authenticate('google', { 
    scope: ['profile', 'email'] 
}));

// Google callback route
router.get('/auth/google/callback', passport.authenticate('google', { 
    failureRedirect: '/' 
}), (req, res) => {
    // Successful authentication, redirect to profile
    res.redirect('/profile');
});

// Profile route (only accessible if user is authenticated)
router.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
        res.send(`<h1>Welcome ${req.user.displayName || req.user.name}</h1>`);
    } else {
        res.redirect('/');
    }
});

// Logout route
router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.session.destroy(() => {
            res.clearCookie('connect.sid');  // Clear the session cookie
            res.redirect('/');  // Redirect to the login page after logout
        });
    });
});

module.exports = router;


