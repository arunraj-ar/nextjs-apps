"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label = "Select Image", name = "image" }) => {
  const [selectedImage, setSelectedImage] = useState();
  const imageInput = useRef(null);
  const handleClick = (e) => {
    imageInput?.current?.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setSelectedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setSelectedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!selectedImage && <p>No image selected yet.</p>}
          {selectedImage && (
            <Image src={selectedImage} alt="Image selected by the user." fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleChange}
          required
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
