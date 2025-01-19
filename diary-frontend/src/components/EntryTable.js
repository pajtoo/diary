import React from "react";

const EntryTable = ({ items, deleteEntry }) => {
    return (
        <table>
            <tbody>
                {items.map((item, index) => (
                    <>
                        <tr key={`${index + 1}-1`} style={{ fontWeight: "bold" }}>
                            <td>{item.heading}</td>
                            <td>{item.createdAt}</td>
                            <td>
                                <button onClick={() => deleteEntry(item.id)}>
                                    smazat
                                </button>
                            </td>
                        </tr>
                        <tr key={`${index + 1}-2`}>
                            <td>{item.text}</td>
                        </tr>
                    </>
                ))}
            </tbody>
        </table>
    );
};

export default EntryTable;
