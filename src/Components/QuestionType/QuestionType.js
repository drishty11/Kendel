import React from 'react';
import { GrFormAdd, IoMdCloudDownload, BiImageAdd, MdModeEdit, MdDelete } from 'react-icons/all';
import { DownArrow, Cross } from '../../images/Icons/icons';
import './QuestionType.css';


const Subjective = ({question}) => {
    return (
        <div className="w-100 mb-5">
            <div className="d-flex flex-row align-items-center mb-4">
                <input type="text" className="d-flex justify-content-center align-items-center border-top-0 border-left-0 border-right-0 p-3 question-area mr-3" />
                <BiImageAdd size={26} style={{ color: '#838383' }} />
            </div>
            <div className="d-flex flex-row justify-content-between align-items-start">
                <label className="mr-0 mb-0 primary-bg file-upload"> 
                    <input type="file" id="image" accept=".jpg, .jpeg, .png, .mov, .mp4" hidden className=" mt-5" value={question?.correctAnswer} />
                </label>
                <BiImageAdd size={26} style={{ color: '#838383' }} />
            </div>
        </div>
    )
}
const Numerical = ({question}) => {
    return (
        <div className="w-100 mb-5">
            <div className="d-flex flex-row align-items-center mb-4">
                <input type="text" className="d-flex justify-content-center align-items-center border-top-0 border-left-0 border-right-0 p-3 question-area mr-3" />
                <BiImageAdd size={26} style={{ color: '#838383' }} />
            </div>
            <input type="text" className="questionInput mr-3" style={{ width: '95%' }} placeholder="Numerical Text..." value={question?.correctAnswer} />
        </div>
    )
}
const ShortAnswer = ({question}) => {
    return (
        <div className="w-100 mb-5">
            <div className="d-flex flex-row align-items-center mb-4">
                <input type="text" className="d-flex justify-content-center align-items-center border-top-0 border-left-0 border-right-0 p-3 question-area mr-3" />
                <BiImageAdd size={26} style={{ color: '#838383' }} />
            </div>
            <input type="text" className="questionInput mr-3" style={{ width: '95%' }} placeholder="Short Answer Text..." value={question?.correctAnswer} />
        </div>
    )
}
const MultipleCorrect = ({question}) => {
    return (
        <div className="w-100 mb-3">
            <div className="d-flex flex-row align-items-center mb-3">
                <input type="text" className="d-flex justify-content-center align-items-center border-top-0 border-left-0 border-right-0 p-3 question-area mr-3" value={question?.question} />
                <BiImageAdd size={26} style={{ color: '#838383' }} />
            </div>
            
            <div className="multiple-checkbox d-flex mb-3">
                <input type="checkbox" id="multiple-checkbox1" />
                <label for="multiple-checkbox1"></label>
                <div className="questionInput ml-4 mr-4">
                    <input id="" type="text" className="border-0" value={question?.option[0]} />
                </div>
                <div>
                    <BiImageAdd size={20} className="mr-3" style={{ color: '#838383' }} />
                    <Cross />
                </div>
            </div>
            <div className="multiple-checkbox d-flex mb-3">
                <input type="checkbox" id="multiple-checkbox2" />
                <label for="multiple-checkbox2"></label>
                <div className="questionInput ml-4 mr-4">
                    <input id="" type="text" className="border-0" value={question?.option[1]} />
                </div>
                <div>
                    <BiImageAdd size={20} className="mr-3" style={{ color: '#838383' }} />
                    <Cross />
                </div>
            </div>
            <div className="multiple-checkbox d-flex mb-3">
                <input type="checkbox" id="multiple-checkbox3" />
                <label for="multiple-checkbox3"></label>
                <div className="questionInput ml-4 mr-4">
                    <input id="" type="text" className="border-0" value={question?.option[2]} />
                </div>
                <div>
                    <BiImageAdd size={20} className="mr-3" style={{ color: '#838383' }} />
                    <Cross />
                </div>
            </div>
            <div className="multiple-checkbox d-flex mb-3">
                <input type="checkbox" id="multiple-checkbox4" />
                <label for="multiple-checkbox4"></label>
                <div className="questionInput ml-4 mr-4">
                    <input id="" type="text" className="border-0" value={question?.option[3]} />
                </div>
                <div>
                    <BiImageAdd size={20} className="mr-3" style={{ color: '#838383' }} />
                    <Cross />
                </div>
            </div>
            <div class="multiple-checkbox d-flex mb-3">
                <input type="checkbox" id="multiple-checkbox5" />
                <label for="multiple-checkbox5" ></label>
                <div className="ml-4 mr-4">
                    <input id="checkbox4" type="text" className="border-0"  placeholder="Add option" />
                </div>
            </div> 
            
        </div>
    )
}

const SingleCorrect = ({question}) => {
    return (
        <div className="w-100 mb-3">
            <div className="d-flex flex-row align-items-center mb-3">
                <input type="text" className="d-flex justify-content-center align-items-center border-top-0 border-left-0 border-right-0 p-3 question-area mr-3" value={question?.question} />
                <BiImageAdd size={26} style={{ color: '#838383' }} />
            </div>
            <div class="round d-flex mb-3">
                <input type="checkbox" id="checkbox1" />
                <label for="checkbox1" ></label>
                <div className="questionInput ml-4 mr-4">
                    <input id="" type="text" className="border-0" value={question?.option[0]} />
                </div>
                <div>
                    <BiImageAdd size={20} className="mr-3" style={{ color: '#838383' }} />
                    <Cross />
                </div>
            </div>
            <div class="round d-flex mb-3">
                <input type="checkbox" id="checkbox2" />
                <label for="checkbox2" ></label>
                <div className="questionInput ml-4 mr-4">
                    <input id="" type="text" className="border-0" value={question?.option[1]} />
                </div>
                <div>
                    <BiImageAdd size={20} className="mr-3" style={{ color: '#838383' }} />
                    <Cross />
                </div>
            </div>
            <div class="round d-flex mb-3">
                <input type="checkbox" id="checkbox3" />
                <label for="checkbox3" ></label>
                <div className="questionInput ml-4 mr-4">
                    <input id="" type="text" className="border-0" value={question?.option[2]} />
                </div>
                <div>
                    <BiImageAdd size={20} className="mr-3" style={{ color: '#838383' }} />
                    <Cross />
                </div>
            </div>
            <div class="round d-flex mb-3">
                <input type="checkbox" id="checkbox4" />
                <label for="checkbox4" ></label>
                <div className="questionInput ml-4 mr-4">
                    <input id="checkbox3" type="text" className="border-0" value={question?.option[3]} />
                </div>
                <div>
                    <BiImageAdd size={20} className="mr-3" style={{ color: '#838383' }} />
                    <Cross />
                </div>
            </div>
            <div class="round d-flex mb-3">
                <input type="checkbox" id="checkbox5" />
                <label for="checkbox5" ></label>
                <div className="ml-4 mr-4">
                    <input id="checkbox4" type="text" className="border-0" />
                </div>
            </div>    
        </div>
    )
}

export { SingleCorrect, MultipleCorrect, ShortAnswer, Numerical, Subjective }
