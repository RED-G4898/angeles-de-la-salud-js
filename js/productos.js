/*
 * The following code is a preliminary version of a shopping price comparator algorithm,
 * It is intended to show to users the price of several products in Farmacias Ángeles de la Salud
 * and the competition, and also to show the total price of the products selected by the user and the
 * its savings if it chooses to buy in our pharmacy.
 *
 * The whole code has been written and developed by RED with <3 for Farmacias Ángeles de la Salud as
 * part of a project from a Coderhouse course.
 */

// FAS Stand for Farmacias Ángeles de la Salud.

// Constant declaration and initialization

// Products
const FAS_PARACETAMOL_PRICE = 12;
const COMPETITION_PARACETAMOL_PRICE = 30;

const FAS_AMLODIPINE_PRICE = 30;
const COMPETITION_AMLODIPINE_PRICE = 45;

const FAS_OMEPRAZOLE_PRICE = 105;
const COMPETITION_OMEPRAZOLE_PRICE = 158;

const FAS_AMOXICILLIN_PRICE = 39;
const COMPETITION_AMOXICILLIN_PRICE = 45;

// Arrow function to calc the total price of both shopping options:
const TOTAL_PRICE = (fasProudctPrice, competitionProductPrice) => {fasTotal+=fasProudctPrice; competitionTotal+=competitionProductPrice;}

// Variables declaration and initialization

// Control variables
let fasTotal = 0;
let competitionTotal = 0;
let productsOpt;
let menuOpt;


// Main code

alert("Bienvenido al comparador de precios de Farmacias Ángeles de la Salud"); // Welcome message

menuOpt = prompt("Desea comparar el precio de algún producto? (si/no)"); // First validation to known if the user want to make a comparison

printMenuOptErrorMsg("algún"); // In case of error, the program will show an error message to introduce a valid option

// If the user wants the comparison, the program will ask for the products to compare
while (menuOpt != "no") {
    printProductMenu("", productsOpt == undefined); // First message to ask the user for the product to compare by printing the products menu

    // Control structure to validate the product to compare
    switch (productsOpt) {
        case "1":
            TOTAL_PRICE(FAS_PARACETAMOL_PRICE, COMPETITION_PARACETAMOL_PRICE);
            showProducts("Paracetamol", FAS_PARACETAMOL_PRICE, COMPETITION_PARACETAMOL_PRICE);
            showTotalPrice();
            break;
        case "2":
            TOTAL_PRICE(FAS_AMLODIPINE_PRICE, COMPETITION_AMLODIPINE_PRICE);
            showProducts("Amlodipino", FAS_AMLODIPINE_PRICE, COMPETITION_AMLODIPINE_PRICE);
            showTotalPrice();
            break;
        case "3":
            TOTAL_PRICE(FAS_OMEPRAZOLE_PRICE, COMPETITION_OMEPRAZOLE_PRICE);
            showProducts("Omeprazol", FAS_OMEPRAZOLE_PRICE, COMPETITION_OMEPRAZOLE_PRICE);
            showTotalPrice();
            break;
        case "4":
            TOTAL_PRICE(FAS_AMOXICILLIN_PRICE, COMPETITION_AMOXICILLIN_PRICE);
            showProducts("Amoxicilina", FAS_AMOXICILLIN_PRICE, COMPETITION_AMOXICILLIN_PRICE);
            showTotalPrice();
            break;
        default:
            alert("Opción inválida");
            break;
    }

    menuOpt = prompt("¿Desea comparar el precio de otro producto? (si/no)"); // Message to ask the user if he wants to compare another product

    printMenuOptErrorMsg("otro"); // In case of error, the program will show an error message to introduce a valid option

    printProductMenu("otro ", menuOpt === "si"); // If the user wants to compare another product, the program will ask for the product to compare by printing the correspondent menu form
}

// Validation to show the proper message to the user, depending on the usage of the comparison process and the selected products
if (fasTotal <= 0 && competitionTotal <= 0 && productsOpt != undefined){
    showTotalPrice();
}else if (productsOpt == undefined || (fasTotal > 0 && competitionTotal > 0)){
    alert("Gracias por usar el comparador de precios de Farmacias Ángeles de la Salud");
}

// EOF

// Function definitions

// Function to print a comparison message with the prices of the product selected by the user:
function showProducts(name, price1, price2){
    alert("El precio de " + name + " en Farmacias Ángeles de la Salud es de: $" + price1 + " mxn" + "\n" + "El precio de " + name + " en la competencia es de: $" + price2 + " mxn");
}

// Function to print the total price of each shopping option:
function showTotalPrice(){
    if (fasTotal > 0 && competitionTotal > 0){
        alert("Si compra con nosotros usted pagará un total de: $" + fasTotal + " mxn" + "\n" + "Si compra con la competencia usted pagará un total de: $" + competitionTotal + " mxn" + "\n" + "Usted ahorrará: $" + (competitionTotal - fasTotal) + " mxn");
    }
    else {
        alert("No ha seleccionado ningún producto, gracias por usar el comparador de precios de Farmacias Ángeles de la Salud");
    }
}

// Function to print an error message and ask the user for a valid option until he introduces it:
function printMenuOptErrorMsg(errorString){
    while (menuOpt != "si" && menuOpt != "no") {
        menuOpt = prompt("Opción inválida, ¿desea comparar el precio de " + errorString + " producto? (si/no)");
    }
}

// Function to print the products menu and ask the user for the product to compare:
function printProductMenu(menuString, expression){
    if (expression){
        productsOpt = prompt("¿Qué " + menuString + "producto desea comparar? (Ingrese uno de los siguientes números)\n1 - Paracetamol\n2 - Amlodipino\n3 - Omeprazol\n4 - Amoxicilina");
    }
}