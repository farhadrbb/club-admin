import React, { useState } from 'react'
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core'

// import ModalE from '../Modal';
import ModalAdd from "../../Header/ModalAdd";
import AlertDialogSlide from "./../../../../../Common/Components/AlertDialogSlide";
import { useDispatch } from 'react-redux';
import { systems_v1_update_actions } from "./../../../../../../boot/api/staticPage/systems/systems_v1_update/action";




const useStles = makeStyles(() => ({
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
    },
}))

export default function Index({ info, dataPrev, row }) {
    const [newButton, setNewButton] = useState(false);
    // const [newButton, setNewButton] = useState(false);
    const classes = useStles();
    const dispatch = useDispatch();


    const handleOkAlert = () => {
        setNewButton(false)

        //handle data when delete
        let parsDataPrev = JSON.parse(dataPrev[0].body.content)
        let filterData = parsDataPrev.filter(item => item.Title !== row.Title)
        let id = dataPrev[0].id;
        dispatch(systems_v1_update_actions(JSON.stringify(filterData), id))
    }

    const Components = {
        ModalAdd: <ModalAdd
            setNewButton={setNewButton}
            data={row}
            dataPrev={dataPrev}
        />,
        AlertDialogSlide: <AlertDialogSlide
            flagShow={setNewButton}
            handleCloseAlert={setNewButton}
            handleOkAlert={handleOkAlert}
            data={dataAlertDialogSlide}
        />
    }

    const handleClickButton = (data) => {
        if (data === "NEW") {
            setNewButton(prev => !prev)
        }
        return
    }

    return (
        < >
            <button className={info.className}
                onClick={() => {
                    setNewButton(!newButton)
                }}>{info.title}</button>
            {
                info.modal && (
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={newButton}
                        onClose={() => handleClickButton("NEW")}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}>

                        <Fade in={newButton}>
                            {Components[info.modal]}
                        </Fade>

                    </Modal>
                )
            }
        </>
    )
}

const dataAlertDialogSlide = {
    title: "حذف",
    description: "از حذف این رکورد اطمینان دارید؟",
}