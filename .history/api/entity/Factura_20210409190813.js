const EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Facturas",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        costo: {
            type: "int",
            nullable: false
        },
        fecha: {
            type: "timestamp",
            nullable: false
        }
    },
    relations: {
        usuario: {
            target: "Usuarios",
            type: "many-to-one",
            nullable: false,
            joinColumn: true
        },
        pago: {
            target: "Pagos",
            type: "one-to-many",
            inverseSide: "Facturas"
        },
        producto_facturado: {
            target: "producto_factura",
            type: "one-to-many",
            inverseSide: "Facturas"
        },
        sede: {
            target: "sede",
            type: "many-to-one",
            nullable: false,
            joinColumn: true
        }

    }
})