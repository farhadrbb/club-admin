import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles({
    tableContainer: {
        height: "100%",
        direction: "rtl",
        borderRadius: 10,
        minHeight:450,
    },

    table: {
        minWidth: 650,
        overflowY: 'scroll',
        direction: "ltr",
        borderRadius: 10,
        border:'none',
    },
    head: {
        fontWeight: "bold",
        padding : 10
    },
    emptyFile: {
        textAlign: "left",
        padding: 10,
        direction: "ltr"
    },
    tableCell : {
        padding : 5
    }
});


export default function SimpleTable() {

    const classes = useStyles();

    const tableHead = [
        'ردیف',
        'کد جایزه',
        'نوع شخص',
        'آپلود الزامی می باشد',
        'حداکثر حجم',
        'فقط تصویر',
        'حداکثر طول تصویر',
        'حداکثر ارتفاع تصویر',
    ];


    const tablebody = [

        { titleGiftc: 'روی کارت ملی - توضیحات شناسنامه', upload: true, maxVlue: '0.5', flagImg: false, maxLengthImg: '1000', maxheightImg: '2000', typePersonal: 'حقیقی' },
        { titleGiftc: 'روی کارت ملی - توضیحات شناسنامه', upload: false, maxVlue: '0.5', flagImg: true, maxLengthImg: '1000', maxheightImg: '2000', typePersonal: 'حقیقی' },
        { titleGiftc: 'روی کارت ملی - توضیحات شناسنامه', upload: true, maxVlue: '0.5', flagImg: false, maxLengthImg: '1000', maxheightImg: '2000', typePersonal: 'حقیقی' },
        { titleGiftc: 'روی کارت ملی - توضیحات شناسنامه', upload: false, maxVlue: '0.5', flagImg: true, maxLengthImg: '1000', maxheightImg: '2000', typePersonal: 'حقیقی' },
        { titleGiftc: 'روی کارت ملی - توضیحات شناسنامه', upload: true, maxVlue: '0.5', flagImg: false, maxLengthImg: '1000', maxheightImg: '2000', typePersonal: 'حقیقی' },
        { titleGiftc: 'روی کارت ملی - توضیحات شناسنامه', upload: false, maxVlue: '0.5', flagImg: true, maxLengthImg: '1000', maxheightImg: '2000', typePersonal: 'حقیقی' },
        { titleGiftc: 'روی کارت ملی - توضیحات شناسنامه', upload: true, maxVlue: '0.5', flagImg: false, maxLengthImg: '1000', maxheightImg: '2000', typePersonal: 'حقیقی' },
        { titleGiftc: 'روی کارت ملی - توضیحات شناسنامه', upload: false, maxVlue: '0.5', flagImg: true, maxLengthImg: '1000', maxheightImg: '2000', typePersonal: 'حقیقی' },
        { titleGiftc: 'روی کارت ملی - توضیحات شناسنامه', upload: true, maxVlue: '0.5', flagImg: false, maxLengthImg: '1000', maxheightImg: '2000', typePersonal: 'حقیقی' },
        { titleGiftc: 'روی کارت ملی - توضیحات شناسنامه', upload: false, maxVlue: '0.5', flagImg: true, maxLengthImg: '1000', maxheightImg: '2000', typePersonal: 'حقیقی' },
        { titleGiftc: 'روی کارت ملی - توضیحات شناسنامه', upload: true, maxVlue: '0.5', flagImg: false, maxLengthImg: '1000', maxheightImg: '2000', typePersonal: 'حقیقی' },
        { titleGiftc: 'روی کارت ملی - توضیحات شناسنامه', upload: false, maxVlue: '0.5', flagImg: true, maxLengthImg: '1000', maxheightImg: '2000', typePersonal: 'حقیقی' },
        { titleGiftc: 'روی کارت ملی - توضیحات شناسنامه', upload: true, maxVlue: '0.5', flagImg: false, maxLengthImg: '1000', maxheightImg: '2000', typePersonal: 'حقیقی' },
        { titleGiftc: 'روی کارت ملی - توضیحات شناسنامه', upload: false, maxVlue: '0.5', flagImg: true, maxLengthImg: '1000', maxheightImg: '2000', typePersonal: 'حقیقی' },

    ];



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
                    {
                        tablebody && (
                            tablebody?.map((row, ind) => (
                                <TableRow
                                   key={ind}
                                // className={classes.tableRow}
                                // onClick={handleClickRow}
                                >
                                    <TableCell className={classes.tableCell} align="center">{ind + 1}</TableCell>
                                    <TableCell className={classes.tableCell} align="center">{row.titleGiftc}</TableCell>
                                    <TableCell className={classes.tableCell} align="center">{row.typePersonal}</TableCell>
                                    <TableCell className={classes.tableCell} align="center">
                                        <Checkbox
                                            defaultChecked={row.upload}
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="center">{row.maxVlue}</TableCell>
                                    <TableCell className={classes.tableCell} align="center">
                                        <Checkbox
                                            defaultChecked={row.flagImg}
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="center">{row.maxLengthImg}</TableCell>
                                    <TableCell className={classes.tableCell} align="center">{row.maxheightImg}</TableCell>
                                </TableRow>
                            ))
                        )
                    }
                </TableBody>
            </Table>


        </TableContainer>
    );
}