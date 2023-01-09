import { useState } from "react";

const useFileUpload = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const uploadImage: any = async (file: any) => {
    setLoading(true);
    const formData = new FormData();

    formData.append("upload_preset", "e50lv9tp");
    formData.append("file", file[0]);

    const data = await fetch("https://api.cloudinary.com/v1_1/dkjla10fg/image/upload", {
      method: "POST",
      body: formData,
    }).then((r) => r.json());

    setData(data);
    setLoading(false);
  };

  return [{ data, loading }, uploadImage];
};

export default useFileUpload;
