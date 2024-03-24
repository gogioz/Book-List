import { useEffect, useState } from "react";
import axios from "axios";
import BackButton from "../Components/BackButton";
import Spinner from "../Components/Spinner";
import { useParams } from "react-router-dom";

function ShowBook() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4 border-2 border-sky-400 p-4 flex items-center">
            <span className="text-3xl mr-4  text-gray-500">Id:</span>
            <span className="text-xl mt-1">{book._id}</span>
          </div>
          <div className="my-4 border-2 border-sky-400 p-4 flex items-center">
            <span className="text-3xl mr-4  text-gray-500">Title:</span>
            <span className="text-xl mt-1">{book.title}</span>
          </div>
          <div className="my-4 border-2 border-sky-400 p-4 flex items-center">
            <span className="text-3xl mr-4  text-gray-500">Author:</span>
            <span className="text-xl mt-1">{book.author}</span>
          </div>
          <div className="my-4 border-2 border-sky-400 p-4 flex items-center">
            <span className="text-3xl mr-4  text-gray-500">Publish Year:</span>
            <span className="text-xl mt-1">{book.publishYear}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowBook;
