import "../public/styles.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "gray",
    values: [
      {
        name: "white",
        value: "#FFF",
      },
      {
        name: "gray",
        value: "#DDD",
      },
    ],
  },
};
