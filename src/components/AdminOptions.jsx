
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/AdminOptions.css';

const AdminOptions = ({ addProdact }) => { // קבלת הפונקציה addProdact
    const [nameValue, setName] = useState(''); // שם המוצר
    const [priceValue, setPrice] = useState(''); // מחיר המוצר
    const [imgValue, setimg] = useState('');
    const [descriptionValue, setdescription] = useState('');
    const navigate = useNavigate();

    const addItem = (event) => {
        event.preventDefault(); // כדי למנוע טעינת דף מחדש
        const newItem = { name: nameValue, price: priceValue, img: imgValue, description: descriptionValue };
        addProdact(newItem); // קריאה לפונקציה addProdact שהועברה כ-prop
        setName(""); // ריקון השדות אחרי הוספת המוצר
        setPrice("");
        setimg("");
        setdescription("");
        alert("המוצר נוסף בהצלחה");
        navigate('/Products'); // ניווט לדף המוצרים
    };

    return (
        <div className="admin-options-container">
            <h1>הוסף מוצר חדש</h1>
            <form onSubmit={addItem}>
                <div>
                    <label>שם מוצר:</label>
                    <input
                        type="text"
                        value={nameValue}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="הכנס שם מוצר"
                        className="input-field"
                    />
                </div>
                <div>
                    <label>מחיר מוצר:</label>
                    <input
                        type="number"
                        value={priceValue}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="הכנס מחיר מוצר"
                        className="input-field"
                    />
                </div>
                <div>
                    <label>תמונה:</label>
                    <input
                        type="text"
                        value={imgValue}
                        onChange={(e) => setimg(e.target.value)}
                        placeholder="הכנס תמונת מוצר"
                        className="input-field"
                    />
                </div>
                <div>
                    <label>תאור מוצר:</label>
                    <input
                        type="text"
                        value={descriptionValue}
                        onChange={(e) => setdescription(e.target.value)}
                        placeholder="הכנס תאור מוצר"
                        className="input-field"
                    />
                </div>
                <button type="submit" className="submit-button">הוסף מוצר</button>
            </form>
        </div>
    );
};

export default AdminOptions;
