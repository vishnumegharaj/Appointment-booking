import React, { useState } from 'react';
import axios from 'axios';

const DoctorUploader = () => {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]); // this is a real File object
  };

  const handleSubmit = async () => {
    console.log('Submitting...');
    const formData = new FormData();
    formData.append('name', 'vishnu');
    formData.append('email', 'Vishnumegharaj@gmail.com');
    formData.append('password', 'megh7214');
    formData.append('speciality', 'physician');
    formData.append('degree', 'MCA');
    formData.append('about', 'mca student with computer science skills');
    formData.append('fees', '50');
    formData.append('address', JSON.stringify({ line1: 'xyz', line2: 'abc' }));
    formData.append('experience', '2 years');
    formData.append('image', image); // ✅ this is correct now

    try {
        console.log('Uploading...');
      const res = await axios.post('http://localhost:8085/api/admin/add-doctor', formData, {
        headers: { 'Content-Type': 'multipart/form-data', admintoken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYWRtaW4xMjMiLCJpYXQiOjE3NDUxNDc4MTUsImV4cCI6MTc0NTIzNDIxNX0.9gK1XxXTokFvwCQhZV7s1eghsbg7s-9L29KG9iWnXYY" },
      });
      console.log('Uploaded successfully 🎉:', res.data);
    } catch (err) {
      console.error('Upload failed ❌:', err.response?.data || err.message);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit Doctor</button>
    </div>
  );
};

export default DoctorUploader;
