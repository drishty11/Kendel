import React, {useState} from 'react';
import {IoIosAdd,IoIosClose} from 'react-icons/all';
import './Fileupload.css';
import { PDFReader } from 'reactjs-pdf-reader';
import {VscChromeClose} from 'react-icons/all';



const Openpdf = ({url, close}) => {
  return (
    <>
    <div className={`file-background position-fixed`}></div> 
    <div type="button" style={{cursor: 'pointer'}} onClick={close}><VscChromeClose className="position-absolute pdf-close" size={30} style={{right: '20px', top: '20px', zIndex: '10003'}} /></div>
    <div className="position-absolute d-flex flex-column align-items-end justify-content-end" id="openpdf" style={{width: '50%', height: '100vh'}}>
      <div className="d-flex align-items-start justify-content-center openpdf" style={{overflowY: 'scroll', height: '800px', width: '100%'}}>
        <PDFReader url={url} showAllPage  /> 
      </div>
    </div>
    </>

  )
}

const Fileupload = ({show,close}) => {
  const [previewpdf, setpreviewpdf] = useState(false);
  const [url, setUrl] = React.useState('');
  const [file, setFile] = useState('');

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }
  const togglepreviewpdf = () => {
    setpreviewpdf(!previewpdf);
  }

    const onChange = async (e) => {

        const files = e.target.files;
        files.length > 0 && setUrl('');
        await timeout(100); 
        files.length > 0 && setUrl(URL.createObjectURL(files[0]));
        files.length > 0 && setFile(files[0]);
        URL.revokeObjectURL(files[0]);
        console.log(url);

    };
      
    return (
        <>
            { show ? 
            <>
            {previewpdf ? <Openpdf url={url} close={togglepreviewpdf} /> : ''}    
            <div className="d-flex flex-column uploadingfile position-absolute bg-white" id="fileupload">
                  {  url ?
                  <div className={`d-flex flex-row justify-content-start align-items-center uploadingfile-content my-3 mx-3`} style={{cursor: 'pointer'}} onClick={() => setpreviewpdf(!previewpdf)}>
                     <PDFReader url={url} /> 
                     <p style={{fontSize: '12px'}} className="mb-0 ml-3 d-none d-md-flex">{file.name}</p>
                  </div>  : ''
                  }
                <button className={`d-flex flex-column justify-content-center align-items-center uploadingfile-content mx-3 mt-3 mb-1 p-2 bg-transparent`}>
                  <label htmlFor="pdf" className="w-100 d-flex flex-row justify-content-center align-items-center mb-0" style={{cursor: 'pointer'}}><IoIosAdd size={18} />Upload File</label>
                  <input className="w-100" type="file" id="pdf" accept=".pdf, .doc, .txt" hidden onChange={onChange} />    
                </button>
                <div className="d-flex justify-content-end align-items-end m-3">
                  <button type="button" className="d-flex justify-content-center align-items-center text-white border-0 mr-3" onClick={close} style={{width: '80px', height: '35px', borderRadius: '8px', background: '#0246d8', fontSize: '12px'}}>Close</button>
                  <button type="button" className="d-flex justify-content-center align-items-center text-white border-0" onClick={close} style={{width: '80px', height: '35px', borderRadius: '8px', background: '#0246d8', fontSize: '12px'}}>Submit</button>
                </div>    
            </div>
            </>
            : ''}

        </>
    )
}

export { Fileupload, Openpdf }