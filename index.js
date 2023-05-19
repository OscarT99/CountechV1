const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const puerto = 8088

//Servidor de contenido estatico
app.use(express.static('public'))

//Configuración del directorio de las vistas hbs
app.set('views',path.join(__dirname+'/public/views'))
app.set('view engine','hbs')


//Configuración del directorio que guardará los archivos partials hbs
hbs.registerPartials(__dirname+'/public/views/partials/');

app.get('/',(req, res) => {
    res.render('login')
})

app.get('/index',(req, res) => {
    res.render('index')
})

app.get('/clientes', (req, res) => {
    const clientes = [
        {
            idCliente : 1,
            tipoCliente : 'Empresa',
            TipoIdentificacion : 'NIT',
            numeroIdentificacion : '910.251.426-1',
            razonSocial : 'Insubordados Medellín S.A.S',
            nombreComercial : 'Insubordados',
            ciudad : 'Medellín',
            dirección : 'CL 15 47A 78',
            telefono : '604 152 6448',
            correo : 'compras@ibd.com.co',
            contacto: 'Juan Pablo Valencia',
            estado: 'Activo'
        },
        {
            idCliente : 2,
            tipoCliente : 'Empresa',
            TipoIdentificacion : 'NIT',
            numeroIdentificacion : '911.159.784-4',
            razonSocial : 'Monastery S.A.S',
            nombreComercial : 'Monastery',
            ciudad : 'Medellín',
            dirección : 'CR 15 48 79',
            telefono : '604 604 1548',
            correo : 'contabilidad@monastery.com.co',
            contacto : 'Maria Fernada Niño',
            estado: 'Activo'
        },
        {
            idCliente : 3,
            tipoCliente : 'Empresa',
            TipoIdentificacion : 'NIT',
            numeroIdentificacion : '912.356.745-8',
            razonSocial : 'Productos Personalizados S.A',
            nombreComercial : 'Pryma',
            ciudad : 'Itagui',
            dirección : 'AV 15 48AA 78',
            telefono : '604 326455',
            correo : 'prymas@gmail.com',
            contacto : 'Miguel Antonio Alvarez',
            estado: 'Activo'
        }
    ];
    res.render('clientes', { 
        titulo : 'Countech',
        user_name : 'Oscar Torres', 
        consecutivo: 'Clientes',
        listaClientes: clientes
    });
})

app.get('/proveedores', (req, res) => {
    const proveedores = [
        {
            idProveedor : 1,
            tipoCliente : 'Empresa',
            TipoIdentificacion : 'NIT',
            numeroIdentificacion : '910.251.426-1',
            razonSocial : 'Insubordados Medellín S.A.S',
            nombreComercial : 'Insubordados',
            ciudad : 'Medellín',
            dirección : 'CL 15 47A 78',
            telefono : '604 152 6448',
            correo : 'compras@ibd.com.co',
            contacto: 'Juan Pablo Valencia',
            estado: 'Activo'
        },
        {
            idProveedor : 2,
            tipoCliente : 'Empresa',
            TipoIdentificacion : 'NIT',
            numeroIdentificacion : '911.159.784-4',
            razonSocial : 'Monastery S.A.S',
            nombreComercial : 'Monastery',
            ciudad : 'Medellín',
            dirección : 'CR 15 48 79',
            telefono : '604 604 1548',
            correo : 'contabilidad@monastery.com.co',
            contacto : 'Maria Fernada Niño',
            estado: 'Activo'
        },
        {
            idProveedor : 3,
            tipoCliente : 'Empresa',
            TipoIdentificacion : 'NIT',
            numeroIdentificacion : '912.356.745-8',
            razonSocial : 'Productos Personalizados S.A',
            nombreComercial : 'Pryma',
            ciudad : 'Itagui',
            dirección : 'AV 15 48AA 78',
            telefono : '604 326455',
            correo : 'prymas@gmail.com',
            contacto : 'Miguel Antonio Alvarez',
            estado: 'Activo'
        }
    ];
    res.render('proveedores', { 
        titulo : 'Countech',
        user_name : 'Miguel Angel', 
        consecutivo: 'Proveedores',
        listaProveedores: proveedores
    });
})

