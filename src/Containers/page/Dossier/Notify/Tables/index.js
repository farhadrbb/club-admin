import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Buttons from "./Buttons";
import CardNoData from "./../../../../Common/method/cardNoData";
import { dateMiladiToShamsi } from "./../../../../Common/method/date";
import { Pagination } from "@material-ui/lab";
import { ArrowDownwardIcon, ArrowUpwardIcon } from "@material-ui/data-grid";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    height: "100%",
    direction: "rtl",
    borderRadius: 10,
    maxHeight: 800,
    overflowY: "scroll",
    width: "96.2%",
    margin: "auto",
    // marginTop:10,
  },

  table: {
    minWidth: 650,
    overflowY: "scroll",
    direction: "ltr",
    borderRadius: 10,
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
  head: {
    fontWeight: "bold",
    cursor: "pointer",
    '& svg': {
        verticalAlign: "middle",
        fill: "rgba(1,1,1,0.5)",
        margin: " 0 1px"
    }
},
  emptyFile: {
    textAlign: "left",
    padding: 10,
    direction: "ltr",
  },
  modal: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "white",
    width: 600,
    margin: "auto",
    padding: theme.spacing(5),
    "& div": {
      width: 250,
    },
  },
  btns: {
    margin: "40px 0 0 0",
    textAlign: "right",
    width: "100%",
  },
  boxEmpty: {
    width: 24,
    height: 24
}
}));






const stateSort = {
  DEFAULT: "DEFAULT",
  ASC: "asc",
  DESC: "desc"
}

const tableHeadStart = [
  { id: 1, label: "????????", title: null, active: false },
  { id: 2, label: "??????????", title: "name", active: false },
  { id: 3, label: "??????????????", title: null, active: false },
  { id: 4, label: "????????", title: "source", active: false },
  { id: 5, label: "????????????", title: "receiver_id", active: false },
  { id: 6, label: "??????????", title: "state", active: false },
  { id: 7, label: "??????", title: "type", active: false },
  { id: 8, label: "?????????? ????????", title: "start_time", active: false },
  { id: 9, label: "?????????? ??????????", title: "end_time", active: false },
  { id: 9, label: "??????????", title: null, active: false },
];








export default function SimpleTable({
  flagFilter,
  notify_reducer,
  apiNotifyselect,
  setPageTab2,
  pageTab2,
  sort,
  setSort,
  flag
}) {
  const classes = useStyles();
  const [tableHead, setTableHead] = React.useState(tableHeadStart)
  
  
 
  


  const handleClickSort = (title, id) => {
    if (!title) {
        alert("?????????? ?????????? ?????? ???????? ???????? ??????????.")
        return
    }

    if (id === sort.id) {
        let findState = findStateSort(title)
        if (findState === stateSort.DEFAULT) {
            setSort({})
            return
        }
        setSort({ [title]: findState, id: id })
    } else {
        let res = tableHead.map(item => item.id === id ? { ...item, active: true } : { ...item, active: false })
        setTableHead(res)
        setSort({ [title]: stateSort.ASC, id: id })
      }
    }

    




const findStateSort = (title) => {
  switch (sort[title]) {
      case stateSort.DEFAULT:
          return stateSort.ASC
      case stateSort.ASC:
          return stateSort.DESC
      case stateSort.DESC:
          return stateSort.DEFAULT
      default:
          return stateSort.DEFAULT
  }

}





  const handleChangePagination = (event, value) => {
    setPageTab2(value);
  };




  useEffect(() => {
    if (flag) apiNotifyselect(pageTab2);

    flag = true;
  }, [pageTab2]);



  return (
    <>
      <TableContainer
        className={classes.tableContainer}
        component={Paper}
        style={{ marginTop: 30, height: flagFilter ? "51vh" : "80vh" }}
      >
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHead?.map((item, ind) => (
                <TableCell 
                key={ind} 
                className={classes.head} 
                align="center"
                onClick={() => handleClickSort(item.title, item.id)}
                >{item.label}
                  {item.active ? (
                    sort[item.title] === stateSort.ASC ? (
                      <ArrowUpwardIcon />
                    ) : sort[item.title] === stateSort.DESC ? (
                      <ArrowDownwardIcon />
                    ) : (
                      <svg className={classes.boxEmpty}></svg>
                    )
                  ) : (
                    <svg className={classes.boxEmpty}></svg>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {notify_reducer.data.map((row, ind) => (
              <TableRow key={ind}>
                <TableCell className="colorInherit" align="center">
                  {ind + 1}
                </TableCell>
                <TableCell className="colorInherit" align="center">
                  {row.body.name}
                </TableCell>
                <TableCell className="colorInherit" align="center">
                  {row.body.sender_last_name === "null"
                    ? "-"
                    : row.body.sender_last_name}
                </TableCell>
                <TableCell className="colorInherit" align="center">
                  {row.body.source === "INTERNAL" ? "?????????? ??????????" : "??????????"}
                </TableCell>
                <TableCell className="colorInherit" align="center">
                  {row.body.receiver_id === "null" ? "??????" : "??????"}
                </TableCell>
                <TableCell className="colorInherit" align="center">
                  {row.body.state === "SENT"
                    ? "?????????? ??????"
                    : row.body.state === "NOT_SENT_Exception"
                    ? "?????? ??????"
                    : row.body.state === "IN_QUEUE"
                    ? "???? ???? ??????????"
                    : "????????????"}
                </TableCell>
                <TableCell className="colorInherit" align="center">
                  {row.body.type}
                </TableCell>

                <TableCell className="colorInherit" align="center">
                  {dateMiladiToShamsi(row.body.start_time)}
                </TableCell>

                <TableCell className="colorInherit" align="center">
                  {dateMiladiToShamsi(row.body.end_time)}
                </TableCell>

                <TableCell className="colorInherit" align="center">
                  <Buttons
                    info={{
                      title: "????????????",
                      className: "btnsGreen",
                      modal: "ModalDetails",
                    }}
                    data={row}
                  />
                  <Buttons
                    info={{
                      title: "????????????",
                      className: "btnsYellow",
                      modal: "ModalEdit",
                    }}
                    data={row}
                  />
                  <Buttons
                    info={{
                      title: "??????",
                      className: "btnsRed",
                      modal: "modalDelete",
                    }}
                    data={row}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {notify_reducer.data.length !== 0 ? (
          <div className={classes.stickyPagination}>
            <Pagination
              shape="rounded"
              variant="outlined"
              count={Math.ceil(notify_reducer.total / notify_reducer.size)}
              page={pageTab2}
              onChange={handleChangePagination}
            />
          </div>
        ) : (
          <CardNoData />
        )}
      </TableContainer>
    </>
  );
}
