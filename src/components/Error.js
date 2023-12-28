import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops.... page not found</h1>
      <h4>
        {error.status}: {error.statusText}
      </h4>
    </div>
  );
};

export default Error;
