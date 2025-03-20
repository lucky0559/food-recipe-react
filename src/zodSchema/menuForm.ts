import * as z from "zod";

const MAX_FILE_SIZE = 1 * 1024 * 1024;
const DIMENSIONS = { width: 580, height: 580 };
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp"
];

const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export const validationMenuSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  image: z.union([
    z.string().min(2, "Please select file"),
    z
      .instanceof(File, {
        message: "Please select an image file."
      })
      .refine(file => file.size <= MAX_FILE_SIZE, {
        message: `The image is too large. Please choose an image smaller than ${formatBytes(
          MAX_FILE_SIZE
        )}.`
      })
      .refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message: "Please upload a valid image file (JPEG, PNG, or WebP)."
      })
      .refine(
        file =>
          new Promise(resolve => {
            const reader = new FileReader();
            reader.onload = e => {
              const img = new Image();
              img.onload = () => {
                const meetsDimensions =
                  img.width === DIMENSIONS.width &&
                  img.height === DIMENSIONS.height;
                resolve(meetsDimensions);
              };
              img.src = e.target?.result as string;
            };
            reader.readAsDataURL(file);
          }),
        {
          message: `The image dimensions are invalid. Please upload an image ${DIMENSIONS.width}x${DIMENSIONS.height} pixels.`
        }
      )
      .nullable()
  ]),
  description: z.string().nonempty("Please enter description"),
  recipes: z.array(z.string()).min(1, "Must have at least one recipe"),
  procedures: z.array(z.string()).min(1, "Must have at least one procedure"),
  category: z.array(z.string()).min(1, "Must have at least one category")
});
