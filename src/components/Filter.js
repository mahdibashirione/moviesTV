import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Filter = () => {

  const [category, setCategory] = useState("")
  const optionsSelect = ["انیمیشن", "سریال-ایرانی", "سریال-خارجی", "فیلم-ایرانی", "فیلم-خارجی"]

  function handleSelect(e) {
    setCategory(e.target.value)
  }

  return (
    <section className="w-screen h-14 bg-white sticky top-0 z-30 flex items-center justify-center">
      <div className="w-full max-w-[700px] flex items-center justify-between px-4 py-2 fixed top-0 z-20">
        <TextField
          variant="outlined"
          placeholder="جستوجو .."
          size="small"
          startAdornment={
            <InputAdornment position="start">
              <FiSearch />
            </InputAdornment>
          }
        />
        <div className="w-[150px]" dir="ltr">
          <FormControl fullWidth>
            <InputLabel id="category-select-box">دسته بندی</InputLabel>
            <Select
              labelId="category-select-box"
              id="demo-simple-select"
              value={category}
              label="دسته بندی"
              size="small"
              onChange={handleSelect}
              style={{ fontFamily: "iranSans" }}
              align="right"
            >
              {optionsSelect.map(item => {
                return (
                  <MenuItem value={item}>{item}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </div>
      </div>
    </section>
  );
}

export default Filter;