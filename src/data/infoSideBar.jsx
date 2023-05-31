
export const infoSideBar=[
    {
        id: "button-parkings",
        name :"Parqueaderos",
        page:"/Parkings",
        icon :"faLocationDot",
        profile:['cliente','administrador','gerente']
    },
    {
        id: "button-parkings",
        name :"Sucursal",
        icon :"faLocationDot",
        page: "/Subsidiary",
        profile :['administrador','gerente']
    },
    {
        id: "button-addCar",
        name :"Registra tu vehículo",
        icon :"faCarSide",
        page: "/AddVehicle",
        profile:['cliente']
    },
    {
        id: "button-makeReservation",
        name :"Reserva tu cupo",
        icon :"faCirclePlus",
        page: "/MakeReservation",
        profile:['cliente']
    },
    {
        id: "button-reservations",
        name :"Tus reservas",
        icon :"faRectangleList",
        page: "/YourReservations",
        profile:['cliente']
    },
    {
        id: "button-vehicles",
        name :"Vehículos registrados",
        icon :"faTable",
        page: "/YourVehicles",
        profile:['cliente']
    },
    {
        id: "button-cards",
        name :"Registra tarjetas",
        icon :"faCirclePlus",
        page: "/RegisterCard",
        profile:['cliente']
    },
    {
        id: "button-statistics",
        name :"Estadísticas",
        icon :"faChartLine",
        page: "/Statistics",
        profile:['administrador','gerente']
    },
    {
        id: "button-historial",
        name :"Historial",
        icon :"faAddressCard",
        page: "/Historial",
        profile:['administrador']
    },
    {
        id: "button-registerCustomer",
        name :"Registrar cliente",
        icon :"faUserPlus",
        page: "/RegisterCustomer",
        profile:['administrador']
    },
    {
        id: "button-logOut",
        name :"Cerrar sesión",
        icon :"faRightToBracket",
        page: "/",
        profile :['cliente','administrador','gerente']
    }
]