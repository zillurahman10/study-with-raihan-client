import React, { useEffect, useState } from 'react';

const Programs = () => {
    const [programs, setPrograms] = useState([])
    // const programs = [
    //     {
    //         programName: 'This is a programName',
    //         startingText: 'This is a starting text',
    //         programImg: 'https://udvash.com/media/Images/UDVASH/program/HSC2022FMT.png',
    //         programFeature: 'Here is some programfeature',
    //         programDescription: 'This is a program description',
    //         programRoutine: 'https://drive.google.com/file/d/1x97vGe_aMopjaHsQ1_sUDelD0hg84zBW/view?usp=sharing'
    //     },
    //     {
    //         programName: 'This is a programName',
    //         startingText: 'This is a starting text',
    //         programImg: 'https://udvash.com/media/Images/UDVASH/program/HSC2022FMT.png',
    //         programFeature: 'Here is some programfeature',
    //         programDescription: 'This is a program description',
    //         programRoutine: 'https://drive.google.com/file/d/1x97vGe_aMopjaHsQ1_sUDelD0hg84zBW/view?usp=sharing'
    //     },
    //     {
    //         programName: 'This is a programName',
    //         startingText: 'This is a starting text',
    //         programImg: 'https://udvash.com/media/Images/UDVASH/program/HSC2022FMT.png',
    //         programFeature: 'Here is some programfeature',
    //         programDescription: 'This is a program description',
    //         programRoutine: 'https://drive.google.com/file/d/1x97vGe_aMopjaHsQ1_sUDelD0hg84zBW/view?usp=sharing'
    //     },
    // ]

    useEffect(() => {
        fetch('programs.json')
            .then(res => res.json)
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h1>সময়োপযোগী প্রোগ্রামসমূহ</h1>
        </div>
    );
};

export default Programs;