
import {Tulas} from "./Tulas/Tulas";
import {Gorras} from "./Gorras/Gorras";
import { Camisetas } from "./Camisetas/Camisetas";
import { Paraguas } from "./Paraguas/Paraguas";

export const Categorias = {
    Tulas, Gorras, Camisetas, Paraguas
} 

export const AllProduct= Tulas.productos.concat(Gorras.productos).concat(Camisetas.productos).concat(Paraguas.productos);
