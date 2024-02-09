const Content = ({title}) => {
  return (
    <div className="text-center mt-52">
      <h1 className="text-xl text-yellow-400 font-semibold font-mono ">{title}</h1>
      <p className="text-xl text-yellow-400 font-semibold font-mono ">This content is {title}.</p>
    </div>
  );
};

export default Content;