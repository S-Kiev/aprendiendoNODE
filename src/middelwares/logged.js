const isLogged = (req, res, next) =>{
    let logged = true;
    if (logged) {
        next();   
    }else {
        res.send('No puede acceder');
    }
};

exports.isLogged = isLogged