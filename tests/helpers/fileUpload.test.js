import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";
cloudinary.config({
  cloud_name: "juandevsigner",
  api_key: "786643342274496",
  api_secret: "hRQaR30nAOyMsI2aCYS2ZNhQ8rk",
  secure: true,
});

describe("Prueba de fileUpload", () => {
  test("debe de subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://res.cloudinary.com/juandevsigner/image/upload/v1667518613/journal/MM_tiger_wallpaper_3840x21604k-scaled_i0p3qp.jpg";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "image.jpg");
    const url = await fileUpload(file);
    expect(typeof url).toBe("string");

    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");
    await cloudinary.api.delete_resources(["journal/" + imageId], {
      resource_type: "image",
    });
  });
});
