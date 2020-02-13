import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const Import = props => {
  const classes = useStyles()
  return (
    <div>
      <Container className={classes.wrapper}>
        <Button className={classes.importButton} variant="contained" color="primary">
          Import
        </Button>

          <Table className={classes.makesTable}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Make</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
          </Table>
      </Container>
    </div>
  );
};

export default Import;
