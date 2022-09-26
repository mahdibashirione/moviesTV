import { Button, Link } from "@mui/material";
import { FiChevronLeft } from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <section className="w-full h-screen">
      <div className="w-full h-full p-4 md:container flex flex-col justify-center items-center gap-y-4">
        <h2>صفحه ی مورد نظر پیدا نشد</h2>
        <Link href="/" >
          <Button endIcon={<FiChevronLeft className="mr-2" />} variant="outlined" style={{ fontFamily: "iranSans", paddingLeft: "0.4rem" }}>برگشت به صفحه اصلی</Button>
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;