import Header from '../../components/header';
import PerfectScrollbar from "react-perfect-scrollbar";
import SideNavMenu from '../../routers/sideNav';
import "./styles/_index.scss";
// import Footer from '../../components/footer';
import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import forecast from './../../assets/forecast.png';
import quickOverview from './../../assets/quick-overview.png';
import weatherWindow from './../../assets/weather-window.png';
import squall from './../../assets/squall.png';
import typhoon from './../../assets/typhoon.png';
import lightning from './../../assets/lightning.png';

function Dashboard() {
  
    return (

        <div className={`ailevate-container bg-default flex sidenav-full`}>
            <SideNavMenu />
            <div className="content-wrap">
                <Header />
                <PerfectScrollbar
                    style={{ height: "100%" }}
                    options={{ suppressScrollX: true }}
                    className="main-container-wrapper flex-grow-1 flex-column position-relative"
                >
                    <div className="container-section" style={{ height: '100%' }}>
                        <Grid container spacing={2} style={{ height: '100%' }}>
                            <Grid xs={9}>
                                <Grid container spacing={3}>
                                    <Grid xs={4}>
                                    <CardMedia
                                                sx={{ height: 140 }}
                                                image={forecast}
                                                title="green iguana"
                                    />
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Forecast
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Last edited 1hr ago
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid xs={4}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image={quickOverview}
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Quick Overview
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Last updated 1hr ago
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid xs={4}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image={weatherWindow}
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Weather Window
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Last updated 3hr ago
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid xs={4}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image={squall}
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Squll
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Last send 1 day ago
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid xs={4}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image={typhoon}
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Typhoon
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Last send 2 days ago
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid xs={4}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image={lightning}
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lightning
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Last send 3 days ago
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid xs={3}>
                                <Paper sx={{ width: 320, height: '100%', maxWidth: '100%' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Active Warnings
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </PerfectScrollbar>
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default Dashboard;
