import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import From from "../components/form/From";
import Alert from "../components/ui/Alert";
import {
  useGetBookQuery,
  useUpdateBookMutation,
} from "../features/api/apiSlice";

const UpdateBook = () => {
  const [errorMsg, setErrorMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const { bookId } = useParams();
  const {
    data: book,
    isSuccess: bookLoadSuccess,
    isError: bookLoadError,
    isLoading,
    error,
  } = useGetBookQuery(bookId);
  const [updateBook, { isError, isSuccess }] = useUpdateBookMutation();

  const handleError = (value) => {
    setErrorMsg(value);
  };
  const handleSuccess = (value) => {
    setSuccessMsg(value);
  };

  let initialData = {};
  if (bookLoadSuccess) {
    initialData = {
      name: book.name,
      author: book.author,
      thumbnail: book.thumbnail,
      price: book.price,
      rating: book.rating,
      featured: book.featured,
    };
  }

  const handleUpdate = (value) => {
    updateBook({ id: book.id, data: value });
  };

  useEffect(() => {
    setErrorMsg(isError);
    setSuccessMsg(isSuccess);
  }, [isError, isSuccess]);

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        {errorMsg && (
          <Alert msg="Some error occurred !" isClose={handleError} />
        )}
        {successMsg && (
          <Alert
            msg="Book Create Successfully !"
            isClose={handleSuccess}
            type="success"
          />
        )}
        {bookLoadError && <h1>{error.error}</h1>}
        {isLoading && <h1>Loading..... !</h1>}

        {bookLoadSuccess && (
          <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
            <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
            <From initialValue={initialData} handleSubmit={handleUpdate} />
          </div>
        )}
      </div>
    </main>
  );
};

export default UpdateBook;
