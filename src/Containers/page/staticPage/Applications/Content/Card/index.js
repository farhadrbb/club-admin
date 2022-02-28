import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ModuleEdite from '../ModuleEdite';

import { Modal } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 380,
    width: 450,
    marginBottom: 20,
    maxHeight: 440,
    margin: 20,
    position: 'relative',


  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  desc: {
    width: '100%',
    height: 265,
    margin: 'auto',
    color: '#3699FF',
    overflowY: 'auto',
    lineHeight: 2,
    marginTop: 20
  },
  btn: {
    color: '#3699FF',
    fontSize: 18,
    position: 'absolute',
    bottom: 10,
    left: 10
  }
});


export default function SimpleCard({
  category,
  data,
  index,
   handelChange

}) {

  const classes = useStyles();
  const [newButton, setNewButton] = useState(false);

  const handleClickButton = (data) => {
    if (data === "NEW") {
      setNewButton(prev => !prev)
    }
    return
  }


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} component="h2">
          {category}
        </Typography>
        <Typography>
          <ul className={classes.desc}>
            {
              data.map((item, ind) => {
                if (item.category === category) {
                  return (
                    <li key={ind}>
                      <a href={item.link}>{item.title}</a>
                    </li>
                  )
                }
                return null
              })
            }
          </ul>
        </Typography>
      </CardContent>

      <Button className={classes.btn} size="large" onClick={() => setNewButton(!newButton)} >بیشتر </Button>

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
        }}
      >
        <Fade in={newButton}>
          <ModuleEdite
            setNewButton={setNewButton}
            data={data}
            category={category}
            handelChange={handelChange}
            index={index} 
            />
        </Fade>
      </Modal>
    </Card>
  );
}
