import React from 'react'
import "./about.css";
const about = () => {
  return (
    <div className="about-container">
        <div className="left-about">
            <h1>About Cpathlabs</h1>
            <p>
                Find out what your body is trying to tell you. Book a blood test, expert health check-up package, and more<br/>
                online without the need to leave your home. With our competitive prices and top-notch customer service,<br/>
                you're sure to be happy with your experience at Cpathlabs.
            </p>
            <p>
                Know your health better with Cpathlabs - the one-stop destination for any diagnostic requirement. Choose<br/>
                from our wide range of services and book your package online now. Our experts will take care of everything<br/>
                else, so you can sit back, relax and know that you're in safe hands.
            </p>
            <p>
                Cpathlabs is committed to providing you with the best service in terms of quality, cost-effectiveness and<br/>
                convenience. You can choose from our wide range of services that includes blood tests and pathology test,<br/>
                CT scan and MRI scan, ECG and X-ray etc. The best part is that it can be done at home or in office through a<br/>
                simple process which takes less than 10 minutes
            </p>
        </div>

        <div className="right-about">
            <h1>Test Lists</h1>
            <p><span>Departments</span> : Biochemistry |  Hematology | Immunology | Microbiology | Molecular<br/>
                Biology |  Serology 
            </p>
            <p><span>Conditions</span> : Heart | Infertility | Kidney | Liver | Lungs | Thyroid</p>
            <p >
                <span>Test List</span> : C-REACTIVE PROTEIN CRP (QUANTITATIVE) | LIVER FUNCTION TEST (LFT) | LIPID <br/>
                PROFILE | LDL CHOLESTEROL - SERUM (DIRECT LDL) | TRIGLYCERIDES - SERUM | <br/>
                CHOLESTEROL - SERUM | LIPOPROTEIN A (LP-A) | C-REACTIVE PROTEIN CRP<br/>
                (QUANTITATIVE) | HOMOCYSTEINE - SERUM / PLASMA | GAMMA GLUTAMYL TRANFERASE<br/>
                (GGT) | PROLACTIN |  CREATININE, SERUM |  CYTOMEGALOVIRUS (CMV) AVIDITY, IGG | CK<br/>
                CREATINE KINASE - SERUM (CPK) | AMINO ACID QUALITATIVE URINE GCMS
            </p>
        </div>
    </div>
  )
}

export default about