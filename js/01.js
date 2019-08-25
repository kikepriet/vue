// vamos a instanciar a con el id app
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre:'Manzana', cantidad:10},
            {nombre:'Pera', cantidad:0},
            {nombre:'Platano', cantidad:11}
        ],
        nuevaFruta: '',
        total: 0
    },
    methods:{
        agregarFruta () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevaFruta = ""; // reseteamos el input de nuevaFruta despues de la función
        }
    },
    computed: {
        sumarFrutas () {
            this.total = 0; // igualamos la variable a cero
            for (fruta of this.frutas){ // hacemos un bucle for para recorrer el arreglo de frutas
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
}) 