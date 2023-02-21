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

[👽] 05 - Consulta  de  um  proprietário  em  específico  (pegar  o  id  do  proprietário  e retornar um objeto JSON com suas informações).  
        - URL: http://localhost:8000/proprietario/{proprietario_id}    
        - Método HTTP: GET  
        - Parâmetros: Parâmetros: id do proprietário passado diretamente na URL, exemplo de um id de valor 15 passado na URL: http://localhost:3000/proprietario/15.   


### Lista de Endpoints Animais  

[👽] 01 - Criação de um animal:  
        - URL: http://localhost:8000/animal/  
        - Método HTTP: GET  
        - Parâmetros: objeto JSON com o nome do animal, tipo do animal e o id do proprietário deste animal.   

[👽] 02 - Atualização de um animal.  
        - URL: http://localhost:8000/animal/  
        - Método HTTP: PUT   
        - Parâmetros:  objeto  JSON  com  o  id  do  animal  que  será  atualizado  o nome, tipo e id do proprietário do animal que serão atualizados.   

[👽] 03 - Exclusão de um animal.  
        - URL: http://localhost:8000/animal/{animal_id}  
        - Método HTTP: DELETE
        - Parâmetros: id do animal passado diretamente na URL, exemplo de um id de valor 15 passado na URL: http://localhost:3000/animal/15.  

[👽] 04 - Consulta de todos os animais (retornar uma lista com todos os animais, sendo cada animal representado por um objeto JSON com todas as propriedades.  
        - URL: http://localhost:3000/animal
        - Método HTTP: GET   
        - Parâmetros: sem parâmetros.    

[ ] 05 - Consulta de um animal em específico (pegar o id do animal e retornar um objeto JSON com suas informações).   
        - URL: http://localhost:3000/animal/{animal_id}  
        - Método HTTP: GET   
        - Parâmetros: id do animal passado diretamente na URL, exemplo de um id de valor 15 passado na URL: http://localhost:3000/animal/15   

[ ] 06 - Consulta  dos  animais  de  um  proprietário  em  específico  (pegar  o  id  do proprietário na URL e retornar uma lista dos seus animais, sendo cada animal representado por um objeto JSON com todas as propriedades).  
        - URL: http://localhost:3000/animal?proprietario_id={proprietario_id}  
        - Método HTTP: GET   
        - Parâmetros: id do proprietário passado diretamente na URL, exemplo de um id de valor 15 passado na URL http://localhost:3000/animal?proprietario_id=15 . Sugestão: pode serusado a mesma estrutura do endpoint do item 4 que consulta todos os animais, só que aqui nesse caso ele receberia um parâmetro para filtrar o proprietário). 