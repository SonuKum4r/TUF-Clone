import React, { useState } from 'react';
import { LuPlus } from 'react-icons/lu';
import { SiGeeksforgeeks } from 'react-icons/si';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { GrArticle } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";
import './Table.css';
import problemList from '../Data/data';

const Table = () => {
    return (
        <>
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Problem</th>
                        <th>Article</th>
                        <th>YouTube</th>
                        <th>Practice</th>
                        <th>Note</th>
                        <th>Difficulty</th>
                        <th>Revision</th>
                    </tr>
                </thead>
                <tbody>
                    {problemList.map((problem) => (
                        <TableRow key={problem.id} problem={problem} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

const TableRow = ({ problem }) => {
    const [revision, setRevision] = useState(problem.revision);

    const handleRevisionToggle = () => {
        setRevision((prev) => !prev);
    };

    return (
        <>
            <tr>
                <td>
                    <input type="checkbox" defaultChecked={problem.status} />
                </td>
                <td>
                    <a href={problem.articleLink}>{problem.problem}</a>
                </td>
                <td>
                    <a href={problem.articleLink}><GrArticle /></a>
                </td>
                <td>
                    <a href={problem.youtubeLink}><IoLogoYoutube className='youtube-icon' /></a>
                </td>
                <td>
                    <a href={problem.practiceLink}>
                        <SiGeeksforgeeks className='geeks-icon' />
                    </a>
                </td>
                <td className="add-note">
                    <LuPlus />
                </td>
                <td>
                    <div className={`difficulty ${problem.difficulty.toLowerCase()}`}>
                        {problem.difficulty}
                    </div>
                </td>
                <td className="revision">
                    {revision ? (
                        <FaStar onClick={handleRevisionToggle} />
                    ) : (
                        <FaRegStar onClick={handleRevisionToggle} />
                    )}
                </td>
            </tr >
        </>
    );
};

export default Table;