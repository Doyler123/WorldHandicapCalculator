import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import logo from '../../assets/img/worldHandicapCalculator2.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    height: theme.mixins.toolbar.minHeight,
    marginRight: theme.spacing(1)
  },
  spacer:{
    [theme.breakpoints.down('sm')]: {
      paddingTop: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '0px',
    }
  }
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Layout(props) {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            {/* <GolfCourseIcon className={classes.icon} fontSize="large"/> */}
            <img className={classes.icon} src={logo} />
            <Typography variant="h6">World Handicap Calculator</Typography>
            <Typography className={classes.root} variant="h6"></Typography>
            {props.whsHandicap ? <Typography variant="subtitle1">{"WHS Handicap: " + props.whsHandicap}</Typography> : null}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container className={classes.spacer}>
        <Box my={2}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            {props.children}
          </Grid>
        </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}