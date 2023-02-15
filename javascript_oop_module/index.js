import { TableApp } from "./table.js";

const DataTable = new TableApp({
    columns: ["ID", "Nama", "Email"],
    data: [
        ["20102321", "Vicky", "vicky13@gmail.com"],
        ["20192323", "Galih", "galih99@gmail.com"],
    ],
});

const app = document.querySelector(".table-app");

DataTable.render(app);
