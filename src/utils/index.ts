import useClipboard from "vue-clipboard3";
// 复制
export const copyLink = async (content: string) => {
  const { toClipboard } = useClipboard();
  await toClipboard(content);
};
