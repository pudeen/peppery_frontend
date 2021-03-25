import React from 'react';

export const StoreContext = React.createContext(null);

export default ({ children }) => {
  const [jobs, setJobs] = React.useState([]);

  const store = {
    jobs: [jobs, setJobs],
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
