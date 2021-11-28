
import { useEffect } from 'react';
import { useState } from 'react';

const UseCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./learn.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    }, [])
    return [courses]
};

export default UseCourse;