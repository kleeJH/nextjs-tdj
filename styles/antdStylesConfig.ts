import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorBgElevated: "var(--background)",
    colorIcon: "var(--text-default)",
    colorIconHover: "var(--accent)",
    colorText: "var(--text-default)",
    colorSplit: "var(--text-default)",
  },
  components: {
    Layout: {
      footerBg: "var(--background)",
    }
  }
};

export default theme;