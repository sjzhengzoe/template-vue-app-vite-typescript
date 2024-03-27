import useClipboard from "vue-clipboard3";
// 复制
export const copyLink = async (content: string) => {
  const { toClipboard } = useClipboard();
  await toClipboard(content);
};

// 判断当前是手机端还是电脑端
export const isMobile = () =>
  document.getElementsByTagName("body")[0].clientWidth < 1180;
