import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

describe("Prueba de fileUpload", () => {
  test("debe de subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://res.cloudinary.com/juandevsigner/image/upload/v1667516224/journal/minimalism-4k-for-mac-desktop-wallpaper-preview_dgiabw.jpg";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "image.jpg");
    const url = await fileUpload(file);
    console.log(url);
    expect(typeof url).toBe("string");
  });

  test("debe de retornar null", async () => {
    const file = new File([], "image.jpg");
    const url = await fileUpload(file);
    expect(typeof url).toBe(null);
  });
});
