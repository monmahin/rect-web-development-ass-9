import React from 'react';

import { useParams } from 'react-router';

const CourseInfo = () => {
    const { homeId } = useParams()
   
    return (
        <div className="bg-danger container text-center  p-3 text-white" style={{margin:'200px auto'}}> 
            
            <h1>Course Number: {homeId}</h1>
        </div>
    );
};

export default CourseInfo;