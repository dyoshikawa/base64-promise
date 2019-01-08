export const base64Promise = async (file: File): Promise<string> => {
  return new Promise((resolve, _reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      return resolve(e.target.result);
    };
  });
};
