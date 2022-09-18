import { useFormik } from "formik";
import Input from "../components/common/input";
import * as Yup from "yup"
import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const AddNewMovie = () => {

  //const [enabledSlider, setEnabledSlider] = useState(false)
  //const [enabledDate, setEnabledDate] = useState(false)
  const people = [
    { id: 1, name: 'سریال-ایرانی', },
    { id: 2, name: 'سریال-خارجی', },
    { id: 3, name: 'فیلم-ایرانی', },
    { id: 4, name: 'فیلم-خارجی', },
    { id: 5, name: 'انیمیشن', },
  ]

  const [selectedCategory, setSelectedCategory] = useState({ id: 0, name: "" })

  useEffect(() => {
    formik.values.category = selectedCategory.name
  }, [selectedCategory])

  const formik = useFormik({
    initialValues: {
      faName: "",
      enName: "",
      cover: "",
      category: selectedCategory.name,
      country: "",
      time: "",
      type: "",
      actors: "",
      imdb: "",
      satisfaction: "",
      poster: "",
      demo: "",
      director: "",
      slider: false,
      coming: false,
    },
    validationSchema: Yup.object().shape({
      faName: Yup.string().required("باید تکمیل شود"),
      enName: Yup.string().required("باید تکمیل شود"),
      cover: Yup.string().required("باید تکمیل شود"),
      //category: Yup.string().required("باید تکمیل شود"),
      country: Yup.string().required("باید تکمیل شود"),
      time: Yup.string().required("باید تکمیل شود"),
      type: Yup.string().required("باید تکمیل شود"),
      actors: Yup.string().required("باید تکمیل شود"),
      imdb: Yup.string().required("باید تکمیل شود"),
      satisfaction: Yup.string().required("باید تکمیل شود"),
      director: Yup.string().required("باید تکمیل شود"),
    }),
    onSubmit: dataNewMovie => {
      console.log({ ...dataNewMovie, downloads: [], comments: [] })
    }
  })

  return (
    <section className="w-full md:container p-4">
      <form className="w-full flex gap-4 items-center justify-start flex-wrap" onSubmit={formik.handleSubmit}>
        <Input formik={formik} label="نام فارسی" name="faName" />
        <Input formik={formik} label="نام لاتین" name="enName" />
        <Input formik={formik} label="آدرس کاور" name="cover" />
        {/*<Input formik={formik} label="دسته بندی" name="category" />*/}
        <Listbox value={selectedCategory} onChange={setSelectedCategory}>
          <div className="flex flex-col gap-y-2">
            <span className="text-gray-400">دسته بندی :</span>
            <div className={`relative w-[150px] border ${selectedCategory.name ? "border-green-500" : "border-gray-500"} rounded-lg`}>
              <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-transparent py-4 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selectedCategory.name.length ? selectedCategory.name : "انتخاب"}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative select-none py-2 pl-10 pr-4 cursor-pointer ${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                        }`
                      }
                      value={person}
                    >
                      {({ selectedCategory }) => (
                        <>
                          <span
                            className={`block truncate ${selectedCategory ? 'font-medium' : 'font-normal'
                              }`}
                          >
                            {person.name}
                          </span>
                          {selectedCategory ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        </Listbox>
        <Input formik={formik} label="سبک فیلم" name="type" />
        <Input formik={formik} label="ساخت کشور" name="country" />
        <Input formik={formik} label="امتیاز IMDB" name="imdb" />
        <Input formik={formik} label="امتیاز مردمی" name="satisfaction" />
        <Input formik={formik} label="دمو فیلم" name="demo" />
        <Input formik={formik} label="پوستر فیلم" name="poster" />
        <Input formik={formik} label="زمان فیلم" name="time" />
        <Input formik={formik} label="بازیگران" name="actors" />
        <Input formik={formik} label="کارگردان" name="director" />
        {/*<div className="w-full max-w-[200px] p-4 flex items-center gap-x-4 justify-start">
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
        </div>*/}
        <button type={"submit"} className="w-full max-w-[400px] bg-blue-500 p-4 rounded-lg mt-2 outline-none hover:scale-95 duration-300">افزودن</button>
      </form>
    </section >
  );
}

export default AddNewMovie;