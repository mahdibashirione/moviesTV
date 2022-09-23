import { useFormik } from "formik";
import Input from "../components/common/input";
import CustomSwitch from "../components/common/Switch";
import * as Yup from "yup"
import { useState } from "react";
import SelectBox from "../components/common/SelectBox";
import { useNavigate } from "react-router-dom";
import http from "../services/httpServices";
import { Button } from "@mui/material";

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
      story: "",
      aboutTheMovie: "",
      slider: false,
      coming: false,
    },
    validationSchema: Yup.object().shape({
      faName: Yup.string().required("باید تکمیل شود"),
      enName: Yup.string().required("باید تکمیل شود"),
      cover: Yup.string().required("باید تکمیل شود"),
      country: Yup.string().required("باید تکمیل شود"),
      time: Yup.string().required("باید تکمیل شود"),
      actors: Yup.string().required("باید تکمیل شود"),
      imdb: Yup.string().required("باید تکمیل شود"),
      director: Yup.string().required("باید تکمیل شود"),
      productionYear: Yup.string().required("باید تکمیل شود").max(4, "حداکثر 4 رقم باشد"),
      satisfaction: Yup.string().required("باید تکمیل شود").max(2, "حداکثر 2 رقم باشد"),
      permissibleAge: Yup.string().required("باید تکمیل شود").max(2, "حداکثر 2 رقم باشد"),
      genre: Yup.string().required("باید تکمیل شود"),
      story: Yup.string().required("باید تکمیل شود"),
      aboutTheMovie: Yup.string().required("باید تکمیل شود"),
      type: Yup.string().required("باید تکمیل شود"),
      category: Yup.string().required("باید تکمیل شود"),
    }),
    onSubmit: values => Post_Data("/movies", values),
    validateOnMount: true,
  })

  async function Post_Data(url, data) {
    try {
      const res = await http.Post(url, { ...data, downloads: [], comments: [] })
      navigate.push("/admin")
    } catch (error) {
      window.alert(error)
    }
  }

  return (
    <section className="min-w-screen w-full min-h-screen bg-white p-4">
      <form dir="ltr" onSubmit={formik.handleSubmit} className="w-full md:container grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center" >
        <SelectBox formik={formik} name="type" options={options.type} title={"نوع فیلم"} />
        <SelectBox formik={formik} name="category" options={options.category} title={"دسته بندی"} />
        <Input formik={formik} label="نام فارسی" name="faName" placeholder="آواتار" />
        <Input formik={formik} label="نام لاتین" name="enName" placeholder="Avatar" />
        <Input formik={formik} label="آدرس کاور" name="cover" placeholder="https//:gogle/dd25cs.com" />
        <Input formik={formik} label="ساخت کشور" name="country" placeholder="آمریکا" />
        <Input formik={formik} label="داستان فیلم" name="story" placeholder="..." />
        <Input formik={formik} label="درباره فیلم" name="aboutTheMovie" placeholder="..." />
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
        <CustomSwitch name="slider" formik={formik} label="افزودن به اسلایدر صفحه اصلی" />
        <Button
          variant="contained"
          size="large"
          disabled={!formik.isValid}
          type={"submit"}>
          افزودن
        </Button>
      </form>
    </section >
  );
}

export default AddNewMovie;