import React from 'react';


import { useParams } from 'react-router';

// import Person from './Person/Person';


const CourseInfo = () => {
    const { homeId } = useParams()
   
   
    return (
        <div className="bg-danger container text-center  p-3 text-white" style={{margin:'200px auto'}}> 
            
            <h1>Course Number: {homeId}</h1>
            {/* {
                courses.map(course => <Person course={course}
                ></Person>)
            } */}

          
        </div>
    );
};

export default CourseInfo;