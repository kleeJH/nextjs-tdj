import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorBgElevated: "var(--background)",
    colorIcon: "var(--text-color)",
    colorIconHover: "var(--accent)",
    colorText: "var(--text-color)",
    colorSplit: "var(--text-color)",
  },
  components: {
    Layout: {
      footerBg: "var(--background)",
    }
  }
};

export default theme;