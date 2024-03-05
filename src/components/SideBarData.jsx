import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AddIcon from '@mui/icons-material/Add';

export const SideBarData = [
    {
        title: "Dashboard",
        icon:  <DashboardIcon/>,
        link:  "/adminlayout/adminlayout"
    },
    {
        title: "Products",
        icon:  <InventoryIcon/>,
        link:  "/adminlayout/products"
    },
    {
        title: "Retailers",
        icon:  <PersonIcon/>,
        link:  "/adminlayout/retailerdata"
    },
    {
        title: "Farmers",
        icon:  <PeopleOutlineIcon/>,
        link:  "/adminlayout/farmerdata"
    },
    {
        title: "Add Product",
        icon:  <AddIcon/>,
        link:  "/adminlayout/addproduct"
    },
    // {
    //     title: "Transactions",
    //     icon:  <ReceiptLongIcon/>,
    //     link:  "/transactions"
    // },
    

]

