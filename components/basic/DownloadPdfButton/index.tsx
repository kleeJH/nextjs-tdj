"use client";

import { useState } from "react";
import { Modal } from "antd";
import { AlertCircle, Download } from "lucide-react";
import Link from "next/link";

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
      {/* <Link
        href={""}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
        <ShinyButton buttonText="Download Enrolment Form" />
      </Link> */}
      <ShinyButton
        buttonText="Download Enrolment Form"
        icon={<Download aria-hidden="true" className="h-4 w-4" />}
        callbackFunc={showModal}
      />

      <Modal
        open={open}
        closable={false}
        title={
          <div className="flex flex-row gap-3 items-center pink-text-gradient text-[18px] font-semibold">
            <AlertCircle aria-hidden="true" className="h-5 w-5 text-accent" />
            <h1> Confirmation</h1>
          </div>
        }
        onOk={handleConfirm}
        okType="default"
        okText="Confirm"
        okButtonProps={{
          style: { backgroundColor: "hsla(96, 65%, 63%, 0.7)"  },
        }}
        onCancel={handleCancel}
      >
        <p>Do you wish to download the enrolment form?</p>
      </Modal>
    </>
  );
};

export default DownloadPdfButton;
