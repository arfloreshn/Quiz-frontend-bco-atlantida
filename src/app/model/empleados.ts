export class EmpleadosMae {

  
    constructor(
        public empleadoID: number,
        public dni: string,
        public nombres: string,
        public primerApellido: string,
        public segundoApellido: string,
        public impSalario: number,
        public fecIngreso: Date,
        public codempleado: string,
        public catArea: {
            descripcion: string,
            areaId: number
         },
        public catProfesion: {
             descripcion: string,
            profesionId: number
        },
        public catPuestos: {
            descripcion: string,
            puestoId: number
        },
        public catEstados: {
            descripcion: string,
            estadoId: number
        },
    ) {
    }
}