app.get('/empleados', (req, res) =>{
    const empleados = [
        {
            idEmpleado : 1,
            cedula : '1017254789',
            nombre : 'Elizabeth',
            correo : 'eliza@gmail.com',
            telefono : '604 152 7587',
            ciudad : 'Bello',
            direccion : 'Av 47 15a 23',
            fechaIngreso : '2023/01/01',
            estado : 'Activo'
        },
        {
            idEmpleado : 2,
            cedula : '1020458781',
            nombre : 'Sorany Serrano',
            correo : 'Manuela@gmail.com',
            telefono : '311 251 4187',
            ciudad : 'Bello',
            direccion : 'Av 48 15 48',
            fechaIngreso : '2023/01/01',
            estado : 'Activo'
        },
        {
            idEmpleado : 3,
            cedula : '1017452187',
            nombre : 'Cesar Torres',
            correo : 'cesar@hotmail.com',
            telefono : '311 154 7814',
            ciudad : 'Bello',
            direccion : 'CR 15 48 78',
            fechaIngreso : '2023/10/01',
            estado : 'Activo'
        }
    ];
    res.render('empleados',{
        titulo : 'Countech',
        user_name : 'Oscar Torres', 
        consecutivo: 'Empleados',
        listaEmpleados: empleados
    })
})

//Vista de producción

app.get('/produccion',(req, res) => {
    const produccion = [
        {
            idProduccion : 1,
            cliente : 'Insubordados Medellin S.A.S',
            ordenTrabajo : 201152,
            fechaRegistro : new Date().toISOString().split('T')[0],
            fechaEntregaTrabajo : '2023/06/01',
            observaciones : 'Entregar lo mas pronto posible',
            estado : 'Proceso',
            servicio: 'Fileteadora',
            referencia: '2548754',
            color: 'Rojo',
            s: 50,
            m: 50,
            l: 50,
            xl: 50,
            total: 200,
            unidAsignada: 0,
            unidTerminada: 50,
            unidPendiente: 150
        },
        {
            idProduccion : 2,
            cliente : 'Insubordados Medellin S.A.S',
            ordenTrabajo : 201152,
            fechaRegistro : new Date().toISOString().split('T')[0],
            fechaEntregaTrabajo : '2023/06/01',
            observaciones : 'Entregar lo mas pronto posible',
            estado : 'Proceso',
            servicio: 'Fileteadora',
            referencia: '2548754',
            color: 'Rojo',
            s: 50,
            m: 50,
            l: 50,
            xl: 50,
            total: 200,
            unidAsignada: 0,
            unidTerminada: 50,
            unidPendiente: 150
        },
        {
            idProduccion : 3,
            cliente : 'Insubordados Medellin S.A.S',
            ordenTrabajo : 201152,
            fechaRegistro : new Date().toISOString().split('T')[0],
            fechaEntregaTrabajo : '2023/06/01',
            observaciones : 'Entregar lo mas pronto posible',
            estado : 'Proceso',
            servicio: 'Fileteadora',
            referencia: '2548754',
            color: 'Rojo',
            s: 50,
            m: 50,
            l: 50,
            xl: 50,
            total: 200,
            unidAsignada: 0,
            unidTerminada: 50,
            unidPendiente: 150
        }
    ];

    res.render('produccion', { 
        registroProduccion: produccion
    });
})

