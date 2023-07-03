import React from 'react'
import "./Upload.scss";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";


function Upload() {
  return (
    <section className='upload-section'>
      <h1 className='upload-section__title'>Upload Video</h1>
      <article className='upload-section__form'>
        <label htmlFor="upload-image">
          VIDEO THUMBNAIL
          <img src={uploadImage} id="upload-image"/>
        </label>
        <div>
          <label htmlFor="upload-title">
            TITLE YOUR VIDEO
            <input type="text" id="upload-title"/>
          </label>
          <label htmlFor="upload-description">
            ADD A VIDEO DESCRIPTION
            <input type="text" id="upload-description"/>
          </label>
        </div>
      </article>
      <button>PUBLISH</button>
      <p>CANCEL</p>
    </section>
  )
}

export default Upload;