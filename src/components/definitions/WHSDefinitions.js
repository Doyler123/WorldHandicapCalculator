import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Box from '@material-ui/core/Box';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function createData(numDiffs, diffsInCalc, adjustment) {
    return { numDiffs, diffsInCalc, adjustment};
  }
  
  const rows = [
    createData('3', 'Lowest 1', '-2.0'),
    createData('4', 'Lowest 1', '-1.0'),
    createData('5', 'Lowest 1', 'N/A'),
    createData('6', 'Average of lowest 2', '-1.0'),
    createData('7 or 8', 'Average of lowest 2', 'N/A'),
    createData('9 to 11', 'Average of lowest 3', 'N/A'),
    createData('12 to 14', 'Average of lowest 4', 'N/A'),
    createData('15 to 16', 'Average of lowest 5', 'N/A'),
    createData('17 to 18', 'Average of lowest 6', 'N/A'),
    createData('19', 'Average of lowest 7', 'N/A'),
    createData('20', 'Average of lowest 8', 'N/A'),
  ];

export default function SimpleExpansionPanel() {

  const classes = useStyles();

  return (
    <Grid item xs={12} lg={6}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Handicap Calculations</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box textAlign="left" m={1}>
            <Typography variant="body1" gutterBottom>
                In order to transition from CONGU to WHS handicaps, all players' current handicap records 
                will be reprocessed using the WHS principles. The calculation will identify the best 8 of 
                the last 20 Gross Scores. The Gross Scores will be transformed into score differentials using 
                the following formula: <br></br><br></br>

                Score Differential = 113/slope * (adjusted gross score - CR - CSS) <br></br><br></br>

                Once the score differentials are calulated the average of the best 8 will determine your WHS Handicap.
                If you do not have 20 previous gross scores, your WHS handicap will be calculated based off the transition
                table below.
            </Typography>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
            <Typography className={classes.heading}>Transition Table</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                        <TableCell align="center">Noumber of Rounds</TableCell>
                        <TableCell align="center">Rounds used in calculation</TableCell>
                        <TableCell align="center">Adjustment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell align="center" component="th" scope="row">
                            {row.numDiffs}
                            </TableCell>
                            <TableCell align="center">{row.diffsInCalc}</TableCell>
                            <TableCell align="center">{row.adjustment}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </Grid>
  );
}