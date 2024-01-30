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

    function deleteHandler(image) {
        setSelectedImages(selectedImages.filter((e) => e !== image));
        URL.revokeObjectURL(image);
    }
    return (
        <>
            <form>
                <div className='Registration_details'>
                    <div className='Customer_details'>
                        <p id='Header'>Registration Form</p>
                        <div className='Profile_pic'></div>
                        <input type='text' placeholder='Name' />
                        <input type='text' placeholder='Email' />
                        <input type='text' placeholder='Phone' />
                        <input type='text' placeholder='Mobile' />
                        <input type='text' placeholder='Location_city' />
                        <input type='text' placeholder='Local_Area_Name' />
                        <input type='text' placeholder='Quotes' />
                        <textarea type='text' placeholder='About Me'></textarea>
                    </div>
                    <div className='Shop_deatils'>
                        <input type='text' placeholder='Shop_Name' />
                        <input type='text' placeholder='Shop_Type(Veg/Non-Veg)' />
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
                        <textarea type='text' placeholder='Shop Description' />
                        <textarea type='text' placeholder='Shop Address' />
                        <input type='text' placeholder='Location' />
                        <input type='text' placeholder='FaceBook' />
                        <input type='text' placeholder='WhatsApp' />
                        <input type='text' placeholder='Instagram' />

                    </div>
                </div>
                <div className="Check_Box"><p><input type="checkBox" /> Accept All <a href="#">Terms & Condition</a></p></div>
                <button id="Submit_btn">Submit</button>
            </form>
        </>
    );
}

export default OwnerRegistrationForm;