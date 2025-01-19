import React, {useEffect, useState} from "react";

import {deleteRequest, getRequest} from "../utils/api";
import EntryTable from "./EntryTable";

const EntryIndex = () => {
    const [entries, setEntries] = useState([]);

    const deleteEntry = async (id) => {
        try {
            await deleteRequest("/entry/" + id);
            } catch (error) {
            console.log(error.message);
             }
        setEntries(entries.filter((item) => item.id !== id));
    };

    useEffect(() => {
        getRequest("/entry/index")
            .then((data) => setEntries(data))
            .catch(error => {
                console.log(error);
                });
    }, []);

    return (
        <div>
            <EntryTable
                deleteEntry={deleteEntry}
                items={entries}
            />
        </div>
    );
};
export default EntryIndex;
