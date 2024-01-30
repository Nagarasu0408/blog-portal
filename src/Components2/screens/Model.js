import { useNavigate } from "react-router-dom";


const Model = ({ onCancel, data, content }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="Model-Container" onClick={(e) => {
                if (e.target.className === "Model-Container") {
                    onCancel();
                    console.log('outside');
                }
            }}
            >
                <div className="Model">
                    {/* <div className="Model-Header" onClick={() => onCancel()}><p>&times;</p></div> */}
                    <div><p><input type="checkbox" name="Chackbox" />{content}</p></div>
                    <button onClick={() => navigate('/place')}>{data}</button>
                </div>
            </div>
        </>
    )
}

export default Model;