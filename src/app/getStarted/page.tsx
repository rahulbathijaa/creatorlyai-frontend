"use client";

import MainContent from ".././components/MainContent";
import TopBar from ".././components/Topbar"; 
import { useEffect, useState } from "react";
import InitialPopup from ".././components/InitialPopup";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [imagesUrls, setImagesUrls] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(true); // State to control InitialPopup

  useEffect(() => {
    setImagesUrls(
      JSON.parse(window.sessionStorage.getItem("imagesUrls") || "[]")
    );
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("imagesUrls", JSON.stringify(imagesUrls));
  }, [imagesUrls]);

  return (
    <div className="page-container">
      <ToastContainer />
      <TopBar
        onNewVideoClick={() => setShowPopup(true)} 
      />
      <div className="content-container">
        <MainContent
          imagesUrls={imagesUrls}
          descriptionText={""}
        />
      </div>
      {showPopup && (
        <InitialPopup
          onClose={() => setShowPopup(false)}
          handleFileSelect={() => {}} 
          videoFile={null}
          text={""} 
          setText={() => {}}
          isLoading={false} 
          setIsLoading={() => {}}
          error={null} 
          startGeneration={() => {}}
          email={""}
          setEmail={() => {}} 
        />
      )}
    </div>
  );
}