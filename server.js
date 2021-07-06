// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Connexion à la BdD
fastify.register(require('fastify-mongodb'), {
  // force to close the mongodb connection when app stopped
  // the default value is false
  forceClose: true,
  // 27017 est le port de mongodb par défaut.
  // pas besoin de login / password car localhost.
  url: 'mongodb://localhost:27017/superheroes'
})

// Méthode API REST
// GET →    READ
// POST →   CREATE
// PATCH / PUT → UPDATE
// DELETE → DELETE
// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
  // return peut être remplacé par :
  // reply.send(hello: 'world')
});

fastify.get('/me', function () {
    return {
        prenom: "Adrien",
        nom: "Nom",
        job: "dev"
    }
});

const avengers = ["Ironman" , "Captain America", "Spiderman"];
fastify.get('/heroes', function(){
    return avengers
})

fastify.post('/heroes', (request, reply) => {
  const collection = fastify.mongo.db.collection("heroes")
  collection.insertOne(request.body)
  return request.body
})

const student = "Siham"
const age = 18;
const data = {
    // cle: valeur
    // Si clé et valeur ont le même nom → forme raccourcie
    // student: student → student
    student,
    age
}

// Run the server!
const start = async () => {
  try {

    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start() 