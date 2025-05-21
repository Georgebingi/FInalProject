import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import RoleSelection from "./pages/RoleSelection";
import SignIn from "./Auth/SignIn";
import MyStudent from "./pages/MyStudent";
import Counselor from "./pages/CounselorDashboard";
import Settings from "./pages/Settings";
import StudentsSettings from "./pages2/StudentsSettings";
import AiInsights from "./pages/AiInsights";
import Resources from "./pages/Resources";
import MentalHealthArticle from "./pages/MentalHealthArticle";
import MessageRequest from "./pages/MessageRequest";
import StudentChat from "./pages/StudentChat";
import ChatUI from "./pages/ChatUI";
import ScheduledSession from "./pages/ScheduledSession";
import Header from "./components/counselorcomponents/Header";
import CounselorSidebar from "./components/counselorcomponents/CounselorSidebar";
import StudentsSidebar from "./components/studentscomponents/StudentsSidebar";
import StudentsHeader from "./components/studentscomponents/StudentsHeader";
import StudentsOnboarding from "./pages2/StudentsOnboarding";
import StudentsDashboard from "./pages2/StudentsDashboard";
import StudentsScheduleSession from "./pages2/StudentsScheduleSession";
import StudentsCounselorSession from "./pages2/StudentsCounselorSession";
import StudentsChatUI from "./pages2/StudentsChatUI";
import StudentsMentorMind from "./pages2/StudentsMentorMind";
import StudentResources from "./pages2/StudentResources";
import { useState } from "react";
import CounselorSignin from "./Auth/CounselorSignin";
import { UserProvider } from "./context/UserContext";
import ScheduleMeeting from "./pages2/ScheduleMeeting";
import StartChatting from "./pages2/StartChatting";
import ContinueChat from "./pages2/ContinueChat";
import StudentsCounselorDetails from "./pages2/StudentCounselorDetails";
import CounselorStudentDetails from "./pages/CounselorStudentDetails";


