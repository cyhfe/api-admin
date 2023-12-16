import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Progress, Upload } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { request } from "../../request";

const App: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    // formData.append("file", fileList[0] as RcFile);
    fileList.forEach((file) => {
      formData.append("files[]", file as RcFile);
    });
    setUploading(true);
    // You can use any AJAX library you like
    request
      .post("/upload", formData, {
        onUploadProgress: (progressEvent) => {
          console.log(progressEvent);
          // if (progressEvent.total) {
          //   const percent = Math.floor(
          //     (progressEvent.loaded * 100) / progressEvent.total
          //   );
          //   console.log(percent);
          // }
        },
      })
      .then((res) => {
        // setFileList([]);
        console.log(res);
        message.success("upload successfully.");
      })
      .catch(() => {
        message.error("upload failed.");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Select File</Button>
        <Progress percent={30} />
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? "Uploading" : "Start Upload"}
      </Button>
    </>
  );
};

export default App;
