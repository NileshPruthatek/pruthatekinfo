import React from "react";

const Paragraph = ({ payload: { data } }) => {
  const { content } = data;
  return (
    <>
      {/* paragraph content */}

      <div className="relative m-0 p-0">
        <p
          style={{
            fontSize: "20px",
            fontFamily: `charter, Georgia, Cambria, "Times New Roman", Times, serif`,
          }}
        >
          {content}
        </p>
      </div>
    </>
  );
};

export default Paragraph;
