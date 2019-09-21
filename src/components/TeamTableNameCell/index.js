import React from 'react';
import './css/name-cell.css';



export default props => {
    const { children} = props;
    return (
        <td>
            <table className="logo-container">
                <tbody>
                    <tr className="team-logo">
                        <td>{children[0]}</td>
                        {/* <td className="team-name">{children[1]}</td> */}
                    </tr>
                    <tr>
                        <td className="team-name">{children[1]}</td>
                    </tr>
                </tbody>
            </table>
        </td>
    );
}