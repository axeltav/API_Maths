let getRandomNumber = require("../../utils/randomNumber")

function randomNumber (req, res) {
    console.log(req.body)
    if(req.body){
        console.log("body")
        if(!req.body.Min || !req.body.Max){
            res.status(400);
            res.send('Au moins un des paramètres d\'entré n\'est pas valide. Entier uniquement');
        } else {
            console.log(req.body.Min,req.body.Max)
            if(!Number.isInteger(req.body.Min) || !Number.isInteger(req.body.Max)){
            res.status(400);
            res.send('Au moins un des paramètres d\'entré n\'est pas valide. Entier uniquement');
            } else {
                let number = getRandomNumber(req.body.Min,req.body.Max)
                res.json({randomNumber: number})
            }
        }
    } else {
        res.status(400);
        res.send('Au moins un des paramètres d\'entré n\'est pas valide. Entier uniquement');
    }
}

module.exports = randomNumber;