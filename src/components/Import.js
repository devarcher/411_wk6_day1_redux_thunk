import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container
} from "@material-ui/core";

import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

const useStyles = makeStyles({
  wrapper: {
    marginTop: "30px"
  },
  importButton: {
    marginBottom: "30px"
  }
});

const Import = props => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.wrapper}>
        <Button
          onClick={props.fetchMakes}
          className={classes.importButton}
          variant="contained"
          color="primary"
        >
          Import
        </Button>

        <h2>Count: {props.makes.length}</h2>

        <Table className={classes.makesTable}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Make</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {console.log(props.makes)} */}
            {props.makes.map(make => (
              <TableRow key={make.MakeId}>
                <TableCell>{make.MakeId}</TableCell>
                <TableCell>{make.MakeName}</TableCell>
                <TableCell>
                  <DeleteForeverOutlinedIcon
                    onClick={() => props.deleteMake(make.MakeId)}
                    color="secondary"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default Import;
