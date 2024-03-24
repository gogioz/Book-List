import { useEffect, useState } from "react";
import axios from "axios";
import {
  add,
  informationCircleOutline,
  pencilOutline,
  trashOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";

import Spinner from "../Components/Spinner";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <IonIcon
            icon={add}
            size="large"
            className=" cursor-pointer border-2 border-sky-800 text-sky-800 "
            // style={{ color: "#8DF7A7" }}
          />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Author
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Publish Year
              </th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.publishYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center ">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <IonIcon
                        icon={informationCircleOutline}
                        size="small"
                        className=" cursor-pointer text-2xl text-green-800 "
                      />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <IonIcon
                        icon={pencilOutline}
                        size="small"
                        className="text-2xl text-yellow-600"
                      />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <IonIcon
                        icon={trashOutline}
                        size="small"
                        className="text-2xl text-red-600"
                      />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
