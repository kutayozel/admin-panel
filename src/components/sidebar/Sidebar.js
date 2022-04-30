import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
          <span className="logo">kutayozel</span>
        </div>
        <hr />
        <div className="center">
          <ul>
            <li>
              <DashboardIcon/>
              <span>Dashboard</span>
            </li>
            <li>
              <PersonOutlineOutlinedIcon/>
              <span>Users</span>
            </li>
            <li>
            <ShoppingBagIcon/>
              <span>Products</span>
            </li>
            <li>
            <CreditCardIcon/>
              <span>Orders</span>
            </li>
            <li>
            <LocalShippingIcon/>
              <span>Delivery</span>
            </li>
            <li>
            <QueryStatsIcon/>
              <span>Stats</span>
            </li>
            <li>
            <NotificationsNoneIcon/>
              <span>Notifications</span>
            </li>
            <li>
            <WysiwygIcon/>
              <span>System Health</span>
            </li>
            <li>
            <ManageSearchIcon/>
              <span>Logs</span>
            </li>
            <li>
            <SettingsOutlinedIcon/>
              <span>Settings</span>
            </li>
            <li>
            <AccountCircleOutlinedIcon/>
              <span>Profile</span>
            </li>
            <li>
            <ExitToAppOutlinedIcon/>
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom">color options</div>
    </div>
  )
}

export default Sidebar