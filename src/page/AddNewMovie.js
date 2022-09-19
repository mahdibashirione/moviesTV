import { useFormik } from "formik";
import Input from "../components/common/input";
import * as Yup from "yup"
import { useState } from "react";
import SelectBox from "../components/common/SelectBox";
import { useNavigate } from "react-router-dom";
import http from "../services/httpServices";

const AddNewMovie = () => {

  const navigate = useNavigate()

  const [options, setOptions] = useState({
    category: [
      { id: 1, name: 'سریال-ایرانی', },
      { id: 2, name: 'سریال-خارجی', },
      { id: 3, name: 'فیلم-ایرانی', },
      { id: 4, name: 'فیلم-خارجی', },
      { id: 5, name: 'انیمیشن', }
    ],
    type: [
      { id: 1, name: 'سریال', },
      { id: 2, name: 'فیلم', },
      { id: 3, name: 'انیمیشن', }
    ]
  })

  const formik = useFormik({
    initialValues: {
      faName: "",
      enName: "",
      cover: "",
      category: "",
      type: "",
      country: "",
      time: "",
      actors: "",
      imdb: "",
      satisfaction: "",
      poster: "",
      demo: "",
      director: "",
      productionYear: "",
      permissibleAge: "",
      genre: "",
      slider: true,
      coming: false,
    },
    validationSchema: Yup.object().shape({
      faName: Yup.string().required("باید تکمیل شود"),
      enName: Yup.string().required("باید تکمیل شود"),
      cover: Yup.string().required("باید تکمیل شود"),
      country: Yup.string().required("باید تکمیل شود"),
      time: Yup.string().required("باید تکمیل شود"),
      type: Yup.string().required("باید تکمیل شود"),
      actors: Yup.string().required("باید تکمیل شود"),
      imdb: Yup.string().required("باید تکمیل شود"),
      satisfaction: Yup.string().required("باید تکمیل شود"),
      director: Yup.string().required("باید تکمیل شود"),
      productionYear: Yup.string().required("باید تکمیل شود"),
      permissibleAge: Yup.string().required("باید تکمیل شود"),
      genre: Yup.string().required("باید تکمیل شود"),
    }),
    onSubmit: dataNewMovie => {
      http.Post("/", dataNewMovie)
        .then(res => {
          console.log(res.data)
          navigate.push("/admin")
        })
        .catch(error => {
          console.log(error)
        })
    }
  })

  return (
    <section className="w-full md:container p-4">
      <form className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center" onSubmit={formik.handleSubmit}>
        <Input formik={formik} label="نام فارسی" name="faName" placeholder="آواتار" />
        <Input formik={formik} label="نام لاتین" name="enName" placeholder="Avatar" />
        <Input formik={formik} label="آدرس کاور" name="cover" placeholder="https//:gogle/dd25cs.com" />
        <SelectBox formik={formik} name="type" options={options.type} title={"نوع فیلم"} />
        <SelectBox formik={formik} name="category" options={options.category} title={"دسته بندی"} />
        <Input formik={formik} label="ساخت کشور" name="country" placeholder="آمریکا" />
        <Input formik={formik} label="سن مجاز تماشا" name="permissibleAge" placeholder="18" />
        <Input formik={formik} label="ژانر" name="genre" placeholder="ترسناک,اکشن" />
        <Input formik={formik} label="امتیاز IMDB" name="imdb" placeholder="8.6" />
        <Input formik={formik} label="امتیاز مردمی" name="satisfaction" placeholder="90" />
        <Input formik={formik} label="سال تولید" name="productionYear" placeholder="2022,1400" />
        <Input formik={formik} label="دمو فیلم" name="demo" placeholder="https//:gogle/dd25cs.com" />
        <Input formik={formik} label="پوستر فیلم" name="poster" placeholder="https//:gogle/dd25cs.com" />
        <Input formik={formik} label="زمان فیلم" name="time" placeholder="60 دقیقه" />
        <Input formik={formik} label="بازیگران" name="actors" placeholder="علیرضا , محمد , صبا" />
        <Input formik={formik} label="کارگردان" name="director" placeholder="فخیم زاده" />
        <button type={"submit"} className="w-full max-w-[400px] bg-blue-500 p-4 rounded-lg mt-2 outline-none hover:scale-95 duration-300">افزودن</button>
      </form>
    </section >
  );
}

export default AddNewMovie;