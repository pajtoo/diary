import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../utils/api";

const EntryForm = () => {
    const navigate = useNavigate();

    const [entry, setEntry] = useState({
        heading: "",
        text: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        postRequest("/entry/create", entry)
            .then(() => {
                    navigate("/entry/index");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="form">
            <h1 className="form-heading">Nový záznam</h1>
            <hr />
            <input
                type="text"
                value={entry.heading}
                onChange={(e) => setEntry({...entry, heading: e.target.value})}
                placeholder="Zadejte nadpis příspěvku"
                maxLength={100}
            />
            <form onSubmit={handleSubmit}>
                <></>
                <textarea
                    value={entry.text} // Vazba hodnoty na stav
                    onChange={(e) => setEntry({...entry, text: e.target.value})}
                    rows="20"
                    cols="70"
                    placeholder="Milý deníčku..."
                ></textarea>
                <input type="submit" value="Uložit" />
            </form>
        </div>
    );
};

export default EntryForm;
