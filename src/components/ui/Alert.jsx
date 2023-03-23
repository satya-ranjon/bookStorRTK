/**
 * @param {string} type //  default error
 * @param {string} msg // error message
 * @param {function} isClose // is a function return false
 * @returns JSX
 */

const Alert = ({ type = "error", msg, isClose = () => {} }) => {
  const closeBtn = () => {
    isClose(false);
  };
  return (
    <div
      className={`flex justify-between py-4 px-6  ${
        type !== "error" ? "bg-green-50" : "bg-red-50"
      } text-[#5d5d5d]`}>
      <p className="font-sans">{msg}</p>
      <button className="font-bold" onClick={closeBtn}>
        &#10005;
      </button>
    </div>
  );
};

export default Alert;
