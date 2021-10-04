import React from 'react';

import { useParams } from 'react-router';

const CourseInfo = () => {
    const { homeId } = useParams()
   
    return (
        <div className="bg-dark d-inline-block p-3 text-warning" style={{margin:'200px 0'}}> 
            
            <h1>Course Number: {homeId}</h1>
        </div>
    );
};

export default CourseInfo;