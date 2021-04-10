//Este archivo es para importar todas (13) las entidades a app.js e insertar nuevos registros

const categorias = require('../entity/Categorias.js')
const entidad = require ('../entity/Entidad.js')
const factura = require ('../entity/Factura.js')
const horario = require ('../entity/Horarios.js')
const roles = require ('../entity/Id_rol.js')
const Informacion_personal = require ('../entity/Informacion_personal.js')
const tarjeta = require ('../entity/Pago_tarjeta.js')
const pago = require ('../entity/Pago.js')
const producto_factura = require ('../entity/Producto_factura.js')
const producto = require ('../entity/Productos.js')
const sede = require ('../entity/Sedes.js')
const tipoDoc = require ('../entity/Tipo_documento.js')
const usuarios = require ('../entity/Usuarios.js')


module.exports = {
    categorias,
    entidad,
    factura,
    horario,
    rol,
    Informacion_personal,
    tarjeta,
    pago,
    producto_factura,
    producto,
    sedes,
    tipoDoc,
    usuarios
}