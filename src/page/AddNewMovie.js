import { useFormik } from "formik";
import Input from "../components/common/input";
import * as Yup from "yup"

const AddNewMovie = () => {

  const formik = useFormik({
    initialValues: {
      faName: "",
      enName: "",
      cover: "",
      slider: "",
      type: "",
      country: "",
    },
    validationSchema: Yup.object().shape({
      faName: Yup.string().required("باید تکمیل شود"),
      enName: Yup.string().required("باید تکمیل شود"),
      cover: Yup.string().required("باید تکمیل شود"),
    }),
    onSubmit: dataNewMovie => {
      console.log(dataNewMovie)
    }
  })

  return (
    <section className="w-full md:container p-4">
      <form className="w-full flex gap-4 items-center justify-center flex-wrap" onSubmit={formik.handleSubmit}>
        <Input formik={formik} label="نام فارسی" name="faName" />
        <Input formik={formik} label="نام لاتین" name="enName" />
        <Input formik={formik} label="آدرس کاور" name="cover" />
        <Input formik={formik} label="نوع فیلم" name="type" />
        <Input formik={formik} label="ساخت کشور" name="country" />
        <button type={"submit"} className="w-full max-w-[400px] bg-blue-500 p-4 rounded-lg mt-2 outline-none hover:scale-95 duration-300">افزودن</button>
      </form>
    </section >
  );
}

export default AddNewMovie;