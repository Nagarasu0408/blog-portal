import axios from "axios";
import React, { useState } from "react";

function OwnerRegistrationForm() {
    const [selectedImages, setSelectedImages] = useState([]);

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });

        setSelectedImages((previousImages) => previousImages.concat(imagesArray));

        // FOR BUG IN CHROME
        event.target.value = "";
    };

    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [mobile, setMobile] = useState('');
    const [location_city, setLocationCity] = useState('');
    const [local_Area_name, setLocalArea] = useState('');
    const [quotes, setQuotes] = useState('');
    const [about_me, setAbout] = useState('');
    const [shop_name, setShopName] = useState('');
    const [shop_type, setType] = useState('');
    const [shop_des, setShopDes] = useState('');
    const [shop_address, setShopAddress] = useState('');
    const [location, setLocation] = useState('');
    const [facebook, setFacebook] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [instagram, setInstagram] = useState('');




    // formData collect in DB
    const SubmitData = (e) => {
        e.preventDefault();
        if (Name == '' || email == '' || phone == '' || mobile == '' || location_city == ''
            || local_Area_name == '' || quotes == '' || about_me == '' || shop_name == ''
            || shop_type == '' || shop_des == '' || shop_address == '' || location == '' ||
            facebook == '' || whatsapp == '' || instagram == '') {
            console.log('Fill all the Field');
            alert("Fill all the Field");

        }
        else {
            axios.post('http://localhost:3001/OwnerRegistration', {
                Name, email, phone,
                mobile, location_city,
                local_Area_name, quotes,
                about_me, shop_name, shop_type,
                shop_des, shop_address, location,
                facebook, whatsapp, instagram
            })
                .then(console.log("Ok Done"))
                .catch(err => console.log(err));
        }
    };








    function deleteHandler(image) {
        setSelectedImages(selectedImages.filter((e) => e !== image));
        URL.revokeObjectURL(image);
    }
    return (
        <>
            <form onSubmit={SubmitData}>
                <div className='Registration_details'>
                    <div className='Customer_details'>
                        <p id='Header'>Registration Form</p>
                        <div className='Profile_pic'></div>
                        <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                        <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        <input type='text' placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />
                        <input type='text' placeholder='Mobile' onChange={(e) => setMobile(e.target.value)} />
                        <input type='text' placeholder='Location_city' onChange={(e) => setLocationCity(e.target.value)} />
                        <input type='text' placeholder='Local_Area_Name' onChange={(e) => setLocalArea(e.target.value)} />
                        <input type='text' placeholder='Quotes' onChange={(e) => setQuotes(e.target.value)} />
                        <textarea type='text' placeholder='About Me' onChange={(e) => setAbout(e.target.value)}></textarea>
                    </div>
                    <div className='Shop_deatils'>
                        <input type='text' placeholder='Shop_Name' onChange={(e) => setShopName(e.target.value)} />
                        <input type='text' placeholder='Shop_Type(Veg/Non-Veg)' onChange={(e) => setType(e.target.value)} />
                        <div className='Upload_img'>
                            <section>
                                <label>
                                    Pick Best Image
                                    <br />
                                    <span>up to 10 images</span>
                                    <input
                                        type="file"
                                        name="images"
                                        onChange={onSelectFile}
                                        multiple
                                        accept="image/png , image/jpeg, image/webp"
                                    />
                                </label>
                                <br />

                                <input type="file" multiple />

                                {selectedImages.length > 0 &&
                                    (selectedImages.length > 10 ? (
                                        <p className="error">
                                            You can't upload more than 10 images! <br />
                                            <span>
                                                please delete <b> {selectedImages.length - 10} </b> of them{" "}
                                            </span>
                                        </p>
                                    ) : (
                                        <button
                                            className="upload-btn"
                                            onClick={() => {
                                                console.log(selectedImages);
                                            }}
                                        >
                                            UPLOAD {selectedImages.length} IMAGE
                                            {selectedImages.length === 1 ? "" : "S"}
                                        </button>
                                    ))}

                                <div className="images">
                                    {selectedImages &&
                                        selectedImages.map((image, index) => {
                                            return (
                                                <div key={image} className="image">
                                                    <img src={image} height="200" alt="upload" />
                                                    <button onClick={() => deleteHandler(image)}>
                                                        &times;
                                                    </button>
                                                    {/* <p>{index + 1}</p> */}
                                                </div>
                                            );
                                        })}
                                </div>
                            </section>
                        </div>
                        <textarea type='text' placeholder='Shop Description' onChange={(e) => setShopDes(e.target.value)} />
                        <textarea type='text' placeholder='Shop Address' onChange={(e) => setShopAddress(e.target.value)} />
                        <input type='text' placeholder='Location' onChange={(e) => setLocation(e.target.value)} />
                        <input type='text' placeholder='FaceBook' onChange={(e) => setFacebook(e.target.value)} />
                        <input type='text' placeholder='WhatsApp' onChange={(e) => setWhatsApp(e.target.value)} />
                        <input type='text' placeholder='Instagram' onChange={(e) => setInstagram(e.target.value)} />

                    </div>
                </div>
                <div className="Check_Box"><p><input type="checkBox" /> Accept All <a href="#">Terms & Condition</a></p></div>
                <button type="submit" id="Submit_btn">Submit</button>
            </form>
        </>
    );
}

export default OwnerRegistrationForm;