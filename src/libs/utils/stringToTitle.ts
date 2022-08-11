export default (value?: string): string => {
  if (!value || !(value?.length !== 0)) {
    return "";
  }
  return value
    .split(" ")
    .map((item) =>
      item
        .split("")
        .map((sub, index) =>
          index === 0 || value[index - 1] === " "
            ? sub.toUpperCase()
            : sub.toLowerCase()
        )
        .join("")
    )
    .join(" ");
};
