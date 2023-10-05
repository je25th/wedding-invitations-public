export const handleCopyClipBoard = (text) => {
  try {
    navigator.clipboard.writeText(text);
    alert(text + "\n클립보드에 복사되었습니다.");
  } catch (error) {}
};
