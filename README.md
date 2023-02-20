# PetShop API 

## Trabalho Prático Módulo 03 do Bootcamp de NodeJS 

### Lista de Endpoints Proprietário

[👽] 01 - Criação de um proprietário:  
        - URL: http://localhost:8000/proprietario  
        - Método HTTP: POST
        - Parâmetros: objeto JSON com o nome e telefone do proprietário. 

[👽] 02 - Atualização de um proprietário:
        - URL: http://localhost:8000/proprietario
        - Método HTTP: PUT 
        - Parâmetros: objeto JSON com o id do proprietário que será atualizado, o nome e telefone que serão atualizados. 

[👽] 03 - Exclusão de um proprietário (antes de excluir um proprietário, verificar se existem animais cadastrados para ele. Caso exista, bloquear a exclusão). 
        - URL: http://localhost:8000/proprietario
        - Método HTTP: DELETE
        - Parâmetros: id do proprietário passado diretamente na URL, exemplo de um id de valor 15 passado na URL: http://localhost:8000/proprietario/15.

[👽] 04 - Consulta  de  todos  os  proprietários  (retornar  uma  lista  com  todos  os proprietários, sendo cada proprietário representado por um objeto JSON com todas as propriedades).   
        - URL: http://localhost:8000/proprietario  
        - Método HTTP: GET
        - Parâmetros: sem parâmetros.

[ ] 05 - Consulta  de  um  proprietário  em  específico  (pegar  o  id  do  proprietário  e retornar um objeto JSON com suas informações).
        - URL: http://localhost:8000/proprietario/{proprietario_id} 
        - Método HTTP: GET
        - Parâmetros: Parâmetros: id do proprietário passado diretamente na URL, exemplo de um id de valor 15 passado na URL: http://localhost:3000/proprietario/15. 