import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Picker from './Components/Options/Picker/Picker';
// import Verification from './Components/Options/Verification/Verification';
// import Login from './Components/Login/Login';
import Sidebar from './Components/Sidebar/Sidebar';
import { Profile1,Dashboard1,Classes1,Teacherattendance,Studentattendance,Exam1,Staff,Student,WebsiteBuilder,MainPage } from './Pages/Institute';
import { Profile, Dashboard, Classes, Exam,CreateExam, Attendance, Settings } from './Pages/Teacher';
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
import NonConducted from './Pages/Teacher/Exams/NonConductedExam/NonConducted';
import Conducted from './Pages/Teacher/Exams/ConductedExam/Conducted';
import StudentExamWork from './Pages/Teacher/Exams/StudentExamWork/StudentExamWork';
import StudentExamDetails from './Pages/Teacher/Exams/StudentExamWork/StudentExamDetails';

function App() {

  const [sidebarOpen, setsidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setsidebarOpen(!sidebarOpen);
  }

  const [option, setOption] = useState('Institute');


  return (
   <Router>
     <Footer />
     {option === 'Teacher' ? 
      <>
      {/* <Login /> */}
      {/* <Verification /> */}
      {/* <Picker /> */}
        <Route path="/" exact="true" >
          <Sidebar sidebarOpen={sidebarOpen} activeMenuItem={'profile'} />
          <Profile sidebarOpen={sidebarOpen}  toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/dashboard" exact="true">
          <Sidebar sidebarOpen={sidebarOpen} activeMenuItem={'dashboard'} />
          <Dashboard sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/classes/classroom" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} activeMenuItem={'classroom'} />
          <Classroom sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/classes" exact="true">
          <Sidebar sidebarOpen={sidebarOpen} activeMenuItem={'classes'} />
          <Classes sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>

        <Route path="/exam/createxam" exact="true">
        <Sidebar sidebarOpen={sidebarOpen} activeMenuItem={'exam'} />
        <CreateExam sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/exam/conducted/studentwork/studentexamdetails" exact="true">
        <Sidebar sidebarOpen={sidebarOpen} activeMenuItem={'exam'} />
        <StudentExamDetails sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/exam/conducted/studentwork" exact="true">
        <Sidebar sidebarOpen={sidebarOpen} activeMenuItem={'exam'} />
        <StudentExamWork sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/exam/conducted" exact="true">
        <Sidebar sidebarOpen={sidebarOpen} activeMenuItem={'exam'} />
        <Conducted sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/exam/nonconducted" exact="true">
        <Sidebar sidebarOpen={sidebarOpen} activeMenuItem={'exam'} />
        <NonConducted sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>

        <Route path="/exam" exact="true">
          <Sidebar sidebarOpen={sidebarOpen} activeMenuItem={'exam'} />
          <Exam sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/settings" exact="true">
          <Sidebar sidebarOpen={sidebarOpen} activeMenuItem={'settings'} />
          <Settings sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>

        <Route path="/classes/classroom/studymaterial/uploadmaterial" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} activeMenuItem={'studyMaterial'} />
          <UploadMaterial sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/classes/classroom/studymaterial" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} activeMenuItem={'studyMaterial'} />
          <StudyMaterial sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/classes/classroom/studymaterial/assignmentname" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} activeMenuItem={'studyMaterial'} />
          <Assignment sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        
        <Route path="/classes/classroom/assignments" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} activeMenuItem={'assignment'} />
           <AllAssignments sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/classes/classroom/assignments/assignmentname" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} activeMenuItem={'assignment'} />
          <AssignmentAssigned sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/classes/classroom/assignments/assign" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} activeMenuItem={'assignment'} />
          <AssignmentCreate sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> 
        </Route>
        <Route path="/classes/classroom/assignments/studentwork" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} activeMenuItem={'assignment'} />
          <StudentWork sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>

        <Route path="/classes/classroom/people/attendancerecord" exact="true">
          <TeacherSidebar sidebarOpen={sidebarOpen} activeMenuItem={'attendance'} />
          <Attendance sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route> 
        </> : ''
}
      {option === 'Institute' ? 
      <>
        <Route path="/" exact="true">
          <Sidebar sidebarOpen={sidebarOpen} category='institute' activeMenuItem={'profile'} />
          <Profile1 sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/dashboard" exact="true">
          <Sidebar sidebarOpen={sidebarOpen} category='institute' activeMenuItem={'dashboard'} />
          <Dashboard1 sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/student" exact="true">
          <Sidebar sidebarOpen={sidebarOpen} category='institute' activeMenuItem={'student'} />
          <Student sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/classes" exact="true">
          <Sidebar sidebarOpen={sidebarOpen} category='institute' activeMenuItem={'classes'} />
          <Classes1 sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/exam" exact="true">
          <Sidebar sidebarOpen={sidebarOpen} category='institute' activeMenuItem={'exam'} />
          <Exam1 sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/staff" exact="true">
          <Sidebar sidebarOpen={sidebarOpen} category='institute' activeMenuItem={'staff'} />
          <Staff sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/teacherattendance" exact="true">
          <Sidebar sidebarOpen={sidebarOpen} category='institute' activeMenuItem={'teacherattendance'} />
          <Teacherattendance sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/studentattendance" exact="true">
          <Sidebar sidebarOpen={sidebarOpen} category='institute' activeMenuItem={'studentattendance'} />
          <Studentattendance sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Route>
        <Route path="/createwebsite/mainpage" exact="true">
          <MainPage category="institute" />
        </Route>
        <Route path="/createwebsite" exact="true">
          <Sidebar sidebarOpen={sidebarOpen} category='institute' activeMenuItem={'createwebsite'} />
          <WebsiteBuilder sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
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
