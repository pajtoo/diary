import React from "react";
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
    const navigate = useNavigate();

    return (
        <ul class="main-menu">
            <li>
                <button onClick={() => navigate("/entry/index")}>Přehled záznamů</button>
            </li>
            <li>
                <button onClick={() => navigate("/entry/create")}>Nový záznam</button>
            </li>
        </ul>
    );
}

export default MainMenu;