import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar/Sidebar';
import { Profile1,Dashboard1,Classes1,Teacherattendance,Studentattendance,Exam1,Staff,Student } from './Pages/Institute';
import { Profile, Dashboard, Classes, Exam, Attendance } from './Pages/Teacher';
import Footer from './Components/Footer/Footer';
import TeacherSidebar from './Components/TeacherSidebar/TeacherSidebar';
import Classroom from './Pages/Teacher/Teacher Classroom/Classroom/Classroom';
import StudyMaterial from './Pages/Teacher/Teacher Classroom/StudyMaterial/StudyMaterial';
import UploadMaterial from './Pages/Teacher/Teacher Classroom/StudyMaterial/UploadMaterial';
import Assignment from './Pages/Teacher/Teacher Classroom/StudyMaterial/Assignment';
import AllAssignments from './Pages/Teacher/Teacher Classroom/Assignments/AllAssignments';
import AssignmentCreate from './Pages/Teacher/Teacher Classroom/Assignments/AssignmentCreate';
import AssignmentAssigned from './Pages/Teacher/Teacher Classroom/Assignments/AssignmentAssigned';
import StudentWork from './Pages/Teacher/Teacher Classroom/Assignments/StudentWork';

function App() {

  const [sidebarOpen, setsidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setsidebarOpen(!sidebarOpen);
  }

  const [option, setOption] = useState('Teacher');


  return (
   <Router>
     <Footer />
     {option === 'Teacher' ? 
      <>
        <Route path="/" exact="true" >
        <Sidebar sidebarOpen={sidebarOpen} />
        <Profile sidebarOpen={sidebarOpen}  toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/dashboard" exact="true">
        <Sidebar sidebarOpen={sidebarOpen} />
        <Dashboard sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/classes/classroom" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} />
          <Classroom sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/classes" exact="true">
        <Sidebar sidebarOpen={sidebarOpen} />
        <Classes sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/exam" exact="true">
        <Sidebar sidebarOpen={sidebarOpen} />
        <Exam sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>

        <Route path="/classes/classroom/studymaterial/uploadmaterial" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} />
          <UploadMaterial sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/classes/classroom/studymaterial" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} />
          <StudyMaterial sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/classes/classroom/studymaterial/assignmentname" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} />
          <Assignment sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        
        <Route path="/classes/classroom/assignments" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} />
           <AllAssignments sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/classes/classroom/assignments/assignmentname" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} />
          <AssignmentAssigned sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/classes/classroom/assignments/assign" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} />
          <AssignmentCreate sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> 
        </Route>
        <Route path="/classes/classroom/assignments/studentwork" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} />
          <StudentWork sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>

        <Route path="/classes/classroom/people/attendancerecord" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} />
          <Attendance sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route> 
        </> : ''
}
      {option === 'Institute' ? 
      <>
       <Sidebar sidebarOpen={sidebarOpen} category='institute' />
        <Route path="/dashboard" >
        <Dashboard1 sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/student" >
        <Student sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/classes">
        <Classes1 sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/exam">
        <Exam1 sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/staff">
        <Staff sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/teacherattendance">
        <Teacherattendance sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/studentattendance">
        <Studentattendance sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/profile">
        <Profile1 sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        </> : ''
      }

   </Router>


  );
}

export default App;




/* <Route path="/attendane" exact component={Attendance} /> */
/* <Route path="/staff" exact component={Staff} /> */
/* <Route path="/student" exact component={Student} /> */
