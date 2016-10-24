var fs = require('fs');


var pathToKill = "E:/a/";
var mum = 0;
rmDir = function (dirPath) {
    try {
        mum = mum + 1;
        var files = fs.readdirSync(dirPath);
        if (files.length > 0)
            for (var i = 0; i < files.length; i++) {
                var filePath = dirPath + '/' + files[i];

                if (fs.statSync(filePath).isFile())
                    fs.unlinkSync(filePath);
                else {
                    fs.renameSync(filePath, pathToKill + mum);
                    console.log("Limpo");
                    filePath = pathToKill + mum;
                    rmDir(filePath);
                }

            }
        fs.rmdirSync(dirPath);
    }
    catch (e) {
        try {
            rmDir(filePath);
        }
        catch (ex) {
        }

    }
};

rmDir(pathToKill);