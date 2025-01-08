exports.login = (req, res) => {
    res.send("<a href='/auth/google'>Login With Google</a>");
};

exports.callback = (req, res) => {
    res.redirect('/profile'); // Redirect after successful login
};

exports.profile = (req, res) => {
    if (req.isAuthenticated()) {
        res.send(`Welcome ${req.user.displayName}`);
    } else {
        res.redirect('/');
    }
};

exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.session.destroy(() => {
            res.redirect('/'); // Redirect to login after logout
        });
    });
};
 

