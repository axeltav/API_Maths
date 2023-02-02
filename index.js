const express = require('express');
let router = express.Router();
const app = express();
const port = 3000;
const randomNumberController = require("./controllers/myMath/randomizeController");
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
const swaggerAutogen = require('swagger-autogen')();

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );

app.use(express.json());

app.use("/",router);



router.get(
    /*
	#swagger.tags = ['randomNumber']
	#swagger.description = 'Récupérer un nombre aléatoire entre un Min et un Max'
	*/

	/*
	#swagger.responses[200] = {
		schema: { "$ref": "#/definitions/materielsEmprunter" },
		description: "Liste des matériels emprunter" }
	}
	*/

    '/myMath/randomize',
    randomNumberController
)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})