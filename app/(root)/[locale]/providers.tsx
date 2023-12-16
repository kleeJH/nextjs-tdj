"use client";

import { ThemeProvider } from "next-themes";
import StyledComponentsRegistry from "@lib/AntdRegistry";
import {AntdTheme} from "@styles/antdStylesConfig";
import { ConfigProvider } from "antd";

export function StyleProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <StyledComponentsRegistry>
        <ConfigProvider theme={AntdTheme}>{children}</ConfigProvider>
      </StyledComponentsRegistry>
    </ThemeProvider>
  );
}
