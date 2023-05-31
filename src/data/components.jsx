import Parking from '../components/general/Parkings/Parking';
import RegisterVehicles from '../components/customer/Vehicles/RegisterVehicles'
import MakeReservation from '../components/customer/Reservations/MakeReservation';
import YourReservations from '../components/customer/Reservations/YourReservations';
import YourVehicles from '../components/customer/Vehicles/YourVehicles';
import Historial from '../components/administration/Historial';
import Statistics from '../components/administration/Statistics';
import RegisterCustomer from '../components/administration/RegisterCustomer';
import RegisterCard from '../components/customer/CreditCard/RegisterCard';
import Subsidiary from '../components/administration/Subsidiary';

export const components=[
    {
        component: Parking,
        path:"/Parkings",
    },
    {
        component: RegisterVehicles,
        path:"/AddVehicle",
    },
    {
        component: MakeReservation,
        path:"/MakeReservation",
    },
    {
        component: YourReservations,
        path:"/YourReservations",
    },
    {
        component: YourVehicles,
        path:"/YourVehicles",
    },
    {
        component: Historial,
        path:"/Historial",
    },
    {
        component: Statistics,
        path:"/Statistics",
    },
    {
        component: RegisterCustomer,
        path:"/RegisterCustomer",
    },
    {
        component: RegisterCard,
        path:"/RegisterCard",
    },
    {
        component: Subsidiary,
        path:"/Subsidiary",
    }
    
    
    
]