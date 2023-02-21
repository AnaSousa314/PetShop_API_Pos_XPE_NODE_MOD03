import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next) {
  try {
    let animal = req.body;

    if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
      throw new Error("Nome, Tipo e Proprietario ID são obrigatórios.");
    }

    animal = await AnimalService.createAnimal(animal);
    res.send(animal);
    logger.info(`POST /proprietario - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err)
  }
}

async function updateAnimal(req, res, next) {
  try {
    let animal = req.body;

    if (!animal.animal_id || !animal.proprietario_id || !animal.nome || !animal.tipo) {
      throw new Error("Animal ID, Proprietario ID, Nome e Tipo são obrigatórios.");
    }
    animal = await AnimalService.updateAnimal(animal);
    res.send(animal);
    logger.info(`PUT /proprietario - ${JSON.stringify(animal)}`)
  } catch (err) {
    next(err);
  }
}


export default {
  createAnimal,
  updateAnimal
}