app.get('/registroProduccion',(req, res) => {
    const registroProduccion = [
        {
            idProduccion : 1,
            cliente : 'Insubordados Medellin S.A.S',
            ordenTrabajo : 201152,
            fechaRegistro : new Date().toISOString().split('T')[0],
            fechaEntregaTrabajo : '2023/06/01',
            observaciones : 'Entregar lo mas pronto posible',
            estado : 'Terminado',
            servicio: 'Fileteadora',
            referencia: '2548754',
            color: 'Rojo',
            s: 50,
            m: 50,
            l: 50,
            xl: 50,
            total: 200,
            unidAsignada: 0,
            unidTerminada: 200,
            unidPendiente: 0
        },
        {
            idProduccion : 2,
            cliente : 'Insubordados Medellin S.A.S',
            ordenTrabajo : 201152,
            fechaRegistro : new Date().toISOString().split('T')[0],
            fechaEntregaTrabajo : '2023/06/01',
            observaciones : 'Entregar lo mas pronto posible',
            estado : 'Terminado',
            servicio: 'Fileteadora',
            referencia: '2548754',
            color: 'Rojo',
            s: 50,
            m: 50,
            l: 50,
            xl: 50,
            total: 200,
            unidAsignada: 0,
            unidTerminada: 200,
            unidPendiente: 0
        },
        {
            idProduccion : 3,
            cliente : 'Insubordados Medellin S.A.S',
            ordenTrabajo : 201152,
            fechaRegistro : new Date().toISOString().split('T')[0],
            fechaEntregaTrabajo : '2023/06/01',
            observaciones : 'Entregar lo mas pronto posible',
            estado : 'Terminado',
            servicio: 'Fileteadora',
            referencia: '2548754',
            color: 'Rojo',
            s: 50,
            m: 50,
            l: 50,
            xl: 50,
            total: 200,
            unidAsignada: 0,
            unidTerminada: 200,
            unidPendiente: 0
        }
    ];

    res.render('registroProduccion', { 
        registroProduccionFinalizado: registroProduccion
    });
})

app.get('/compras',(req, res) => {
    const registroDetalleCompra = [
        {
            idInsumo : 1,
            insumo : 'Hilos',
            descripcion : 'Pequeñas',
            cantidad : 20,
            valUnit : 5500,
            subtotal : 110000,
            iva: 11000,
            total: 122000
        },
        {
            idInsumo : 2,
            insumo : 'Tijeras',
            descripcion : 'Grandes',
            cantidad : 5,
            valUnit : 20000,
            subtotal : 100000,
            iva: 10000,
            total: 110000
        }
        ,
        {
            idInsumo : 3,
            insumo : 'Agujas',
            descripcion : 'Doble punta',
            cantidad : 5,
            valUnit : 10000,
            subtotal : 50000,
            iva: 5000,
            total: 55000
        }
        ,
        {
            idInsumo : 4,
            insumo : 'Cinta',
            descripcion : 'Grande',
            cantidad : 10,
            valUnit : 5000,
            subtotal : 50000,
            iva: 5000,
            total: 55000
        }
        
    ];
    const compras = [
        {
            idCompra : 1,
            proveedor : 'Insubordados Medellin S.A.S',
            contacto : 'Alfredo Perez',
            factura : 'A001',
            fechaCompra : '2023/06/01',
            fechaRegistro : '2023/07/01',
            valorTotal: 342000,
            pago: 'Contado'
        }
    ];



    res.render('compras', { 
        registroCompras: compras,
        registroDetalle: registroDetalleCompra
    });
})

app.get('/jornadaLaboral',(req, res) => {
    const jornadaLaboral = [
        {
            idJornada : 1,
            empleado: 'Oscar Lopez',
            fecha: 'Marzo 25',
            horaIngreso: '7:00am',
            horaSalida: '4:00pm',
            horasTrabajadas: '9 horas',
            valor: '$ 45.000',
            estado: 'Pendiente'
        },
        {
            idJornada : 2,
            empleado: 'Paula Niño',
            fecha: 'Marzo 25',
            horaIngreso: '7:00am',
            horaSalida: '4:00pm',
            horasTrabajadas: '9 horas',
            valor: '$ 45.000',
            estado: 'Pendiente'  
        },
        { idJornada : 3,
        empleado: 'Martin Pinzón',
        fecha: 'Marzo 25',
        horaIngreso: '9:00am',
        horaSalida: '1:00pm',
        horasTrabajadas: '9 horas',
        valor: '$ 180.000',
        estado: 'Pendiente'
    }
       
    ];

    res.render('jornadaLaboral', { 
        registroJornadaLaboral: jornadaLaboral
    });
})

