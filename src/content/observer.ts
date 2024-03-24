import axios from "axios";

export const observer = new MutationObserver(function (mutations) {
    // mutationList.map((mutation) => {
    //   console.log('observer called');
    //   Farcaster
    // });
    for (const mutation of mutations) {
      const { addedNodes }: {addedNodes: any} = mutation;
      for (const node of addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Ensure it's an element node
          const casts = node.querySelectorAll(
            ".flex.min-w-0.flex-1.shrink.flex-row.items-baseline.gap-1"
          );
          for (const cast of casts) {
            const userText = cast.childNodes[1]?.textContent; // Optional chaining for safety
            if (userText?.includes("@")) {
              const user = userText.split("@")[1];
              // console.log(user);
              // await fetchUserFollowerRank(`${user}`); // Await the fetch request
              // await fetchUserEngagementRank(`${user}`); // Await the fetch request
            }
          }
        }
      }
    }
  });
  