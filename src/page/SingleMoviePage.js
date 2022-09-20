import { useEffect, useRef, useState } from "react";
import { FiHeart, FiYoutube, FiDownload, FiPlus, FiX, FiUser, FiThumbsDown, FiThumbsUp, FiMessageCircle } from "react-icons/fi"
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import GET_DATA from "../utils/getData";

const SingleMoviePage = () => {

  const [data, setData] = useState(null)

  const location = useLocation()
  const idMovie = location.state.id;

  const boxComment = useRef()
  const [isOpenBoxComment, setIsOpenBoxComment] = useState(true)

  useEffect(() => {
    GET_DATA(`/movies/${idMovie}`, setData)
  }, [])

  function handleIsOpenBoxComment() {
    setIsOpenBoxComment([...boxComment.current.classList].includes("max-h-0"))
  }

  const handleBoxComment = () => {
    const classBoxComment = [...boxComment.current.classList]
    if (classBoxComment.includes("max-h-0")) {
      boxComment.current.classList.replace("max-h-0", "max-h-full")
      handleIsOpenBoxComment()
    } else {
      boxComment.current.classList.replace("max-h-full", "max-h-0")
      handleIsOpenBoxComment()
    }
  }

  const CardComment = ({ comment }) => {
    return (
      <div className="w-full bg-zinc-900 p-4 rounded-md">
        <div className="w-full flex justify-between items-center">
          <div className="w-1/2 flex items-center justify-start gap-x-2 text-gray-200 select-none">
            <FiUser className="text-xl" />
            {comment.nameUser}
            <span className="text-sm text-gray-400">
              {comment.date}
            </span>
          </div>
          <div className="w-1/2 flex items-center justify-end gap-x-4">
            <div className="flex items-center gap-x-2 select-none">
              <FiThumbsUp className="text-lg text-green-500 cursor-pointer" />
              {comment.like}
            </div>
            <div className="flex items-center gap-x-2 select-none">
              <FiThumbsDown className="text-lg text-red-500 cursor-pointer" />
              {comment.disLike}
            </div>
          </div>
        </div>
        <div className="w-ful pt-2 px-5">
          <span className="text-sm text-gray-200 text-justify">
            {comment.commentUser}
          </span>
        </div>
      </div>
    )
  }

  const LoadingDataMovie = () => {
    return (
      <div className="w-[200px] h-[170px] bg-white rounded-lg flex flex-col items-center justify-center gap-y-3 fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
        <span className="block rounded-full h-10 w-10 border-4 border-gray-400 border-l-transparent animate-spin"></span>
        <span className="text-gray-600">loading ...</span>
      </div>
    )
  }

  return (
    <>
      {data ? <section className="w-full max-w-[1600px] mx-auto">
        <article className="w-full h-[525px] md:h-[480px] relative">
          <div className="w-full h-full bg-gradient-to-t from-[#1C1C22]">
            <img src={data.cover} alt={data.faName} className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-0 right-0 w-full h-full bg-blur bg-gradient-to-t from-[#1C1C22] md:via-[#1C1C22]">
            <div className="md:container w-full h-full flex flex-col md:flex-row items-center justify-end">
              <div className="w-[200px] md:w-[250px] h-[280px] md:h-[320px] rounded-lg overflow-hidden">
                <img src={data.cover} alt={data.faName} className="w-full h-full object-cover" />
              </div>
              <div className="w-full flex flex-col items-center md:items-start select-none p-4">
                <div className="flex md:text-xl text-lg items-center justify-center gap-2">
                  <span>{data.type}</span>
                  <h2>{data.faName}</h2>
                  <span>{data.productionYear}</span>
                  <h>{data.enName}</h>
                </div>
                <div className="w-full flex items-center justify-center md:justify-start py-4 gap-x-2 text-gray-400 text-sm border-b border-gray-600 md:border-gray-400">
                  <span>{data.genre}</span>
                  <span className="w-[1px] h-full bg-gray-600"></span>
                  <span>{data.productionYear}</span>
                  <span className="w-[1px] h-full bg-gray-600"></span>
                  <span className="text-orange-500">بالای{data.permissibleAge}سال</span>
                  <span className="w-[1px] h-full bg-gray-600"></span>
                  <span>{data.time}</span>
                </div>
                <div className="w-full flex md:flex-col">
                  <div className="w-full md:border-b border-gray-600 md:border-gray-400 md:pb-4">
                    <div className="w-full flex items-center justify-center md:justify-start gap-x-4 py-2">
                      <div>{data.imdb}<span className="bg-yellow-500 p-2 rounded-md text-sm ml-2">imdb</span></div>
                      <div className="flex items-center p-2"><FiHeart className="bg-green-400 rounded-md text-3xl p-1 ml-2" />{data.satisfaction}</div>
                    </div>
                    <div className="hidden md:flex flex-col gap-y-2 py-2">
                      <div className="flex items-center gap-x-1 text-sm">
                        <span className="text-gray-400">بازیگران :</span>
                        <span>{data.actors}</span>
                      </div>
                      <div className="flex items-center gap-x-1 text-sm">
                        <span className="text-gray-400">کارگردان :</span>
                        <span>{data.director}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="md:container pb-8 w-full flex flex-col md:flex-row items-center px-4 border-b border-gray-500 mb-6">
          {data.demo.length && <div className="w-full">
            <video width="540" height="315" controls poster={data.poster}>
              <source src={data.demo} type="video/mp4" />
            </video>
          </div>}
          <div className="w-full">
            <span className="flex items-center gap-x-2 text-xl mt-6 md:mt-0"><FiYoutube className="text-xl" />داستان {data.type}</span>
            <p className="text-sm text-justify mt-4 text-gray-400 leading-6">{data.story}</p>
            <span className="flex items-center gap-x-2 text-xl mt-6"><FiYoutube className="text-xl" />درباره {data.type}</span>
            <p className="text-sm text-justify mt-4 text-gray-400 leading-6">{data.aboutTheMovie}</p>
          </div>
        </article>
        <article className="px-4 md:container flex flex-col items-center gap-y-3 py-4">
          <h2 className="text-xl mb-4 select-none">باکس دانلود</h2>
          {data.coming === false ? (data.downloads.length ? data.downloads.map(item => {
            return (
              <div className="w-full px-4 py-6 bg-zinc-900 border border-gray-700 rounded-lg flex flex-col md:flex-row items-center gap-4">
                <span className="whitespace-nowrap select-none">دانلود : {item.title}</span>
                <div className="flex items-center md:justify-end justify-center flex-wrap  w-full gap-2">
                  {item.linkDownload.map((link, index) => {
                    return (
                      <button key={index} className="bg-green-500 text-white flex items-center gap-x-1 px-4 py-2 rounded-md">
                        {link.quality}
                        <FiDownload />
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          }) : <span className="flex items-center rounded-lg text-justify justify-start w-full p-4 text-sm bg-zinc-900 text-red-500">لینک دانلود وجود ندارد </span>) : <span className="flex items-center rounded-lg text-justify justify-start w-full p-4 text-sm bg-zinc-900 text-green-500">لینک های دانلود بعد از انتشار فیلم در دسترس قرار میگیرد</span>}
        </article>
        <article className="w-full mt-12">
          <div className="md:container p-4">
            <div className="w-full">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-x-2 select-none">
                  <FiMessageCircle className="text-xl" />
                  {data.comments.length}
                  <span>دیدگاه</span>
                </div>
                <button onClick={handleBoxComment} className="flex items-center gap-x-2 text-green-500 border border-green-500 py-2 px-4 hover:bg-green-500 hover:text-white duration-300 rounded-md">
                  {isOpenBoxComment
                    ? <><FiPlus /> افزودن دیدگاه</>
                    : <FiX className="text-2xl" />
                  }
                </button>
              </div>
              <div ref={boxComment} className="flex justify-start flex-wrap gap-3 max-h-0 overflow-hidden ">
                <span className="w-full text-xl mb-4 mt-8">دیدگاهتان را بنویسید</span>
                <textarea className="p-3 bg-zinc-900 outline-none w-full" placeholder="این فیلم چطور بود؟" />
                <input type="text" className="w-full md:max-w-[425px] p-3 bg-zinc-900 outline-none" placeholder="نام شما" />
                <button className="rounded w-full md:w-auto text-sm py-3 px-8 bg-green-500 hover:bg-green-700 duration-300 outline-none">ثبت دیدگاه</button>
              </div>
              {/* List Comment */}
              <div className="w-full py-4 flex flex-col gap-y-4 border-t border-gray-500 mt-4 ">
                {data.comments.length > 0 ? data.comments.map((comment, index) => <CardComment key={index} comment={comment} />) : <span>دیدگاهی وجود ندارد</span>}
              </div>
            </div>
            <div></div>
          </div>
        </article>
      </section> : <LoadingDataMovie />}
    </>
  );
}

export default SingleMoviePage;