app.get('/rendimiento',(req, res) => {
    const rendimiento = [
        {

            idRendimiento : 1,
            pedido: 25478,
            referencia: 1254,
            servicio: 'Fileteadora',
            empleado: 'Oscar Lopez',
            cantidad: 12,
            talla: 'L',
            fecha: 'Marzo 25',
            horaInicio: '7:00am',
            horaFinal: '4:00pm',
            estado: 'Finalizado'
        },
        {

            idRendimiento : 2,
            pedido: 25478,
            referencia: 1254,
            servicio: 'Fileteadora',
            empleado: 'Oscar Lopez',
            cantidad: 55,
            talla: 'S',
            fecha: 'Marzo 25',
            horaInicio: '7:00am',
            horaFinal: '',
            estado: 'Pendiente'
        }
       
    ];

    res.render('rendimiento', { 
        registroRendimiento: rendimiento
    });
})

app.get('/usuarios',(req, res) => {
    const usuarios = [
        {

            idUsuario : 1,
            nombre: 'Juan Felipe',
            cedula: '105748214',
            correo: 'juan@gmail.com',
            estado: 'Activo',

        },
        {
            idUsuario : 1,
            nombre: 'Valeria Suarez',
            cedula: '105748214',
            correo: 'valeria07@gmail.com',
            estado: 'Activo',
        }
       
    ];

    res.render('usuarios', { 
        registroUsuarios: usuarios
    });
})

app.get('/pedidos',(req, res) =>{
    const pedidos = [
        {
            idPedido : 1,
            cliente : 'Insubordados Medellin S.A.S',
            ordenTrabajo : 201152,
            fechaOrdenTrabajo : '2023/05/01',
            fechaRegistro : new Date().toISOString().split('T')[0],
            fechaEntregaTrabajo : '2023/06/01',
            fechaTerminado : '2023/05/30',
            valorTotal : 1650000,
            formaPago : 'Contado',
            observaciones : 'Entregar lo mas pronto posible',
            estado : 'Terminado'
      },
      {
            idPedido : 2,
            cliente : 'Telas Exclusivas S.A.S',
            ordenTrabajo : 152147,
            fechaOrdenTrabajo : '2023/05/05',
            fechaRegistro : new Date().toISOString().split('T')[0],
            fechaEntregaTrabajo : '2023/06/15',
            fechaTerminado : '2023/06/10',
            valorTotal : 2730000,
            formaPago : 'Contado',
            observaciones : 'Entregar contada las unidades',
            estado : 'En proceso'
      },
      {
        idPedido : 3,
            cliente : 'Monastery S.A.S',
            ordenTrabajo : 144785,
            fechaOrdenTrabajo : '2023/05/15',
            fechaRegistro : new Date().toISOString().split('T')[0],
            fechaEntregaTrabajo : '2023/06/30',
            fechaTerminado : null,
            valorTotal : 3100000,
            formaPago : 'Credito',
            observaciones : 'Llego varias unidades de segunda',
            estado : 'Ingresado'
      }
    ];
    res.render('pedidos',{
        titulo : 'Countech',
        user_name : 'Oscar Torres', 
        consecutivo: 'Pedidos',
        listaPedidos: pedidos
    })
})

app.get('/nuevoProveedor', (req, res) => {
    
    res.render('nuevoProveedor', { 
        titulo : 'Countech',
        user_name : 'Miguel Angel', 
        consecutivo: 'Formulario',
        subtitulo:'Nuevo Proveedor'
    });
})

app.get('/nuevoCliente', (req, res) => {
    
    res.render('nuevoCliente', { 
        titulo : 'Countech',
        user_name : 'Oscar Torres', 
        consecutivo: 'Formulario',
        subtitulo:'Nuevo Cliente'
    });
})