const App = () => {
  // useEffect(() => {
  //   api.get('/counselors')
  //     .then(res => setCounselors(res.data))
  //     .catch(err => console.error(err));
  // }, []);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("https://randomuser.me/api/portraits/men/75.jpg");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteImage = () => {
    setImage(null);
    setImageUrl("https://randomuser.me/api/portraits/men/76.jpg");
  };

  const [studentImage, setStudentImage] = useState(null);
  const [studentImageUrl, setStudentImageUrl] = useState("https://randomuser.me/api/portraits/women/75.jpg");

  const handleStudentImageChange = (e) => {
    setStudentImage(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = (e) => {
      setStudentImageUrl(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  const handleStudentDeleteImage = () => {
    setStudentImage(null);
    setStudentImageUrl("https://randomuser.me/api/portraits/women/75.jpg");
  };

  return (
    <UserProvider>
    <Router>
      {/* Students Routes */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/roleselection" element={<RoleSelection />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/studentsonboarding" element={<StudentsOnboarding />} />
        <Route path="/counselorsignin" element={<CounselorSignin />} />
        <Route
          path="/studentresources"
          element={
            <div style={{ display: "flex", overflow: "hidden", height: "100vh" }}>
              <StudentsSidebar style={{ flex: "none", overflow: "hidden" }} />
              <div style={{ flex: 1, overflow: "auto" }}>
                <div style={{ position: "sticky", top: 0, zIndex: 1, background: "white" }}>
                  <StudentsHeader
                    studentImageUrl={studentImageUrl}
                    handleStudentImageChange={handleStudentImageChange}
                    handleStudentDeleteImage={handleStudentDeleteImage}
                  />
                </div>
                <div style={{ overflow: "hidden", height:"240vh", backgroundColor: "#f9f9f9" }}>
                  <StudentResources />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/startchatting"
          element={
            <div style={{ display: "flex", overflow: "hidden", height: "100vh" }}>
              <StudentsSidebar style={{ flex: "none", overflow: "hidden" }} />
              <div style={{ flex: 1, overflow: "auto" }}>
                <div style={{ position: "sticky", top: 0, zIndex: 1, background: "white" }}>
                  <StudentsHeader
                    studentImageUrl={studentImageUrl}
                    handleStudentImageChange={handleStudentImageChange}
                    handleStudentDeleteImage={handleStudentDeleteImage}
                  />
                </div>
                <div style={{ overflow: "hidden", width:"81.5vw", height:"240vh", backgroundColor: "#f9f9f9" }}>
                  <StartChatting />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/schedulemeeting"
          element={
            <div style={{ display: "flex", overflow: "hidden", height: "100vh" }}>
              <StudentsSidebar style={{ flex: "none", overflow: "hidden" }} />
              <div style={{ flex: 1, overflow: "auto" }}>
                <div style={{ position: "sticky", top: 0, zIndex: 1, background: "white" }}>
                  <StudentsHeader
                    studentImageUrl={studentImageUrl}
                    handleStudentImageChange={handleStudentImageChange}
                    handleStudentDeleteImage={handleStudentDeleteImage}
                  />
                </div>
                <div style={{ overflow: "hidden", width:"81.5vw", height:"240vh", backgroundColor: "#f9f9f9" }}>
                  <ScheduleMeeting />
                </div>
              </div>
            </div>
          }
        />
         <Route
          path="/counselorstudentdetails/:id"
          element={
            <div style={{ display: "flex", overflow: "hidden", height: "100vh" }}>
              <StudentsSidebar style={{ flex: "none", overflow: "hidden" }} />
              <div style={{ flex: 1, overflow: "auto" }}>
                <div style={{ position: "sticky", top: 0, zIndex: 1, background: "white" }}>
                  <StudentsHeader
                    studentImageUrl={studentImageUrl}
                    handleStudentImageChange={handleStudentImageChange}
                    handleStudentDeleteImage={handleStudentDeleteImage}
                  />
                </div>
                <div style={{ overflow: "hidden", width:"81.5vw", height:"240vh", backgroundColor: "#f9f9f9" }}>
                  <CounselorStudentDetails />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/studentsdashboard"
          element={
            <div style={{ display: "flex", overflow: "hidden", height: "100vh" }}>
              <StudentsSidebar style={{ flex: "none", overflow: "hidden" }} />
              <div style={{ flex: 1, overflow: "auto" }}>
                <div style={{ position: "sticky", top: 0, zIndex: 1, background: "white" }}>
                  <StudentsHeader
                    studentImageUrl={studentImageUrl}
                    handleStudentImageChange={handleStudentImageChange}
                    handleStudentDeleteImage={handleStudentDeleteImage}
                  />
                </div>
                <div style={{ overflow: "hidden", height:"240vh", backgroundColor: "#f9f9f9" }}>
                  <StudentsDashboard />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/studentsschedulesession"
          element={
            <div style={{ display: "flex", overflow: "hidden", height: "100vh" }}>
              <StudentsSidebar style={{ flex: "none", overflow: "hidden" }} />
              <div style={{ flex: 1, overflow: "auto" }}>
                <div style={{ position: "sticky", top: 0, zIndex: 1, background: "white" }}>
                  <StudentsHeader
                    studentImageUrl={studentImageUrl}
                    handleStudentImageChange={handleStudentImageChange}
                    handleStudentDeleteImage={handleStudentDeleteImage}
                  />
                </div>
                <div style={{ overflow: "hidden", height: "90vh", backgroundColor: "#f9f9f9" }}>
                  <StudentsScheduleSession id="studentsschedulesession" />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/studentssettings"
          element={
            <div style={{ display: "flex", overflow: "hidden", height: "100vh" }}>
              <StudentsSidebar style={{ flex: "none", overflow: "hidden" }} />
              <div style={{ flex: 1, overflow: "auto" }}>
                <div style={{ position: "sticky", top: 0, zIndex: 1, background: "white" }}>
                  <StudentsHeader
                    studentImageUrl={studentImageUrl}
                    handleStudentImageChange={handleStudentImageChange}
                    handleStudentDeleteImage={handleStudentDeleteImage}
                  />
                </div>
                <div style={{ overflow: "hidden", backgroundColor: "#f9f9f9", height: "180vh" }}>
                  <StudentsSettings
                    studentImageUrl={studentImageUrl}
                    handleStudentImageChange={handleStudentImageChange}
                    handleStudentDeleteImage={handleStudentDeleteImage}
                    id="/studentssettings"
                  />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/studentscounselorsession"
          element={
            <div style={{ display: "flex", overflow: "hidden", height: "100vh" }}>
              <StudentsSidebar style={{ flex: "none", overflow: "hidden" }} />
              <div style={{ flex: 1, overflow: "auto" }}>
                <div style={{ position: "sticky", top: 0, zIndex: 1, background: "white" }}>
                  <StudentsHeader
                    studentImageUrl={studentImageUrl} handleStudentImageChange={handleStudentImageChange}
                    handleStudentDeleteImage={handleStudentDeleteImage}
                  />
                </div>
                <div style={{ overflow: "hidden", height: "180vh", backgroundColor: "#f9f9f9" }}>
                  <StudentsCounselorSession id="/studentscounselorsession" />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/studentschatui"
          element={
            <div style={{ display: "flex", overflow: "hidden", height: "100vh" }}>
              <StudentsSidebar style={{ flex: "none", overflow: "hidden" }} />
              <div style={{ flex: 1, overflow: "auto" }}>
                <div style={{ position: "sticky", top: 0, zIndex: 1, background: "white" }}>
                  <StudentsHeader
                    studentImageUrl={studentImageUrl} handleStudentImageChange={handleStudentImageChange}
                    handleStudentDeleteImage={handleStudentDeleteImage}
                  />
                </div>
                <div style={{ overflow: "hidden", height: "180vh", width:"81.55vw", backgroundColor: "#f9f9f9" }}>
                  <StudentsChatUI id="/studentschatui" />
                </div>
              </div>
            </div>
          }
        />
        <Route
            path="/continuechat/:id"
          element={
            <div style={{ display: "flex", overflow: "hidden", height: "100vh" }}>
              <StudentsSidebar style={{ flex: "none", overflow: "hidden" }} />
              <div style={{ flex: 1, overflow: "auto" }}>
                <div style={{ position: "sticky", top: 0, zIndex: 1, background: "white" }}>
                  <StudentsHeader
                    studentImageUrl={studentImageUrl} handleStudentImageChange={handleStudentImageChange}
                    handleStudentDeleteImage={handleStudentDeleteImage}
                  />
                </div>
                <div style={{ overflow: "hidden", height: "180vh", width:"81.55vw", backgroundColor: "#f9f9f9" }}>
                  <ContinueChat id="/continuechat" />
                </div>
              </div>
            </div>
          }
        />
       
         <Route
            path="/studentcounselordetails/:id"
          element={
            <div style={{ display: "flex", overflow: "hidden", height: "100vh" }}>
              <StudentsSidebar style={{ flex: "none", overflow: "hidden" }} />
              <div style={{ flex: 1, overflow: "auto" }}>
                <div style={{ position: "sticky", top: 0, zIndex: 1, background: "white" }}>
                  <StudentsHeader
                    studentImageUrl={studentImageUrl} handleStudentImageChange={handleStudentImageChange}
                    handleStudentDeleteImage={handleStudentDeleteImage}
                  />
                </div>
                <div style={{ overflow: "hidden", height: "180vh", width:"81.55vw", backgroundColor: "#f9f9f9" }}>
                  <StudentsCounselorDetails id="/studentcounselordetails" />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/studentsmentormind"
          element={
            <div style={{ display: "flex", overflow: "hidden", height: "100vh" }}>
              <StudentsSidebar style={{ flex: "none", overflow: "hidden" }} />
              <div style={{ flex: 1, overflow: "auto" }}>
                <div style={{ position: "sticky", top: 0, zIndex: 1, background: "white" }}>
                  <StudentsHeader
                    studentImageUrl={studentImageUrl} handleStudentImageChange={handleStudentImageChange}
                    handleStudentDeleteImage={handleStudentDeleteImage}
                  />
                </div>
                <div style={{ overflow: "hidden", height: "180vh", backgroundColor: "#f9f9f9" }}>
                  <StudentsMentorMind id="/studentsmentormind" />
                </div>
              </div>
            </div>
          }
        />



        {/* Counselor Routes */}
        <Route
          path="*"
          element={
            <div style={{ display: "flex", overflow: "hidden", height: "100vh" }}>
              <CounselorSidebar style={{ flex: "none", overflow: "hidden" }} />
              <div style={{ flex: 1, overflow: "auto" }}>
                <div style={{ position: "sticky", top: 0, zIndex: 1, background: "white" }}>
                  <Header
                    imageUrl={imageUrl}
                    handleImageChange={handleImageChange}
                    handleDeleteImage={handleDeleteImage}
                  />
                </div>
                <div style={{ overflow: "hidden", height: "280vh", backgroundColor: "#f9f9f9" }}>
                  <Routes>
                    <Route path="/counselor" element={<Counselor />} />
                    <Route path="/mystudent" element={<MyStudent />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/messagerequest" element={<MessageRequest />} />
                    <Route path="/studentchat" element={<StudentChat />} />
                    <Route path="/scheduledsession" element={<ScheduledSession />} />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      <Route 
        path="/chatui/:id"
        element={
          <div style={{display:"flex", overflow:"hidden", height:"100vh"}}>
            <CounselorSidebar style={{flex:"none", overflow:"hidden"}} />
            <div style={{flex: 1, overflow:"auto"}}>
              <div style={{position:"sticky", top:0, zIndex:1, background:"white"}}>
                  <Header
                  imageUrl={imageUrl}
                  handleImageChange={handleImageChange}
                  handleDeleteImage={handleDeleteImage} 
                  />
                
              </div>
              <div style={{overflow:"hidden", height:"100vh", width:"81.5vw", backgroundColor:"#f9f9f9"}}>
                <ChatUI id="/chatui" />
              </div>
            </div>
          </div> 
        }
      />
      <Route 
        path="/aiinsights"
        element={
          <div style={{display:"flex", overflow:"hidden", height:"100vh"}}>
            <CounselorSidebar style={{flex:"none", overflow:"hidden"}} />
            <div style={{flex: 1, overflow:"auto"}}>
              <div style={{position:"sticky", top:0, zIndex:1, background:"white"}}>
                  <Header
                  imageUrl={imageUrl}
                  handleImageChange={handleImageChange}
                  handleDeleteImage={handleDeleteImage} 
                  />
                
              </div>
              <div style={{overflow:"hidden", height:"110vh", backgroundColor:"#f9f9f9"}}>
                <AiInsights id="/aiinsights" />
              </div>
            </div>
          </div> 
        }
      />
            <Route
          path="/settings"
          element={
            <div style={{ display: "flex", overflow: "hidden", height: "100vh" }}>
              <CounselorSidebar style={{ flex: "none", overflow: "hidden" }} />
              <div style={{ flex: 1, overflow: "auto" }}>
                <div style={{ position: "sticky", top: 0, zIndex: 1, background: "white" }}>
                  <Header
                    imageUrl={imageUrl}
                    handleImageChange={handleImageChange}
                    handleDeleteImage={handleDeleteImage}
                  />
                </div>
                <div style={{ overflow: "hidden", backgroundColor: "#f9f9f9" }}>
                  <Settings
                    imageUrl={imageUrl}
                    handleImageChange={handleImageChange}
                    handleDeleteImage={handleDeleteImage}
                    id="/settings"
                  />
                </div>
              </div>
            </div>
          }
        />
        <Route 
        path="/mentalhealtharticle"
          element={
            <div style={{display:"flex", overflow:"hidden", height:"100vh"}}>
              <CounselorSidebar style={{flex:"none", overflow:"hidden"}} />
              <div style={{flex: 1, overflow:"auto"}}>
                <div style={{position:"sticky", top:0, zIndex:1, background:"white"}}>
                    <Header
                    imageUrl={imageUrl}
                    handleImageChange={handleImageChange}
                    handleDeleteImage={handleDeleteImage} 
                    />
                  
                </div>
                <div style={{overflow:"hidden", width:"81.5vw", backgroundColor:"#f9f9f9"}}>
                  <MentalHealthArticle id="/mentalhealtharticle" />
                </div>
              </div>
            </div> 
          }
      />
      </Routes>
    </Router>
    </UserProvider>
  );
};

export default App;

