
export const Warpster = (mutation: MutationRecord) => {
  try {
    setTimeout(
      () => {
        if (window.location.href.includes(`twitter.com`)) {

          mutation.addedNodes.forEach((node) => {
            if ((node as HTMLElement)?.dataset?.testid === "cellInnerDiv") {
            }
          });
        }
      },
      Math.floor(Math.random() * 501) + 200,
    );
  } catch (e) {
    console.log(e);
  }
};
