import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AddIcon from '@mui/icons-material/Add';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

export const SideBarData = [
    {
        title: "Dashboard",
        icon:  <DashboardIcon/>,
        link:  "/admindashboard"
    },
    {
        title: "Products",
        icon:  <InventoryIcon/>,
        link:  "/products"
    },
    {
        title: "Retailers",
        icon:  <PersonIcon/>,
        link:  "/retailerdata"
    },
    {
        title: "Farmers",
        icon:  <PeopleOutlineIcon/>,
        link:  "/farmerdata"
    },
    {
        title: "Add Product",
        icon:  <AddIcon/>,
        link:  "/addproduct"
    },
    // {
    //     title: "Transactions",
    //     icon:  <ReceiptLongIcon/>,
    //     link:  "/transactions"
    // },
    

]

