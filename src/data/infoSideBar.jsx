
export const infoSideBar=[
    
    {
        id: "button-parkings",
        name :"Parqueaderos",
        page:"/Parkings",
        icon :"faLocationDot",
        profile:['USER_ROLE','ADMIN_ROLE','SUPER_ADMIN_ROLE']
    },
    {
        id: "button-yourParking",
        name :"Tu sucursal",
        icon :"faLocationDot",
        page: "/Subsidiary",
        profile :['ADMIN_ROLE']
    },
    {
        id: "button-addCar",
        name :"Registra tu vehículo",
        icon :"faCarSide",
        page: "/AddVehicle",
        profile:['USER_ROLE']
    },
    {
        id: "button-statistics",
        name :"Estadísticas",
        icon :"faChartLine",
        page: "/Statistics",
        profile:['ADMIN_ROLE','SUPER_ADMIN_ROLE']
    },
    {
        id: "button-makeReservation",
        name :"Reserva tu cupo",
        icon :"faCirclePlus",
        page: "/MakeReservation",
        profile:['USER_ROLE']
    },
    {
        id: "button-reservations",
        name :"Tus reservas",
        icon :"faRectangleList",
        page: "/YourReservations",
        profile:['USER_ROLE']
    },
    {
        id: "button-vehicles",
        name :"Vehículos registrados",
        icon :"faTable",
        page: "/YourVehicles",
        profile:['USER_ROLE']
    },
    {
        id: "button-cards",
        name :"Registra tarjetas",
        icon :"faCirclePlus",
        page: "/RegisterCard",
        profile:['USER_ROLE']
    },
   
    {
        id: "button-historial",
        name :"Historial",
        icon :"faAddressCard",
        page: "/Historial",
        profile:['ADMIN_ROLE','SUPER_ADMIN_ROLE']
    },
    {
        id: "button-registerCustomer",
        name :"Registrar cliente",
        icon :"faUserPlus",
        page: "/RegisterCustomer",
        profile:['ADMIN_ROLE']
    },
    {
        id: "button-logOut",
        name :"Cerrar sesión",
        icon :"faRightToBracket",
        page: "/",
        profile :['USER_ROLE','ADMIN_ROLE','SUPER_ADMIN_ROLE']
    }
]