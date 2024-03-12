// Frame.jsx

const Frame = ({src, title }) => {
  return (
    <div className="border">
      <iframe
        title={title}
        src={src}
        className="w-full h-screen"
        allow="fullscreen"
      />
  </div>
  );
};

export default Frame;
