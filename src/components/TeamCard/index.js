import React from 'react';
import './css/team-card.css';
const faker = require('faker');


const TeamCard = () => {
    const image = faker.image.avatar();
    const name = faker.name.firstName()
    return (
        <div className="team-card-main" >
            <table className="card-table fluid">
                <tbody>
                    <tr>
                        <td className="padding max-width">
                            <img src={image} className="team-card-logo"/>
                        </td>
                        <td className="padding">
                            <div className="">
                                <table className="info-table fluid">
                                    <tbody>
                                        <tr className="">
                                            <td colspan="2"className="fluid info-padding team-brd-bt">{name}</td>
                                        </tr>
                                        <tr className="">
                                            <td className="info-padding ">State: FL</td>
                                            <td className="info-padding team-brd-lt">Record: 21-3</td>
                                        </tr>
                                        <tr className="">
                                            <td colspan="2" className="info-padding team-brd-tp">Head Coach: Max Vanarsdale</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TeamCard;