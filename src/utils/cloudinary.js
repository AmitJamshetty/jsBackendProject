import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; // by filesystem in node, with this we can do CRUD on file.

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file uploaded successfully.
    console.log('File uploaded on cloudinary successfully!', response.url)
    return response
  } catch (error) {
    fs.unlinkSync(localFilePath) // remove locally saved temporary file as upload operation failed!.
    return null;
  }
};

export {uploadOnCloudinary}