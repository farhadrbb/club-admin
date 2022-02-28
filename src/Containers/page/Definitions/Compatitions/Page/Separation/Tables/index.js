import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Pagination } from "@material-ui/lab";
import CardNoData from "../../../../../../Common/method/cardNoData";

const useStyles = makeStyles({
  tableContainer: {
    direction: "rtl",
    borderRadius: 10,
    width: "100%",
    margin: "auto",
    marginTop: 5,
    maxHeight: 640,
  },

  table: {
    minWidth: 650,
    overflowY: "auto",
    direction: "ltr",
    borderRadius: 10,
  },
  head: {
    fontWeight: "bold",
  },
  emptyFile: {
    textAlign: "left",
    padding: 10,
    direction: "ltr",
  },
  stickyPagination: {
    textAlign: "center",
    fontWeight: "bold",
    margin: "0px auto",
    position: "sticky",
    bottom: 0,
    /* left: 0; */
    backgroundColor: "whitesmoke",
    padding: "5px 0",
    display: "flex",
    justifyContent: "center",
    direction: "ltr",
  },
});

export default function SimpleTable({
  flagFilter,
  reducerParticipations,
  apiParticipationsEmpty,
  setPageTab2,
  pageTab2,
}) {
  const classes = useStyles();
  const tableHead = [
    "ردیف",
    "نام و نام خانوادگی",
    "کد ملی",
    "تاریخ ثبت",
    //    'کسر هزینه' ,
    "جایزه",
  ];

  const getStripedStyle = (index) => {
    return { background: index % 2 ? "#fafafa" : "white" };
  };

  useEffect(() => {
    return () => {
      apiParticipationsEmpty();
    };
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const handleChangePagination = (event, value) => {
    setPageTab2(value);
  };

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHead?.map((item, ind) => (
              <TableCell
                key={ind}
                className={classes.head}
                align="center"
                // onClick={() => handleSortTa\ble(ind, item)}
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {reducerParticipations.data?.map((row, ind) => (
            <TableRow
              key={ind}
              style={{ ...getStripedStyle(ind) }}
              // className={classes.tableRow}
              // onClick={handleClickRow}
            >
              <TableCell className="colorInherit" align="center">
                {pageTab2 !== 1
                  ? pageTab2 * reducerParticipations.size -
                    reducerParticipations.size +
                    (ind + 1)
                  : +ind + 1}
              </TableCell>
              <TableCell className="colorInherit" align="center">
                {row.body.member_first_name} {row.body.member_last_name}
              </TableCell>
              <TableCell className="colorInherit" align="center">
                {row.body.member_national_id}
              </TableCell>
              <TableCell className="colorInherit" align="center">
                {row.body.participation_date.split(" ")[0]}
              </TableCell>
              <TableCell className="colorInherit" align="center">
                {row.body.participation_bonus_id === "null"
                  ? "در انتظار"
                  : row.body.participation_bonus_id === "FREE"
                  ? "رایگان"
                  : "نهایی شد"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {reducerParticipations.data.length !== 0 ? (
        <div className={classes.stickyPagination}>
          <Pagination
            shape="rounded"
            variant="outlined"
            count={Math.ceil(
              reducerParticipations.total / reducerParticipations.size
            )}
            page={pageTab2}
            onChange={handleChangePagination}
          />
        </div>
      ) : (
        <CardNoData />
      )}
    </TableContainer>
  );
}
