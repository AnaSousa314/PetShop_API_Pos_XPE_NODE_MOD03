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


export default {
  createAnimal
}