const Content = ({title}) => {
  return (
    <div className="text-center mt-52">
      <h1>{title}</h1>
      <p>This content is {title}.</p>
    </div>
  );
};

export default Content;