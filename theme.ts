// theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      "html, body": {
        fontSize: "62.5%",
      },
    },
  },
});

export default theme;
