export async function delay({ fails } = { fails: false }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fails) {
        reject(new Error('Error'));
      } else {
        resolve(true);
      }
    }, 3000);
  });
}
