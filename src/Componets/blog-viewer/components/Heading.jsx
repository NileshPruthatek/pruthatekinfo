const Heading = ({ payload: { data }, fontSize }) => {
  const { content } = data;

  return (
    <>
      <div className="relative m-0 p-0">
        <h1
          className={`text-4xl font-extrabold`}
          style={{
            fontSize: `${fontSize}px`,
            fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
            fontWeight: "700",
            letterSpacing: "-0.016em",
          }}
        >
          {content}
        </h1>
      </div>
    </>
  );
};

export default Heading;
