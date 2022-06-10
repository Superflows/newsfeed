const { json }                  = require("body-parser");

module.exports                  = {

    getList: function(jsonStr) {

        const jsonObj           = JSON.parse(jsonStr);
        var arrRet              = [];

        for(var i = 0; i < jsonObj.length; i++) {
            arrRet.push({
                id              : jsonObj[i].id,
                title           : jsonObj[i].title,
                author          : jsonObj[i].author
            });
        }
        return arrRet;

    },


    getDetail: function(jsonStr, id) {

        const jsonObj           = JSON.parse(jsonStr);
        var arrRet              = null;

        for(var i = 0; i < jsonObj.length; i++) {
            console.log(jsonObj[i].id, id)
            if(id               == jsonObj[i].id) {
                arrRet          = jsonObj[i];
                break;
            }
            
        }
        return arrRet;

    },
}