import React, { useState, useEffect } from 'react';
import './Post.scss';
import { Link } from 'react-router-dom';


export const Post = () => {
    const options = [
        {id:'a', value: '', text: 'Name of Sport', disabled: true},
        {id:'b', value: 'running', text: 'Running'},
        {id:'c', value: 'jogging', text: 'Jogging'},
        {id:'d', value: 'yoga', text: 'Yoga'},
        {id:'e', value: 'aerobic', text: 'Aerobic'},
        {id:'f', value: 'strength Training', text: 'Strength Training'},
        {id:'g', value: 'swimming', text: 'swimming'},
        {id:'h', value: 'dance', text: 'Dance'},
        {id:'i', value: 'boxing', text: 'Boxing'},
        {id:'j', value: 'other', text: 'Other'},
      ];

    
      const [form, setForm] = useState({
        selected: '',
        date: '',
        timeStart: '',
        timeEnd: '',
        location: '',
        caption: '',
      });
    
    const [images, setImages] = useState([]);
    const [imageURLs, setImagesURLs] = useState([]);

    
    // ถ้าไม่ใส่รูปภาพจะfailed แต่ถ้าใส่รูปภาพมาจะทำ forEach loop เป็นnewImageUrls
    // แล้ว push ข้อมูลตัวใหม่ใน arr ส่งข้อมูลขึ้นใหม่เป็น imageURLs
    useEffect(() => {
        if (images.length < 1)return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImagesURLs(newImageUrls);
        setForm({
            ...form,
            imageUrls: newImageUrls,
            })
    },[images]);

   const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
    

   const onSubmits = (e) => {
        e.preventDefault();
        console.log(form);
        console.log(images);
   }

    // ส่งข้อมูลขึ้นใหม่
    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    
    return (
        <div className="PostForm">
        <h1>POST</h1>
        <form onSubmit={onSubmits}>

        <div className="content">
            <label>Sport</label>
            <select  required value={form.selected} name="selected" onChange={onChange}>{ options.map(option => (
                <option
                    disabled={option.disabled}
                    key={option.id}
                    value={option.value}>
                         {option.text}
                </option>
                    ))}
            </select>
            {form.selected === 'other' && < input name="addSport" 
                className="addSport"
                onChange={onChange}
                value={form.addSport}
                placeholder='Add Sport...'/>}    
                {/* สร้างเงื่อนไขเวลาเลือก other มีปุ่มให้ add sport เอง */}
        </div>

       <div className="content">
        <label>Date</label>
            <input type="date" 
            name="date" 
            className="dateInput"
            value={form.date}
            onChange={onChange}  required/> 
        </div>
        
        <div className="content">
        <label>Time</label> 
            <input className="inputTime" 
            type="time" 
            name="timeStart"
            value={form.timeStart} 
            onChange={onChange} />  
            <span>-</span>
            <input className="inputTime" 
            type="time" 
            name="timeEnd" 
            value={form.timeEnd}
            onChange={onChange} />
        </div>

        <div className="content">
        <label>Location</label>    
            <input type="text"
            className="locationInput"
            name="location" 
            placeholder="Share your location" 
            value={form.location}
            onChange={onChange}
            required
            />
        </div>
        
        <div className="content">
        <label>caption</label>    
            <textarea type="text" 
            name="caption" 
            placeholder="what is your activity today?"
            value={form.caption}
            onChange={onChange}
            required
            maxLength="200"
            rows="5" cols="50"
            />
        </div>

        <div className="content">
        <label>Photo</label>
            <input type="file"
            className="inputPhoto" 
            name="images" 
            multiple accept="image/*" 
            onChange={onImageChange}
             />
            <p className="choosePhoto">Choose a photo</p>
            {imageURLs.map((imageSrc, index) => (<img width="640" height="360" src={imageSrc} key={index} />))}
           {/* เวลาใส่ภาพจะพรีวิวรูปภาพด้วยตรงนี้  */}
        </div>
        
        <div className='buttonPost'>
            <button className="saveButton" type="submit">SAVE</button> 
            <Link to='/MainPage'><button className="cancelButton" type="submit" >CANCEL</button></Link>
        </div>  
        </form>
        </div>
    );
}