const Input = ({ formik, label, name, type = "text", children, value }) => {
  return (
    <div className="flex flex-col items-start gap-y-2 w-full max-w-[400px] min-w-[150px]">
      <label htmlFor={label} className="text-gray-400">{label} :</label>
      <div className={`${!formik.errors[name] && formik.touched[name] ? "border-green-500" : "border-gray-500"} w-full px-2 py-1 flex items-center justify-start rounded-lg bg-transparent border ${formik.errors[name] && formik.touched[name] && "border-red-500"}`}>
        {children}
        <input
          type={type}
          name={name}
          {...formik.getFieldProps(name)}
          id={label}
          className={`${!formik.errors[name] && formik.touched[name] && "text-white"} w-full outline-none bg-transparent px-2 py-3 rounded-full`}
          placeholder="...."
          value={value}
        />
      </div>
      {formik.errors[name] && formik.touched[name] && <span className="text-red-500 w-full text-right block">{formik.errors[name]}</span>}
    </div>
  );
}

export default Input;