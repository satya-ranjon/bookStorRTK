import { Link } from "react-router-dom";
import { useDeleteBookMutation } from "../../features/api/apiSlice";
import DeleteButton from "../ui/DeleteButton";
import EditButton from "../ui/EditButton";
import BookRating from "./BookRating";

const BookCart = ({ book }) => {
  const { id, thumbnail, featured, author, price, name, rating } = book || {};
  const [deleteBook, { isError, isSuccess }] = useDeleteBookMutation();

  const handleDeleteBook = () => {
    deleteBook(id);
  };

  return (
    <div className="book-card">
      <img
        className="h-[240px] w-[170px] object-cover"
        src={thumbnail}
        alt="book"
      />
      <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
        <div className="flex items-center justify-between">
          {featured && <span className="lws-badge">featured</span>}
          <div className="text-gray-500 space-x-2">
            <Link to={`/edit/${id}`}>
              <EditButton />
            </Link>
            <DeleteButton onClick={handleDeleteBook} />
          </div>
        </div>

        <div className="space-y-2 mt-4 h-full">
          <h4 className="lws-book-name">{name}</h4>
          <p className="lws-author">{author}</p>
          <BookRating rating={rating} />
          <p className="lws-price">BDT {price}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCart;
