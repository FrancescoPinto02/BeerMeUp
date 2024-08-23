const beerController = {};

beerController.GetAll = async (req, res) => {
    try {
        const beers = [
            { id: 1, name: 'Pale Ale', style: 'Ale' },
            { id: 2, name: 'Lager', style: 'Lager' },
            { id: 3, name: 'Stout', style: 'Stout' }
        ];
        res.render('test', {beers});
    } catch (error) {
        res.render('error', { error: error.message });
    }
};

module.exports = beerController;