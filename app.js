#!/usr/bin/env node
const fs = require('fs');

if (process.argv.length == 2) {
    console.log('[HAKAI] Utilize `$ hakai "<caminho>"` (Não se esqueça das aspas)')
    return;
}

let pathToKill = process.argv[2];
let mum = 0;
hakai = function (dirPath) {
    try {
        if (!fs.existsSync(dirPath)) {
            console.log('[HAKAI] O caminho ' + dirPath + ' não existe.')
            return;
        }
        mum = mum + 1;
        const files = fs.readdirSync(dirPath);
        if (files.length > 0)

            for (let i = 0; i < files.length; i++) {
                var filePath = dirPath + '/' + files[i];

                if (fs.statSync(filePath).isFile())
                    fs.unlinkSync(filePath);
                else {
                    fs.renameSync(filePath, pathToKill + mum);
                    filePath = pathToKill + mum;
                    hakai(filePath);
                }

            }

        fs.rmdirSync(dirPath);
    }
    catch (e) {
        console.error(e.message);

        try {
            hakai(filePath);
        }
        catch (ex) {
            console.error(ex.message);
        }
    }
};


console.log("[HAKAI] Iniciando exclusão de todos os arquivos do caminho: " + pathToKill);
hakai(pathToKill);