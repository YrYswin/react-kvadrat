import axios from "axios";
import React, { useState, useEffect } from "react";

const ImageUpload: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedImages(filesArray);
    }
  };

  useEffect(() => {
    if (selectedImages.length > 0) {
      const previewUrls = selectedImages.map((file) => URL.createObjectURL(file));
      setPreviewImages(previewUrls);

      return () => {
        previewUrls.forEach((url) => URL.revokeObjectURL(url));
      };
    }
  }, [selectedImages]);

  const onPost = async () => {
    try {
      const formdata = { product: 2, image: selectedImages[0] };
      console.log(selectedImages[0]);
      console.log(formdata);
      const res = await axios.post("http://192.168.68.122:8000/product-images/", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex">
      <h1>Upload Images</h1>
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />

      <div className="flex">
        {previewImages.map((src, index) => (
          <img key={index} src={src} alt={`Preview ${index + 1}`} style={{ width: "100px", margin: "10px" }} />
        ))}
      </div>

      <button className="bg-red-700 text-white" onClick={onPost}>
        SUBMIT
      </button>
    </div>
  );
};

export default ImageUpload;
