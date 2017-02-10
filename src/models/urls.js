const db = require('./db');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Add Function Export
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.add = (data, err, success) => {
    db.url.create(data).then(success).catch(err);
    console.log("Url was Added from Models");
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// All Function Export
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.all = (err, success) => {
    db.url.findAll().then(success).catch(err);
    console.log("Urls found from Models");
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// One Function Export
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.one = (data, err, success) => {
    db.url.find({
        where: {
            id: data.id,
        },
        include: [{
            all: true,
            nested: true,
        }],
    }).then(success).catch(err);
    console.log("Url found in Models");
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Update Function Export
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.update = (data, err, success) => {
    db.url.find({
        where: {
            id: data.id,
        },
    }).then((existingData) => {
        existingData.updateAttributes(data).then(success).catch(err);
    }).catch(err);
    console.log("Url Updated from Models");
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Remove Function Export
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.remove = (data, err, success) => {
    db.url.destroy({
        where: {
            shortUrl: data.shortUrl,
        },
    }).then(success).catch(err);
    console.log("Url Removed from Models");
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Redirect Function Export
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.go = (data, err, success) => {
    db.url.find({
        where: {
            shortUrl: data.shortUrl,
        },
    }).then(success).catch(err);
    console.log("shortUrl found in Models");
};
