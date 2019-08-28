import createTheme from "../../createTheme";

const colors = {
  primary: "#4f4f4f",
  secondary: "#fff",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
};

const theme = createTheme(
  colors,
  {
    primary: "Montserrat",
    secondary: "Montserrat"
  },
  {
    progress: {
      pacmanTop: {
        background: colors.quaternary
      },
      pacmanBottom: {
        background: colors.quaternary
      },
      point: {
        borderColor: colors.quaternary
      }
    },
    components: {
      text: {
        color: "#fff"
      },
      link: {
        color: "#fff"
      },
      heading: {
        h1: {
          fontSize: "4rem",
          textTransform: "uppercase"
        },
        h2: {
          fontSize: "3.5rem",
          textTransform: "uppercase"
        },
        h3: {
          fontSize: "3rem",
          textTransform: "uppercase"
        },
        h4: {
          fontSize: "2.5rem",
          textTransform: "uppercase"
        },
        h5: {
          fontSize: "2rem",
          textTransform: "uppercase"
        },
        h6: {
          fontSize: "1.5rem",
          textTransform: "uppercase"
        }
      },
      codePane: {
        fontSize: "2rem"
      }
    }
  }
);

export default theme;
