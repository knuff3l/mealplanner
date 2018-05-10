var mockRezepte = [
    {
        id: 1,
        name: "Kuchen",
        zutaten:[
            {
                menge:"1kg",
                zutat:"Liebe"
            },
            {
                menge:"1 Prise",
                zutat:"Spaß"
            }
        ],
        zubereitung:[
            {schritt:"Klein hacken und lieb sein"},
            {schritt:"Alles in einen Topp"},
            {schritt:"Essen"},
        ]
    },
    {
        id: 2,
        name: "Foo-FLeisch",
        zutaten:[
            {
                menge:"1kg",
                zutat:"Fleisch"
            },
            {
                menge:"viel mehr",
                zutat:"Fleeesch"
            }
        ],
        zubereitung:[
            {schritt:"Braten"},
            {schritt:"Würzen"},
            {schritt:"Verschlingen"},
        ]
    },

];

exports.index = function (req, res) {
    //TODO hier müssen dann noch vorhandene geladenen werden
    res.render('rezepte-overview', {rezepte: mockRezepte})
};

exports.detailPage = function (req, res) {
    var id = req.params.id;
    var rezept = mockRezepte[id-1];

    res.render('rezept-detail',{name:rezept.name,zutaten:rezept.zutaten,zubereitung:rezept.zubereitung})
}

exports.rezept_create_get = function (req, res) {
    res.render('rezept-form');
};
exports.rezept_create_post = function (req, res) {
    res.send('Under construction post')
};
