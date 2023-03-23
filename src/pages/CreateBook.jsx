import React, { useEffect, useState } from "react";
import From from "../components/form/From";
import Alert from "../components/ui/Alert";
import { useCreateBookMutation } from "../features/api/apiSlice";

const CreateBook = () => {
  const [errorMsg, setErrorMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [createBook, { isSuccess, isError }] = useCreateBookMutation();

  const handleError = (value) => {
    setErrorMsg(value);
  };
  const handleSuccess = (value) => {
    setSuccessMsg(value);
  };

  const handleCreate = (value) => {
    createBook(value);
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
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
          <From handleSubmit={handleCreate} isReset={isSuccess} />
        </div>
      </div>
    </main>
  );
};

export default CreateBook;
