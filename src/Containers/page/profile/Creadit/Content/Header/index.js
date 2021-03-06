import React, { useState, useEffect } from 'react'
import Styles from './index.module.scss';
import RefreshIcon from '@material-ui/icons/Refresh';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import { useDispatch } from 'react-redux'


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '35ch',
    [`& fieldset`]: {
      borderRadius: 20,
    },
  },

}))


export default function Index({ handelShowFilterItems, apiselectCreadit, national_id, setNational_id, stateClubmember }) {

  const classes = useStyles();
  let dispatch = useDispatch()

  const [state, setstate] = useState({ fullName: '' })

  useEffect(() => {
    if (stateClubmember.data[0]) {
      let firstName = stateClubmember.data[0].body.first_name
      let lastName = stateClubmember.data[0].body.last_name
      setstate(prev => ({ ...prev, fullName: firstName + " " + lastName }))
    }
  }, [stateClubmember.data])


  const handel_submit = () => {
    if (national_id.length > 1) {
      apiselectCreadit({ national_id: national_id })
    } else {
      dispatch({ type: "ALERT", payload: { status: true, textAlert: "لطفا فیلد کد ملی را وارد نمایید", typeAlert: "info" } })

    }
  }


  const handleChange = (event) => {
    setNational_id(event.target.value);
  };



  return (
    <div className={Styles['header']}>
      <Box borderRadius={20} ml={5} className={Styles['grid']}>
        <FormControl size="small" className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="standard-start-adornment">کد ملی را وارد نمایید</InputLabel>
          <OutlinedInput
            id="standard-start-adornment"
            type={'text'}
            value={national_id}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                  onClick={handel_submit}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            labelWidth={270}
          />
        </FormControl>

        <Box ml={5} >
          <p>
            {state.fullName}
          </p>
        </Box>
      </Box>

      <div className={Styles['icon']}>
        <FilterListIcon onClick={() => { handelShowFilterItems() }} />
        <RefreshIcon
          onClick={handel_submit}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  )
}
