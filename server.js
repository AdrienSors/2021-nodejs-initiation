// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Méthode API REST
// GET →    READ
// POST →   CREATE
// PATCH / PUT → UPDATE
// DELETE → DELETE
// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
});

fastify.get('/me', function () {
    return {
        prenom: "Adrien",
        nom: "Nom",
        job: "dev",
    }
});

const avengers = ["Ironman" , "Captain America", "Spiderman"];
fastify.get('/heroes', function(){
    return avengers;
})

const student = "Siham";
const age = 18;
const data = {
    // cle: valeur
    // Si clé et valeur ont le même nom → forme raccourcie
    // student: student → student
    student,
    age,
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