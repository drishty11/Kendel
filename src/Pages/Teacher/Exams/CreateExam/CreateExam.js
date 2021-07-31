import React, { useState, useRef, useEffect } from 'react'
// import ExamModal from '../../Components/ExamModal/ExamModal';
import { ExamNavbar } from '../../../../Components/ExamNavbar/ExamNavbar';
import Navbar from '../../../../Components/Navbar/Navbar';
import photos from '../../../../images/image.png';
import add from '../../../../images/add.png';
import { GrFormAdd, IoMdCloudDownload, MdModeEdit, MdDelete } from 'react-icons/all';
import { DownArrow } from '../../../../images/Icons/icons';
import { MultipleCorrect, Numerical, ShortAnswer, SingleCorrect, Subjective } from '../../../../Components/QuestionType/QuestionType';
import './CreateExam.css';

function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }
export default function CreateExam({ toggleSidebar, sidebarOpen }) {

    const [openAddSection, setAddSection] = useState(false);
    const [tags, setTags] = useState([]);
    const [list, setList] = useState('');
    const [QuestionType, setQuestionType] = useState('Single Correct');
    const Dropdownref = useRef(null);
    const addsectionref = useRef(null);
    const editsectionref = useRef(null);
    const [editSection, setEditSection] = useState('');
    const [editTag, setEditTag] = useState('');
    const [active, setActive] = useState(-1);
    const [save, setSave] = useState(false)
    const [newQuestion, setNewQuestion] = useState(null);
    const [questionlist, setQuestionlist] = useState([]);

    // const [questionlist, setQuestionlist] = useState([
    //     {
    //         questiontype: 'Single Correct',
    //         question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    //         option: ['a', 'b', 'c', 'd'],
    //         correctAnswer: 'b',
    //     },
    //     {
    //         questiontype: 'Single Correct',
    //         question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    //         option: ['a', 'b', 'c', 'd'],
    //         correctAnswer: 'b',
    //     },
    //     {
    //         questiontype: 'Single Correct',
    //         question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    //         option: ['a', 'b', 'c', 'd'],
    //         correctAnswer: 'b',
    //     },
    //     {
    //         questiontype: 'Single Correct',
    //         question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    //         option: ['a', 'b', 'c', 'd'],
    //         correctAnswer: 'b',
    //     },
    // ])


   
    useOnClickOutside(Dropdownref, () => setActive(''));
    useOnClickOutside(addsectionref, () => setAddSection(false));
    useOnClickOutside(editsectionref, () => setEditSection(-1));

    const closeAddSection = () => {
        setAddSection(false);
    }
    const closeEditSection = () => {
        setEditSection(-1);
    }

    const addQuestion = () => {
        setQuestionlist((prevState) => 
            [...prevState,newQuestion]
        )
        setNewQuestion(null);

    }

    const addItem = event => {
        event.preventDefault();
        setTags([...tags,
          {
            id: tags.length,
            name: list
          }
        ]);
        setList('');
        setAddSection(false);

      };

      const editItem = (index) => {
          tags[index].name = editTag;
          setEditSection(-1);
          console.log(editSection)
          setEditTag('')
      }

      const openEdit = (tag,e) => {
          e.preventDefault()
          setEditTag(tag);
          setEditSection(tag);
      }


    return (
        <>
        <div id="page-content-wrapper">
            <Navbar title={'Exams'} toggleSidebar={toggleSidebar} />
            <ExamNavbar sidebarOpen={sidebarOpen} />
            <div id="studymaterial" className={`container-fluid px-md-4 px-2 pt-5 mt-5 ${sidebarOpen ? 'sidebarActive' : ''}`} style={{ height: '100vh' }}>
                <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-4">
                    <div className="d-flex flex-row justify-content-start align-items-center mb-2 ml-md-0 ml-3">
                        <div className="d-flex flex-row align-items-center position-relative ">
                            <button type="button" className="d-flex border-0 bg-white p-0" onClick={() => setAddSection(!openAddSection)}><GrFormAdd className="addSection" /></button>
                            <button type="button"  className={`${tags.length === 0 ? 'd-flex' : 'd-none' } mb-0 ml-2 border-0 bg-white p-0 mr-5 h6`}  onClick={() => setAddSection(!openAddSection)} style={{ fontSize: '12px' }}>Add Section</button> 
                            {openAddSection ?
                                // <div className="w-100" ref={addsectionref}>
                                    <div className="bubble position-absolute" ref={addsectionref}>
                                        <div className="d-flex flex-column">
                                            <h6 className="mb-3">Add Section</h6>
                                            <input type="text" className="examInput w-100 mb-3" value={list} onChange={e => setList(e.target.value)} placeholder="Add Section" />
                                        </div>
                                        <div className="d-flex flex-row justify-content-around align-items-center">
                                            <button type="button" className="border-0 bg-white btn-cancel" onClick={closeAddSection}>Cancel</button>
                                            <button type="button" className="border-0 text-white btn-add" onClick={addItem}>Add</button>
                                        </div>
                                    </div>
                                // </div> 
                                : ''
                            }
                            {tags.map((tag, index) => ( 
                                <div className="position-relative">
                                    <button className="border-0 d-flex justify-content-center align-items-center subject mx-3 mb-0 text-white position-relative" onClick={(e) => openEdit(tag.name,e)} key={index}>{tag.name}</button>
                                    {editSection === tag.name ?  <div className="w-100" key={index} ref={editsectionref}> 
                                        <div className="bubble position-absolute editBubble">
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-row justify-content-between">
                                                    <h6 className="mb-3">Edit/Delete Section</h6>
                                                    <MdDelete />
                                                </div>
                                                <input type="text" className="examInput w-100 mb-3" value={editTag} onChange={(e) => setEditTag(e.target.value)} />
                                            </div>
                                            <div className="d-flex flex-row justify-content-around align-items-center">
                                                <button type="button" className="border-0 bg-white btn-cancel" onClick={closeEditSection}>Cancel</button>
                                                <button type="button" className="border-0 text-white btn-add" onClick={() => editItem(index)}>Edit</button>
                                            </div>
                                        </div>
                                    </div> : ''
                                    }

                            </div> ))}
                        </div>
                    </div>
                  
                    <p className="para third-text mb-3">*Double click to edit or delete section</p>
                    <div className={`flex-column ${tags.length === 0 ? 'd-none' : 'd-flex' }`}>
                        {questionlist.map((question,index) => {
                            return (
                                <div className="w-75 d-flex flex-column p-3 question-box mr-lg-4 mr-0 mb-5">
                                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                                        <button className="d-flex flex-row align-items-center justify-content-center border-0 conducted-question-dropdown p6 position-relative mr-md-4 mr-2"  onClick={() => setActive('QuestionType')}>{question.questiontype}<DownArrow />
                                        {active === 'QuestionType' ? 
                                            <div id="QuestionTypeModal" className="QuestionTypeModal d-flex flex-column position-absolute bg-white border-0 my-2" ref={Dropdownref} >
                                                <div className="QuestionTypeModal-content border-0 d-flex flex-column justify-content-center align-items-center">
                                                    <button type="button" onClick={() => setQuestionType('Single Correct')} className="QuestionTypeModal-btn mb-2 px-3 text-align-left w-100 border-0 other-text">Single Correct</button>
                                                    <button type="button" onClick={() => setQuestionType('Multiple Correct')} className="QuestionTypeModal-btn mb-2 px-3 text-align-left w-100 border-0 other-text">Multiple Correct</button>
                                                    <button type="button" onClick={() => setQuestionType('Short Answer')} className="QuestionTypeModal-btn mb-2 px-3 text-align-left w-100 border-0 other-text">Short Answer</button>
                                                    <button type="button" onClick={() => setQuestionType('Numerical')} className="QuestionTypeModal-btn mb-2 px-3 text-align-left w-100 border-0 other-text">Numerical</button>
                                                    <button type="button" onClick={() => setQuestionType('Subjective')} className="QuestionTypeModal-btn mb-2 px-3 text-align-left w-100 border-0 other-text">Subjective</button>
                                                </div>
                                            </div>
                                         : ''}
                                        </button>
                                        <div className="d-flex flex-row align-items-center justify-content-center mr-md-4 mr-2">
                                            <label className="text-black mr-2 mb-0" style={{fontSize: '13px', fontWeight: '600'}}>Marks:</label>
                                            <input type="text" className="questionInput mb-3" style={{ textAlign: 'center', width: '24px'}} />
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-center mr-md-4 mr-2">
                                            <label className="text-black mr-2 mb-0" style={{fontSize: '13px', fontWeight: '600'}}>Marks:</label>
                                            <input type="text" className="questionInput mb-3" style={{ textAlign: 'center',width: '24px'}} />
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-center">
                                            <button className={`${save ? 'd-flex' : 'd-none'} border-0 bg-white mr-2`}><MdModeEdit size={24} /></button>
                                            <button className={`${save ? 'd-flex' : 'd-none'} border-0 bg-white mr-2`}><MdDelete size={24} /></button>
                                        </div>
                                    </div>
                                        {QuestionType === 'Single Correct' ?  <SingleCorrect question={question}  /> : ''}
                                        {QuestionType === 'Multiple Correct' ?  <MultipleCorrect /> : ''}
                                        {QuestionType === 'Short Answer' ?  <ShortAnswer /> : ''}
                                        {QuestionType === 'Numerical' ?  <Numerical /> : ''}
                                        {QuestionType === 'Subjective' ?  <Subjective /> : ''}
                                        <div className="d-flex flex-row justify-content-end align-items-center mb-2 button-sec">
                                        <button type="button" className="btn-question other-text bg-white">Reset</button>      
                                        <button type="button" className="btn-question blue-bg text-white ml-4" onClick={() => setSave(!save)}>Save</button>
                                   </div>
                            </div>
                            )
                        })}
                        <div className="d-flex flex-row ">
                        <div className="d-flex flex-column p-3 question-box mr-lg-4 mr-0">
                            <div className="d-flex flex-row align-items-center mb-2">
                                <button className="d-flex flex-row align-items-center justify-content-center border-0 conducted-question-dropdown p6 position-relative mr-md-4 mr-2" style={{ fontSize: '14px'}} onClick={() => setActive('QuestionType')}>{QuestionType}<DownArrow />
                                {active === 'QuestionType' ? 
                                    <div id="QuestionTypeModal" className="QuestionTypeModal d-flex flex-column position-absolute bg-white border-0 my-2" ref={Dropdownref} >
                                        <div className="QuestionTypeModal-content border-0 d-flex flex-column justify-content-center align-items-center">
                                            <button type="button" onClick={() => setQuestionType('Single Correct')} className="QuestionTypeModal-btn mb-2 px-3 text-align-left w-100 border-0 other-text">Single Correct</button>
                                            <button type="button" onClick={() => setQuestionType('Multiple Correct')} className="QuestionTypeModal-btn mb-2 px-3 text-align-left w-100 border-0 other-text">Multiple Correct</button>
                                            <button type="button" onClick={() => setQuestionType('Short Answer')} className="QuestionTypeModal-btn mb-2 px-3 text-align-left w-100 border-0 other-text">Short Answer</button>
                                            <button type="button" onClick={() => setQuestionType('Numerical')} className="QuestionTypeModal-btn mb-2 px-3 text-align-left w-100 border-0 other-text">Numerical</button>
                                            <button type="button" onClick={() => setQuestionType('Subjective')} className="QuestionTypeModal-btn mb-2 px-3 text-align-left w-100 border-0 other-text">Subjective</button>
                                        </div>
                                    </div>
                                 : ''}
                                </button>
                                <div className="d-flex flex-row align-items-center justify-content-center mr-md-4 mr-2">
                                    <label className="text-black mr-2 mb-0" style={{fontSize: '13px', fontWeight: '600'}}>Marks:</label>
                                    <input type="text" className="questionInput mb-3" style={{ textAlign: 'center', width: '24px'}} />
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center mr-md-4 mr-2">
                                    <label className="text-black mr-2 mb-0" style={{fontSize: '13px', fontWeight: '600'}}>Negative:</label>
                                    <input type="text" className="questionInput mb-3" style={{ textAlign: 'center', width: '24px'}} />
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center mr-2">
                                    <button className={`${save ? 'd-flex' : 'd-none'} border-0 bg-white mr-2`}><MdModeEdit size={24} /></button>
                                    <button className={`${save ? 'd-flex' : 'd-none'} border-0 bg-white mr-2`}><MdDelete size={24} /></button>
                                </div>
                            </div>
                                {QuestionType === 'Single Correct' ?  <SingleCorrect question={newQuestion} /> : ''}
                                {QuestionType === 'Multiple Correct' ?  <MultipleCorrect /> : ''}
                                {QuestionType === 'Short Answer' ?  <ShortAnswer /> : ''}
                                {QuestionType === 'Numerical' ?  <Numerical /> : ''}
                                {QuestionType === 'Subjective' ?  <Subjective /> : ''}
                                <div className="d-flex flex-row justify-content-end align-items-center mb-2 button-sec">
                                <button type="button" className="btn-question other-text bg-white">Reset</button>      
                                <button type="button" className="btn-question blue-bg text-white ml-4" onClick={() => setSave(!save)}>Save</button>
                                </div>
                            </div>
                            <div className="d-flex align-items-center option-btn px-1 py-2" >
                                <button type="button" className="border-0 bg-white p-0 d-flex flex-column align-items-center justify-content-center py-3 " style={{color:'#0C5DFF'}}><img width="16" src={add} alt="add" onClick={addQuestion} />Add Question</button>
                                <button type="button" className="border-0 bg-white p-0 d-flex flex-column align-items-center justify-content-center py-3 " ><img width="16" src={photos} alt="photos" />Add Bundle</button>
                                <button type="button" className="border-0 bg-white p-0 d-flex flex-column align-items-center justify-content-center py-3 " ><IoMdCloudDownload size={22} style={{ color: '#838383' }} />Import</button>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
        </div>    
        </> 
        
    )
}



// https://codesandbox.io/s/store-search-terms-using-react-hooks-no-api-call-pesmr?from-embed=&file=/src/index.js

// https://daveceddia.com/usestate-hook-examples/

