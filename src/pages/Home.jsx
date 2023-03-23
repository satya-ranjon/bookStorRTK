import { useState } from "react";
import { useSelector } from "react-redux";
import BookCart from "../components/books/BookCart";
import Button from "../components/ui/Button";
import { useGetBooksQuery } from "../features/api/apiSlice";

const Home = () => {
  const [featuredBooks, setFeaturedBooks] = useState(false);
  const { data, isSuccess, isError, isLoading, error } = useGetBooksQuery();
  const { filter: search } = useSelector((state) => state.books);

  let books = data || [];

  // filter
  if (featuredBooks) {
    books = books?.filter((book) => book.featured === true);
  }
  if (search !== "") {
    books = books?.filter((book) =>
      book.name.toLowerCase().includes(search.toLowerCase().toString())
    );
  }

  // decided what to render
  let content;
  if (isLoading) {
    content = <h1>Loading.....</h1>;
  }
  if (!isLoading && isError) {
    content = <h1>{error.error}</h1>;
  }
  if (!isLoading && !isError && isSuccess && books?.length === 0) {
    content = <h1>Book Not Found !</h1>;
  }
  if (!isLoading && !isError && isSuccess && books?.length > 0) {
    content = books?.map((book) => <BookCart key={book.id} book={book} />);
  }

  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          {isSuccess && (
            <>
              <h4 className="mt-2 text-xl font-bold">Book List</h4>
              <div className="flex items-center space-x-4">
                <Button
                  isActive={!featuredBooks}
                  onClick={() => setFeaturedBooks(false)}>
                  All
                </Button>
                <Button
                  isActive={featuredBooks}
                  onClick={() => setFeaturedBooks(true)}>
                  Featured
                </Button>
              </div>
            </>
          )}
        </div>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content}
        </div>
      </div>
    </main>
  );
};

export default Home;
