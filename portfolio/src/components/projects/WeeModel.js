import { useNavigate } from 'react-router-dom';

function WeeModel() {
    const navigate = useNavigate();

    return (
        <div className="comp_item main-content" id="Description">
            <button className="back-button" onClick={() => navigate('/TLavoie/experience')}>Back</button>
            <h1 className="space">WeeModel</h1>
            <p>Details about the WeeModel project...</p>
        </div>
    );
}

export default WeeModel;
