module.exports = {
    index: (req, res) => {
    res.render('movies/index')
}
};

const Movie = require('../models/movie');

const moviesController = {};

moviesController.index = (req, res) => {
    Movie.findAll()
        .then(movies => {
        res.render('movies/index', { movies: movies });
})
.catch(err => {
        res.status(400).json(err);
});
};

moviesController.show = (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => {
        res.render('movies/show', { movie: movie })
})
.catch(err => {
        res.status(400).json(err);
});
};

moviesController.edit = (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => {
        res.render('movies/edit', { movie: movie })
})
.catch(err => {
        res.status(400).json(err);
});
};

moviesController.update = (req, res) => {
    Movie.update({
        title: req.body.title,
        description: req.body.description
    }, req.params.id)
        .then(() => {
        res.redirect(`/movies/${req.params.id}`)
})
.catch(err => {
        res.status(400).json(err);
});
};

moviesController.new = (req, res) => {
    res.render('movies/new')
};

moviesController.create = (req, res) => {
    Movie.create({
        title: req.body.title,
        description: req.body.description
    })
        .then(movie => {
        res.redirect(`/movies/${movie.id}`)
})
.catch(err => {
        res.status(400).json(err);
});
};

moviesController.destroy = (req, res) => {
    Movie.destroy(req.params.id)
        .then(() => {
        res.redirect('/movies')
})
.catch(err => {
        res.status(400).json(err);
});
};


module.exports = moviesController;

