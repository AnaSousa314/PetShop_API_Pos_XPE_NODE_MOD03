import AnimalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal) {
  return await AnimalRepository.insertAnimal(animal);
}

async function updateAnimal(animal) {
  return await AnimalRepository.updateAnimal(animal);
}

async function deleteAnimal(id) {
  await AnimalRepository.deleteAnimal(id);
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal
}