"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "@/app/components/button";
import { Separator } from "./separator";
import { Input } from "@/app/components/input";
import { IoClose } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";

interface InitialPopupProps {
  onClose: () => void;
  handleFileSelect: (selectedFile: File) => void;
  videoFile: File | null;
  text: string | null;
  setText: Dispatch<SetStateAction<string | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  error: string | null;
  startGeneration: () => void;
  email: string | null;
  setEmail: Dispatch<SetStateAction<string>>;
}

const InitialPopup: React.FC<InitialPopupProps> = ({
  onClose,
  handleFileSelect,
  videoFile,
  text,
  setText,
  isLoading,
  setIsLoading,
  error,
  startGeneration,
  email,
  setEmail,
}) => {
  const [showGame, setShowGame] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      handleFileSelect(event.target.files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      handleFileSelect(event.dataTransfer.files[0]);
    }
  };

  const handleStartGeneration = () => {
    console.log("Email:", email);
    setShowGame(true);
    startGeneration();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[700px] h-[90%] max-h-[800px] flex flex-col overflow-y-auto ${isDragging ? 'border-4 border-dashed border-blue-500' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-row justify-between">
          <div className="mb-2">
            {showGame ? (
              <>
                <h2 className="text-2xl font-bold font-inter">Wonderful.</h2>
                <p className="text-lg font-inter">We'll get your thumbnails within 2 minutes. Here's a fun game to play while you wait.</p>
              </>
            ) : (
              <h2 className="text-2xl font-bold font-inter">Upload your video</h2>
            )}
          </div>
          <Button
            onClick={onClose}
            className="p-2 bg-transparent hover:bg-transparent rounded-full"
          >
            <IoClose className="text-black" />
          </Button>
        </div>
        <Separator className="mb-10" />
        {showGame ? (
          <iframe
            style={{ border: "none", width: "100%", height: "100%" }}
            src="https://rive.app/s/BCIc2D81R0GYCPQBQx9loQ/embed"
            allowFullScreen
            allow="autoplay"
          ></iframe>
        ) : (
          <div className="flex-grow flex flex-col space-y-12 overflow-y-auto">
            <div className="flex flex-col items-center space-y-4">
              <FiUpload className="text-6xl text-gray-400" />
              <h3 className="text-lg font-bold font-inter text-black">
                Select a video to upload
              </h3>
              <p className="text-sm text-gray-500 font-inter text-center">
                We'll use your video to generate the thumbnails and description.
              </p>
              <Button
                variant="outline"
                className="w-64 h-14 text-md font-bold font-inter py-2 px-4 rounded-lg"
                onClick={() => document.getElementById("video-upload")?.click()}
              >
                Select files
              </Button>
              <input
                id="video-upload"
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleVideoUpload}
              />
              <p className="text-sm text-gray-500">
                {videoFile ? videoFile.name : "No file chosen"}
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg font-bold font-inter text-black">
                Write some thumbnail text
              </h3>
              <p className="text-sm text-gray-500 font-inter">
                Add a few words that you want to show up on your thumbnail.
              </p>
              <Input
                type="text"
                value={text ?? ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setText(event.target.value)
                }
                placeholder="Thumbnail Text"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg font-bold font-inter text-black">
                Enter your email
              </h3>
              <p className="text-sm text-gray-500 font-inter">
                We'll use your email to send the final images in case something
                goes wrong.
              </p>
              <Input
                type="email"
                value={email ?? ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(event.target.value)
                }
                placeholder="Enter your email"
              />
            </div>
          </div>
        )}
        {!showGame && (
          <>
            <Separator className="mt-10" />
            <div className="flex justify-end">
              <Button
                variant="outline"
                className="mt-4 font-bold py-2 px-4 font-inter rounded shadow-md"
                onClick={handleStartGeneration}
                disabled={!videoFile || !text || !email}
              >
                Generate
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InitialPopup;