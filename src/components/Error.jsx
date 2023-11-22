const Error = ({ mensaje }) => {
  return (
    <div
      className="
            border-solid border-2
          border-red-800 text-center
            p-3
            uppercase
            font-bold
            mb-3
            rounded-md"
    >
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
