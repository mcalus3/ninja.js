const localizations = {
  da: {
    SearchUsers: "Søg brugere",
  },
};

export const useLocalization = (language) => {
  return localizations[language];
};
