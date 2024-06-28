import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './css/Create.css';

function Create() {
  const [contentColor, setContentColor] = useState('rgba(255, 255, 255, 1)');
  const [backgroundImage, setBackgroundImage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContentColorChange = (color) => {
    setContentColor(`rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`);
  };

  return (
    <div>
      <p>Create Post</p>
      <div className='form-group'>
        
        <div className='img-container'>
          {backgroundImage ? (
            <img src={backgroundImage} alt='Uploaded Background' className='uploaded-image' />
          ) : (
            <input type='file' onChange={handleImageChange} />
          )}
        </div>

        <div className='content-container'>
          <label>
            Content:
            <input className='input-create' type='text' placeholder='Title' />
          </label>
          <label>
            Content:
            <input className='input-create-content' type='text' placeholder='Content' />
          </label>
          <label>
            Author:
            <input className='input-create' type='text' placeholder='Author' />
          </label>
          <label>
            Category:
            <select className='input-create'>
              <option value='poem'>Poem</option>
              <option value='quote'>Quote</option>
              <option value='thought'>Thought</option>
              <option value='haikyuu'>Haikyuu</option>
            </select>
          </label>
          <label>
            Tags (separate them with commas):
            <input className='input-create' type='text' placeholder='Separate them with , ' />
          </label>
        </div>
      </div>
          <label>
            Content Color (RGBA):
            <SketchPicker color={contentColor} onChange={handleContentColorChange} />
          </label>
    </div>
  );
}

export default Create;
