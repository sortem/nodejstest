module.exports = function(app, db) {
	app.post('/notes', (req, res) => {
	const note = { value: req.body.value };
	db.collection('notes').insert(note, (err, result) => {
		if (err) {
			res.send({ 'error': 'An error has occured'});
		}
		else {
			res.send(result.ops[0]);
		}
	});
  });
};