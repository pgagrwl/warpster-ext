export const observer = new MutationObserver(function (mutationList) {
    mutationList.map((mutation) => {
      console.log('observer called');
      
    });
  });
  