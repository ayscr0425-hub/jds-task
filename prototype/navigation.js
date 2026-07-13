export const NAVIGATE_EVENT = "prototype:navigate";
export const BACK_EVENT = "prototype:back";

export function navigateTo(page, options = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent(NAVIGATE_EVENT, {
      detail: {
        page,
        replace: Boolean(options.replace),
      },
    }),
  );
}

export function goBack() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new CustomEvent(BACK_EVENT));
}