app.get('/nuevoUsuario', (req, res) => {
    
    res.render('nuevoUsuario', { 
        titulo : 'Countech',
        user_name : 'Miguel Angel', 
        consecutivo: 'Formulario',
        subtitulo:'Nuevo usuario'
    });
})

app.get('/nuevoEmpleado', (req, res) => {
    
    res.render('nuevoEmpleado', { 
        titulo : 'Countech',
        user_name : 'Oscar Torres', 
        consecutivo: 'Formulario',
        subtitulo:'Nuevo Empleado'
    });
})

app.get('/nuevaCompra', (req, res) => {
    
    res.render('nuevaCompra', { 
        titulo : 'Countech',
        user_name : 'Miguel Angel', 
        consecutivo: 'Formulario',
        subtitulo:'Nueva Compra'
    });
})

app.get('/nuevoPedido', (req, res) => {
    
    res.render('nuevoPedido', { 
        titulo : 'Countech',
        user_name : 'Oscar Torres', 
        consecutivo: 'Formulario',
        subtitulo:'Nuevo Pedido'
    });
})

app.get('/nuevaTarea', (req, res) => {
    
    res.render('nuevaTarea', { 
        titulo : 'Countech',
        user_name : 'Martin Piznon', 
        consecutivo: 'Formulario',
        subtitulo:'Nueva tarea'

    });
})

app.get('/jornadaEmpleado', (req, res) => {
    const jornadaEmpleado = [
        {
            idRegEmpleado : 1,
            empleado : 'Paula Niño',
        },
        {
            idRegEmpleado : 2,
            empleado : 'Miguel Zapata',
        },
        {
            idRegEmpleado : 3,
            empleado : 'Oscar Lopez',
        }


    ];

    res.render('jornadaEmpleado', { 
        titulo : 'Countech',
        user_name : 'Martin Pinzon', 
        consecutivo: 'Formulario',
        subtitulo:'Ingreso/Salida Empleados',
        listaJornadaEmpleado: jornadaEmpleado

    });

})

app.get('/ventas',(req, res) =>{
    const ventas = [
        {
            idVenta : 1,
            pedido : 4,
            cliente : 'Leonisa',
            fechaVenta : '2023/04/01',
            ordenTrabajo : 111111,
            fechaOrdenTrabajo : '2023/03/01',
            fechaRegistro : '2023/03/03',
            fechaEntregaOrden : '2023/03/01',
            observaciones : 'Tener en cuenta los 5cm de espacio del borde',
            valorTotal : 950000,
            formaPago : 'Contado',
            estado : 'Pago'
      },      
        {
            idVenta : 2,
            pedido : 5,
            cliente : 'Punto Blanco',
            fechaVenta : '2023/04/20',
            ordenTrabajo : 111112,
            fechaOrdenTrabajo : '2023/04/02',
            fechaRegistro : '2023/04/02',
            fechaEntregaOrden : '2023/04/20',
            observaciones : 'Separar por tallas la referencia 1212',
            valorTotal : 1000000,
            formaPago : 'Credito',
            estado : 'Pendiente'
        },      {
            idVenta : 3,
            pedido : 6,
            cliente : 'Insubordados',
            fechaVenta : '2023/05/15',
            ordenTrabajo : 111113,
            fechaOrdenTrabajo : '2023/04/21',
            fechaRegistro : '2023/04/30',
            fechaEntregaOrden : '2023/05/14',
            observaciones : 'Tener en cuenta el encaje en la referencia 1213',
            valorTotal : 1250000,
            formaPago : 'Contado',
            estado : 'Pago'
      },
    ];
    res.render('ventas',{
        titulo : 'Countech',
        user_name : 'Paula Niño', 
        consecutivo: 'Ventas',
        listaVentas: ventas
    })
})

app.get('/nuevaVenta', (req, res) => {
    
    res.render('nuevaVenta', { 
        titulo : 'Countech',
        user_name : 'Paula Niño', 
        consecutivo: 'Formulario',
        subtitulo:'Nueva Venta'
    });
})


app.listen(puerto,()=>{
    console.log(`Escuchando por el puerto ${puerto}`)
})

