import { useFormik } from "formik";
import Input from "../components/common/input";
import { Switch } from '@headlessui/react'
import * as Yup from "yup"
import { useState } from "react";

const AddNewMovie = () => {

  const [enabledSlider, setEnabledSlider] = useState(false)
  const [enabledDate, setEnabledDate] = useState(false)


  const formik = useFormik({
    initialValues: {
      faName: "",
      enName: "",
      cover: "",
      category: "",
      country: "",
      time: "",
      type: "",
      actors: "",
      imdb: "",
      satisfaction: "",
      director: "",
      slider: enabledSlider,
      coming: enabledDate,
    },
    validationSchema: Yup.object().shape({
      faName: Yup.string().required("باید تکمیل شود"),
      enName: Yup.string().required("باید تکمیل شود"),
      cover: Yup.string().required("باید تکمیل شود"),
      category: Yup.string().required("باید تکمیل شود"),
      country: Yup.string().required("باید تکمیل شود"),
      time: Yup.string().required("باید تکمیل شود"),
      type: Yup.string().required("باید تکمیل شود"),
      actors: Yup.string().required("باید تکمیل شود"),
      imdb: Yup.string().required("باید تکمیل شود"),
      satisfaction: Yup.string().required("باید تکمیل شود"),
      director: Yup.string().required("باید تکمیل شود"),
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
        <Input formik={formik} label="دسته بندی" name="category" />
        <Input formik={formik} label="سبک فیلم" name="type" />
        <Input formik={formik} label="ساخت کشور" name="country" />
        <Input formik={formik} label="امتیاز IMDB" name="imdb" />
        <Input formik={formik} label="امتیاز مردمی" name="satisfaction" />
        <Input formik={formik} label="دمو فیلم" name="demo" />
        <Input formik={formik} label="پوستر فیلم" name="poster" />
        <Input formik={formik} label="زمان فیلم" name="time" />
        <Input formik={formik} label="بازیگران" name="actors" />
        <Input formik={formik} label="کارگردان" name="director" />
        <div className="w-full max-w-[200px] p-4 flex items-center gap-x-4 justify-start">
          <span className="text-gray-500">اسلایدر :</span>
          <Switch
            checked={enabledSlider}
            onChange={setEnabledSlider}
            name="slider"
            className={`${enabledSlider ? 'bg-blue-900/50' : 'bg-blue-500'}
          relative inline-flex h-[29px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabledSlider ? '-translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
        <div className="w-full max-w-[200px] px-4 flex items-center gap-x-4 justify-start">
          <span className="text-gray-500">تاریخ انتشار :</span>
          <Switch
            checked={enabledDate}
            onChange={setEnabledDate}
            name="coming"
            className={`${enabledDate ? 'bg-blue-900/50' : 'bg-blue-500'}
          relative inline-flex h-[29px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabledDate ? '-translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
        <button type={"submit"} className="w-full max-w-[400px] bg-blue-500 p-4 rounded-lg mt-2 outline-none hover:scale-95 duration-300">افزودن</button>
      </form>
    </section >
  );
}

export default AddNewMovie;