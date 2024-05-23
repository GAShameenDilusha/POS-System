import {CustomerModel} from "../model/CustomerModel.js";
import {ItemModel} from "../model/ItemModel.js";

export var customer_db = [
    new CustomerModel("C001", "Amal", "Panadura", "0718820985"),
    new CustomerModel("C002", "Thesandu", "Negombo", "0767720985"),
    new CustomerModel("C003", "Ramal", "Panadura", "0784120985"),
    new CustomerModel("C004", "Namal", "Colombo", "0718820911"),
    new CustomerModel("C005", "Dilusha", "Galle", "0778820985")

];
export var item_db = [

    new ItemModel("I001", "Cake", 150.00, 100),
    new ItemModel("I002", "Pen", 250.00, 50),
    new ItemModel("I003", "Banana", 50.00, 80),
    new ItemModel("I004", "Apple", 350.00, 80),
    new ItemModel("I005", "Rollo", 120.00, 10)


];


export var order_db = []
