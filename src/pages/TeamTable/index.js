import React, {useContext} from 'react';
import TeamCard from '../../components/TeamCard'

import './css/team-table.css';



import TeamNameCell from '../../components/TeamTableNameCell';



export default props => {
    const {hide} = props;
 
    const showTable = () => {
        return (
            <table className='team-table'>
                <tbody>
                    <tr>
                        <th>Team</th>
                        <th>Record</th>
                        <th>Streak</th>

                    </tr>
                    <tr>
                        <TeamNameCell>
                            <img  src={image} height="50" width="50"/>
                            {`Holy Trinity`}
                        </TeamNameCell>
                        <td>
                            10-0
                        </td>
                        <td>
                            W1
                        </td>
                    </tr>
                    <tr>
                        <TeamNameCell>
                            <img  src={image} height="50" width="50"/>
                            {`University of North Florida`}
                        </TeamNameCell>
                        <td>
                            10-0
                        </td>
                        <td>
                            W1
                        </td>
                    </tr>
                    <tr>
                        <TeamNameCell>
                            <img  src={image} height="50" width="50"/>
                            {`Episcapol School of Jacksonville`}
                        </TeamNameCell>
                        <td>
                            10-0
                        </td>
                        <td>
                            W1
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }

    const showCards = () => {


        const clickOnFile = () => {
            console.log("Hello there",document.getElementById('file'))
            document.getElementById('file').click();

        }
        return (
            <table className="fluid card-table">
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <TeamCard />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <TeamCard />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <TeamCard />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <TeamCard />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <TeamCard />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <TeamCard />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <TeamCard />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <TeamCard />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <TeamCard />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <TeamCard />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <TeamCard />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <TeamCard />
                        </td>
                    </tr>
                    <tr><td><input type="file" id="file"/></td></tr>
                </tbody>
            </table>
        );
    }

    const image = "https://media.glassdoor.com/sqll/277204/holy-trinity-episcopal-academy-squarelogo-1534305617796.png"
    return (
        <div>
           {!hide && showTable()}
           {hide && showCards()}
        </div>
    );
}