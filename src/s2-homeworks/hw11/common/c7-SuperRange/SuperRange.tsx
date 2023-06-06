import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import {green} from "@mui/material/colors";

const SuperRange: React.FC<SliderProps> = (props) => {

    const style ={
        width: 300,
        marginLeft: 4,
        color: 'success.dark'
    }

    return (
        <Slider
            sx={style}// стили для слайдера // пишет студент
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
