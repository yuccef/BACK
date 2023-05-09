const fs = require("fs");
const color = require("chalk");
const prompt = require("prompt-sync")();

// on lit le fichier json
const user = fs.readFileSync("data/customers.json");
const tab = JSON.parse(user);
const fichier = "./data/customers.json";

//declaration des variables
let  id, email, first, last, company1, created, country1;



//demander la couleur voulu dans le console
console.log("Vous choisissez quelle couleur? \n\
1: Cyan  \n\
2: rouge       \n\
3: jaune :\n ");

const v = prompt(" ");  //récupérer la valeur taper par l'utilisateur




/**
 * La fonction reccuperer pour reccuperer les données d'un utilisateur  
 */
function recuperer() {
console.log(color.green("Quel est l'ID?\n"));
id = prompt("");

console.log(color.green("Quel est l'email?\n"));
email = prompt("");

console.log(color.green("Quel est le prénom?\n"));
first = prompt("");

console.log(color.green("Quel est le nom?\n"));
last = prompt("");

console.log(color.green("Quel est le nom de la société?\n"));
company1 = prompt("");

console.log(color.green("Quand a-t-elle été créée?\n"));
created = prompt("");

console.log(color.green("Quel est le pays?\n"));
country1 = prompt("");
}
recuperer();



/**
 * La fonction ajouter pour ajouter un utilisateur  
 */
function ajouter() {
const user = {
id: id,
email: email,
first: first,
last: last,
company: company1,
created_at: created,
country: country1
};

tab.push(user);

const newdata = JSON.stringify(tab);
fs.writeFile("data/customers.json", newdata, err => {
if (err) throw err;
console.log("Utilisateur ajouté");
});
}
ajouter();






/**
 * La fonction Update pour Modifier un utilisateur  
 */
function update() {
const customers = JSON.parse(fs.readFileSync("./data/customers.json", "utf8"));

console.log("Quel est l'ID de l'utilisateur à modifier?\n");
const idd = prompt("");
const utilisateur = customers.find(user => user.id === idd);

console.log("Qu'est-ce que vous voulez modifier?\n");
const varr = prompt("");

console.log("Entrez la nouvelle valeur:\n");
const res = prompt("");

if (varr === "first") {
utilisateur.first = res;
}

if (varr === "last") {
utilisateur.last = res;
}

if (varr === "country") {
utilisateur.country = res;
}

if (varr === "company") {
utilisateur.company = res;
}

if (varr === "email") {
utilisateur.email = res;
}

console.log("Les données ont été mises à jour dans le fichier customers.json.");
fs.writeFileSync(fichier, JSON.stringify(customers, null, 2));
}
update();





/**
 * La fonction Delete pour supprimer un utilisateur  
 */
function  Delete (){

    
    const users = fs.readFileSync(fichier);
    let newCustomer = JSON.parse(users);
     
    console.log("Quel est en est le Id de l'ulitisateur à supprimer ? \n");
    let idd = prompt(" ");
    //findIndex permet de retrouver un user en fonction du param removeuser
    const index = newCustomer.findIndex(user => user.id === idd);
    
    if (index != -1) {
        //puis de le retirer s'il existe 
        newCustomer.splice(index, 1);
        //et de reecrire le fichier
        fs.writeFileSync(fichier, JSON.stringify(newCustomer, null, 2));
        console.log("Utilisateur supprimé .");
        return 1;
    } else 
    console.log("Utilisateur non trouvé .");
      return 0;        
}
Delete();






/**
 * La fonction Liste_Pays_Utilisateurs() qui increment la valeurs de la clé à chaque redondance sinon met la valeur de la clé à 1 
 */
function Liste_Pays_Utilisateurs()
{
    var Mapp = new Map;

    //Parcourir le tableau en enregistrant les pays/sociétés dans une map tout en incrementant la valeurs pour les doublant.
    for(var i=0;i<tab.length; i++)
    {

        if (Mapp.has(tab[i].country)) //cas ou la map contient déja ce pays comme clé
        {
            Mapp.set(tab[i].country, Mapp.get(tab[i].country) + 1);   //incrementer la valeurs de ce clé
        }
  
        else      
        {
            Mapp.set(tab[i].country,1);    // ajouter le nouveau pays comme clé en le donnant une valeurs de 1
        }

    }
    //partie d'affichage
    if(v==1){
        console.log("\x1b[36m%s\x1b[0m",Mapp); //le cyan
    }
    else if (v==2) {
        console.log("\x1b[31m%s\x1b[0m",Mapp);//le rouge 
    }
    else if (v==3) {
        console.log("\x1b[33m%s\x1b[0m",Mapp); //le jaune
    }

}





/**
 * La fonction Liste_Société_Utilisateurs() qui increment la valeurs de la clé à chaque redondance  sinon met la valeur de la clé à 1 
 */
function Liste_Société_Utilisateurs()
{
    var Mapp = new Map;
  
    for(var i=0;i<tab.length; i++)
    {

        if (Mapp.has(tab[i].company))
        {
            Mapp.set(tab[i].company, Mapp.get(tab[i].company) + 1);
        }

        else
        {
            Mapp.set(tab[i].company,1);
        }

    }
    if(v==1){
        console.log("\x1b[36m%s\x1b[0m",Mapp); //le cyan
    }
    else if (v==2) {
        console.log("\x1b[31m%s\x1b[0m",Mapp);//le rouge 
    }
    else if (v==3) {
        console.log("\x1b[33m%s\x1b[0m",Mapp); //le jaune
    }

}
   






/**
 * La fonction afficher() s'occupe d'affichage
 */
function afficher(){
//on a utiliser le console.log puisque le \n ne marche pas avec le prompt
    console.log("C'est quoi votre choix ? \n\
1: Société   \n\
2: Pays       \n\
3: Quitter :\n ");


    const c = prompt(" ");  //récupérer la valeur taper par l'utilisateur

    console.log(`vous avez choisi la couleur numero :  ${v}`); //le numero de couleur
    console.log(`et votre choix est du numero :  ${c}`); //pour afficher le choix saisi





    if(c==1){ //les societes
   
        console.log((Liste_Société_Utilisateurs())); 
  
    }
    if(c==2){  //les pays   
        console.log((Liste_Pays_Utilisateurs())); 
    }
   

    if(c==3){     //exit  
        if(v==1){
            console.log("\x1b[36m%s\x1b[0m","Good bye"); 
        }
        else if (v==2) {
            console.log("\x1b[31m%s\x1b[0m","Good bye");
        }
        else if (v==3) {
            console.log("\x1b[33m%s\x1b[0m","Good bye"); 
        }
    } 

}
afficher();







/**
 * Le main
 */
function main(){
   
    afficher();
}
main();
