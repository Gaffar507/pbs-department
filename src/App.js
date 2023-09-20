import {BrowserRouter,Route,Routes} from "react-router-dom";
import { useGlobalContext } from '../src/assets/data/context';
import './App.css';
import Home from '../src/pages/home/Home'
import Error from '../src/pages/errorPage/Error'
import History from '../src/pages/about/history/History'
import Mission from '../src/pages/about/mission/Mission'
import Programs from './pages/programs/all-programs/Programs';
import Honours from './pages/programs/honours/Honours';
import Masters from './pages/programs/masters/Masters';
import Mphil from './pages/programs/m-phil/Mphil';
import Calender from './pages/programs/calender/Calender';
import StudentsInfo from './pages/students/StudentsInfo';
import Members from './pages/people/faculty-members/Members';
import Staff from './pages/people/staff/Staff';
import Alumni from './pages/alumni/Alumni';
import Contact from './pages/contact/Contact';
import MemberDetails from './pages/people/memberDetails/MemberDetails';
import ResearchArea from './pages/research/researchArea/ResearchArea';
import ResearchProjects from './pages/research/r-projects/ResearchProjects';
import Publications from './pages/research/publications/Publications';
import Facilities from './pages/research/facilities/Facilities';
import Fund1 from './pages/research/r-projects/funded-projects/Fund1';
import Fund2 from './pages/research/r-projects/funded-projects/Fund2';
import Message from './pages/about/message/Message';
import NewsSlider from "./pages/newsSlider/NewsSlider";

function App() {
const value = useGlobalContext();
const { studentsData} = value;
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/home/news-silder' element={<NewsSlider/>}/>
        <Route path='/home/message' element={<Message/>}/>
        <Route path='/about/history' element={<History/>}/>
        <Route path='/about/mission' element={<Mission/>}/>
        <Route path='/programs' element={<Programs/>}/>
        <Route path='/programs/honours' element={<Honours/>}/>
        <Route path='/programs/masters' element={<Masters/>}/>
        <Route path='/programs/m-phil' element={<Mphil/>}/>
        <Route path='/calender' element={<Calender/>}/>
        <Route path='/members' element={<Members/>}/>
        <Route path='/members/member-details/:id' element={<MemberDetails />}/>
        <Route path='/research-area' element={<ResearchArea/>}/>
        <Route path='/research-area/member-info/:id' element={<MemberDetails/>}/>
        <Route path='/funded-projects' element={<ResearchProjects/>}/>
        <Route path='/funded-projects/fund-1' element={<Fund1/>}/>
        <Route path='/funded-projects/fund-2' element={<Fund2/>}/>
        <Route path='/publications' element={<Publications/>}/>
        <Route path='/facilities' element={<Facilities/>}/>
        <Route path='/staffs' element={<Staff/>}/>
        <Route path='/students' element={<StudentsInfo data={studentsData}/>}/>
        <Route path='/alumni' element={<Alumni/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
