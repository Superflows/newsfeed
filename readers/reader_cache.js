const fs = require('fs');

module.exports = {

    readString: function(path) {

        var data = null;
        try {
            data = fs.readFileSync(path, 'utf8');
        } catch (err) {
            console.error(err);
        }
        return data;

    },

}