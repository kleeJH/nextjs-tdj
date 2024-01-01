"use client"

import { useState } from "react";
import { Modal } from "antd";

import ShinyButton from "../ShinyButton";

const DownloadPdfButton = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleConfirm = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <a
          href={""}
          download="Example-PDF-document"
          target="_blank"
          rel="noreferrer"
        >
          <button>Download .pdf file</button>
        </a>
      </div>

      <Modal
        open={open}
        title="Title"
        onOk={handleConfirm}
        okText={"Confirm"}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default DownloadPdfButton;
