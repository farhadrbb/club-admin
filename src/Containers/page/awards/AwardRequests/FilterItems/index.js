import React from 'react'
import DataPicker from './DataPicker';
import Styles from './index.module.scss';


export default function Index({flagFilter}) {

    return (
        <>
        {
            flagFilter
            ?(
                <div className={Styles['filter']}>
                    <DataPicker />
                    
                    <div className={Styles['btns']}>
                            <button className={Styles['btnsBlack']}>بازخوانی </button>
                    </div>
                </div>

            )
            :""
        }
        </>
    )
}
