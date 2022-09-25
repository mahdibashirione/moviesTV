import { Fragment, useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectBox = ({ formik, name, title, options }) => {

  return (
    <div className="rounded flex flex-col items-start gap-y-2 w-full max-w-[400px] min-w-[150px]">
      <FormControl style={{ margin: 0, }} fullWidth sx={{ m: 1, minWidth: 120 }} error={formik.touched[name] && formik.errors[name] ? true : false}>
        <InputLabel style={{ fontFamily: "iranSans", }} id={`select-label-${name}`}>{title}</InputLabel>
        <Select
          style={{ fontFamily: "iranSans", }}
          labelId={`select-label-${name}`}
          id={`select-label-${name}`}
          value={formik.values[name]}
          label={title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name={name}
          renderValue={(value) => `${value}`}
        >
          {options.map(option => {
            return (
              <MenuItem style={{ fontFamily: "iranSans", }} value={option.name}>{option.name}</MenuItem>
            )
          })}
        </Select>
        {formik.touched[name] && formik.errors[name] &&
          <FormHelperText style={{ fontFamily: "iranSans", }}>{formik.errors[name]}</FormHelperText>
        }
      </FormControl>
    </div>
  );
}

export default SelectBox;