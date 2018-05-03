var mockRezepte = [
    {
        id: 1,
        name: "Kuchen",
        tags: 'süß'
    },
    {
        id: 2,
        name: "Foo-FLeisch",
        tags: 'fleisch herzhaft'
    },

];

exports.index = function (req, res) {
    //TODO hier müssen dann noch vorhandene geladenen werden
    res.render('rezepte-overview', {rezepte: mockRezepte})
};

exports.detailPage = function (req, res) {
    var id = req.params.id;
    res.send('Anfrage zu ID: ' + id);
}
