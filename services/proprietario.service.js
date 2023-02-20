import OwnerRepository from "../repositories/proprietario.repository.js";

async function createOwner(owner) {
  return await OwnerRepository.insertOwner(owner);
}

async function updateOwner(owner) {
  return await OwnerRepository.updateOwner(owner);
}

async function deleteOwner(id) {
  await OwnerRepository.deleteOwner(id);
}

async function getOwners() {
  return await OwnerRepository.getOwners();
}



export default {
  createOwner,
  deleteOwner,
  updateOwner,
  getOwners
}