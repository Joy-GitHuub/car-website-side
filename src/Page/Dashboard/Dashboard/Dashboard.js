import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Addproduct from '../../Admin/Addproduct/Addproduct'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import DashBoardHome from '../DashboardHome/DashBoardHome';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../../Admin/MakeAdmin/MakeAdmin';
import ManageAllProducts from '../../Admin/ManageAllProducts/ManageAllProducts';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import UserOrder from '../UserOrder/UserOrder';
import ManageProducts from '../../Admin/ManageProducts/ManageProducts';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 230;



function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);




    const { logOut, admin } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const logo = 'https://smartdata.tonytemplates.com/caleader/wp-content/themes/caleader/assets/images/logo-dark.svg';



    const drawer = (
        <div>

            <Toolbar />

            <div className='App'>
                <Link to='/'>
                    <img width="120px" src={logo} alt="logo" />
                </Link>
            </div>

            <Divider />
            {/* User & Admin Show That */}
            <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to='/'><Button color="inherit" sx={{ color: 'InfoText' }}><i className="fas fa-house-user"></i>&nbsp;Home</Button></Link>
            <Divider />

            {/* All User Route */}
            {!admin && <Box>
                <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to={`${url}/pay`}><Button color="inherit" sx={{ color: 'InfoText' }}><i className="far fa-credit-card"></i>&nbsp; Pay</Button></Link>
                <Divider />
                <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to={`${url}/myOrder`}><Button color="inherit" sx={{ color: 'InfoText' }}><i className="fas fa-shopping-cart"></i>&nbsp; My Order</Button></Link>
                <Divider />


                <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to={`${url}/review`}><Button color="inherit" sx={{ color: 'InfoText' }}><i className="fas fa-edit fs-6"></i>&nbsp; Review</Button></Link>
                <Divider />
            </Box>}


            {/* All Admin Route */}
            {admin && <Box>
                <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to={`${url}/manageProduct`} ><Button color="inherit" sx={{ color: 'InfoText' }}><i className="fab fa-product-hunt "></i>&nbsp; Manage All Orders</Button></Link>
                <Divider />
                <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to={`${url}/makeAdmin`} ><Button color="inherit" sx={{ color: 'InfoText' }}><i className="fas fa-users-cog"></i>&nbsp; Make Admin</Button></Link>
                <Divider />
                <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to={`${url}/addProduct`} ><Button color="inherit" sx={{ color: 'InfoText' }}><i className="far fa-plus-square"></i>&nbsp; Add Products</Button></Link>
                <Divider />
                <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to={`${url}/manageProducts`} ><Button color="inherit" sx={{ color: 'InfoText' }}><i className="far fa-plus-square"></i>&nbsp; Manage Products</Button></Link>
                <Divider />
            </Box>}

            {/* User And Admin Show Thaat */}
            <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to='/exploreService'><Button onClick={logOut} color="inherit" sx={{ color: 'InfoText' }}><i className="fas fa-sign-out-alt"></i>&nbsp; Log-Out</Button></Link>
            <Divider />

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {!admin && <Box>User Dashboard</Box>}
                        {admin && <Box>Admin Dashboard</Box>}

                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />



                <Switch>
                    <Route exact path={path}>
                        <DashBoardHome></DashBoardHome>
                    </Route>
                    <Route path={`${path}/myOrder`}>
                        <UserOrder></UserOrder>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/manageProduct`}>
                        <ManageAllProducts></ManageAllProducts>
                    </Route>
                    <AdminRoute path={`${path}/addProduct`}>
                        <Addproduct></Addproduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>







            </Box>
        </Box>
    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;
