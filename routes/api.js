
module.exports = (app, db) => {

  app.get('/api/all', (req, res) => {
    db.Items.findAll({}).then((result) => {
      res.json(result);
    })
  });


  app.post('/api/new', (req, res) => {
    db.Items.create({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price
    })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    })
  });

  app.put('/api/update/:id', (req, res) => {
    db.Items.update({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price
    }, {
      where: {
        id: req.params.id
      }
    })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    })
  })

  // Delete
  app.delete('/api/delete/:id', (req, res) => {
    db.Items.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      res.json('Successfully deleted.');
    })

    .catch((err) => {
      res.json(err);
    })
  })
}