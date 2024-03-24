import { observer } from "./observer";

export const init = () => {
    const config = { subtree: true, childList: true };
    observer.observe(document, config);
  };
  
  init();