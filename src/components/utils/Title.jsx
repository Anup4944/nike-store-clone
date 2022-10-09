import React from "react";

const Title = ({ title }) => {
  return (
    <div className="grid items-center">
      <h1 className="text-5xl lg:4xl md:3xl font-bold text-slate-900 filter drop-shadow-lg">
        {title}
      </h1>
    </div>
  );
};

export default Title;
