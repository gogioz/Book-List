import { useState } from "react";
import axios from "axios";
import BackButton from "../Components/BackButton";
import Spinner from "../Components/Spinner";
import { useNavigate } from "react-router-dom";

function CreateBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An error happened. Please check your  console");
        console.log(err);
      });
  };
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4 flex flex-col">
          <label className="text-xl mt-4 text-gray-500">
            Title
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
            />
          </label>
          <label className="text-xl mt-4 text-gray-500">
            Author
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
            />
          </label>
          <label className="text-xl mt-4 text-gray-500">
            Publish Year
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
            />
          </label>
        </div>

        <button
          className="p-2 bg-sky-300 m-8 text-white text-xl"
          onClick={handleSaveBook}
        >
          Save Book
        </button>
      </div>
    </div>
  );
}

export default CreateBooks;