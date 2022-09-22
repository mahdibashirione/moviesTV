import Switch from '@mui/material/Switch';

const CustomSwitch = ({ label, name, formik }) => {
  return (
    <div>
      <span className="text-gray-400 select-none">{label}:</span>
      <Switch
        checked={formik.values[name]}
        onChange={formik.handleChange}
        name={name}
      />
    </div>
  );
}

export default CustomSwitch;