import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addCourseAction(title) {
  return { type: 'ADD_COURSE', title }
}

export default function CourseList() {

  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch(addCourseAction('GraphQL'))
  }
  function clearCourses(){
    dispatch({ type: 'CLEAR_COURSES'})
  }
  return (
    <>
      <ul>
        { courses.map(course => <li key={course}>{course}</li>) }
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar curso
      </button>
      <button type="button" onClick={clearCourses}>
        Limpar
      </button>
    </>
  );
}
