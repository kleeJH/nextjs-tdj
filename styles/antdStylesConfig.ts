import { ThemeConfig } from 'antd';

export const AntdTheme: ThemeConfig = {
  token: {
    colorBgElevated: "var(--background)",
    colorIcon: "var(--text-default)",
    colorIconHover: "var(--accent)",
    colorText: "var(--text-default)",
    colorSplit: "var(--text-default)"
  },
  components: {
    Layout: {
      footerBg: "var(--background)",
    },
    Collapse: {
      contentBg: "var(--background)"
    }
  }
};
