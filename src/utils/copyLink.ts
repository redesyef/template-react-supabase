export const copyLink = (textToCopy: string) => {
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log("Link copied successfully");
    })
    .catch((error) => {
      console.error("Error al copiar al portapapeles:", error);
    });
};


