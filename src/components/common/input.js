import { TextField } from "@mui/material";

const Input = ({ formik, label, name, placeholder }) => {
  return (
    <div className="rounded flex flex-col items-start gap-y-2 w-full max-w-[400px] min-w-[150px]">
      <TextField
        fullWidth
        label={label}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        placeholder={placeholder}
        helperText={formik.touched[name] && formik.errors[name]}
        error={formik.touched[name] && formik.errors[name] ? true : false}
      />
    </div>
  );
}

export default Input;