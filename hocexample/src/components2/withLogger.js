import React, { useEffect } from "react";

const WithLogger = (WrappedComponent) => {
  const WithLogger = (props) => {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted`);

      return () => {
        console.log(`Component ${WrappedComponent.name} Unmounted`);
      };
    }, []);

    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} Updated`);
    });

    return <WrappedComponent {...props} />;
  };

  WithLogger.displayName = `withLogger(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return WithLogger;
};

export default WithLogger;
