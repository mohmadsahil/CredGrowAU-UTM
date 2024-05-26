import React, { useState } from 'react'
import styles from "./LandingPage.module.css"
import axios from "axios";
import toast from 'react-hot-toast';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import kaira from '../Images/Kiara.png'
import AUlogo from "../Images/AU Logo.png";
import credLogo from "../Images/Credgrow Logo.png";
import AUCards from "../Images/AUCreditCards.png";

export const LandingPage = () => {

    const newUser = {
        name:"",
        number:"",  
      }
      
      const[user,setUser] = useState({ newUser })
      const handleChanges = (e)=>{
          const {name , value} = e.target;
          setUser({...user,[name]:value});
      }

      const registerUser = async()=>{
        const{name,number} = user;

        if(name && (number.length === 10))
        {
          await axios.post("/create",user)
          .then((res)=>{
            window.location.href = 'https://cconboarding.aubank.in/auccself/#/landing?utm_source=dsa&utm_medium=display-agg&utm_campaign=credit-card-dsa-campaign-990237-347803-Digi';   
          })
        }
        else{
          toast.success("Kindly Fill The Full & Correct Details");
        }
  }

  //Handle CheckBox

    const[checkboxes,setCheckboxes] = useState({
        checkbox1 :false,
        checkbox2 :false,
    });


    const handleCheckboxChange =(e)=>{
        const{name,value} = e.target;
        setCheckboxes({...checkboxes,[name]:value});
    }

    const allChecked = Object.values(checkboxes).every(Boolean);


    // Modals (PopUp) For T&C

    const [openone, setOpenone] = useState(false);

    const onOpenModalone = () => setOpenone(true);
    const onCloseModalone = () => setOpenone(false);
    

    // Modals (PopUp) For T&C

    const [opentwo, setOpentwo] = useState(false);

    const onOpenModaltwo = () => setOpentwo(true);
    const onCloseModaltwo = () => setOpentwo(false);

  return (
    
    /*Create a Div to manage the Backgroung Image*/
    <div className={styles.allBody}>        

            {/* ******NAVBAR****** */}
            
            <div className={styles.mainNavbar}>
                <img className={styles.AUlogo} src={AUlogo} alt="AU Logo" srcset="" />
                <img className={styles.Credgrowlogo} src={credLogo} alt="Credgrow Logo" srcset="" />
            </div>
            
            <div className={styles.AUbanktext}> 
                    <h1 className={styles.AUbanktext1}>AU BANK</h1>
                    <h1 className={styles.AUbanktext2}>CREDIT CARD'S</h1>
            </div>
            <div className={styles.AUbanksubtext}>
                    <center>Soch Badlo Aur Bank Bhi</center>
            </div>

            {/* *******MAIN BODY******* */}

            <div className={styles.mainBodyContainer}>

                    <div className={styles.leftMainBodyContainer}>
                            <img className={styles.kiaraAdvaniImg} src={kaira} alt="Kiara Advani" />
                    </div>
                    <div className={styles.rightMainBodyContainer}>
                        <div className={styles.userDetails}>
                                <h1 className={styles.userDetailsText}>Your Credit Card Is Just A Few Clicks Away!</h1>
                                <input type="text" placeholder='Enter Name' name='name' value={user.name} onChange={handleChanges}/>
                                <input type="text" placeholder='Enter Number' name='number' value={user.number} onChange={handleChanges}/>


                                <div className={styles.clickCheckBox}>
                                    <div className={styles.mainCheckBox}>
                                        <input type="checkbox" name="checkbox1" value={checkboxes.checkbox1} onChange={handleCheckboxChange}/>
                                    </div>
                                    
                                    <div className={styles.checkBoxText}>
                                        <p>I accept Privacy Policy and  <a style={{color:"blue", cursor:"pointer"}} onClick={onOpenModalone}> Terms and Conditions. </a> I appoint CredGrow as authorized representative 
                                        <a style={{color:"blue", cursor:"pointer"}} onClick={onOpenModaltwo}> read more...</a></p>
                                    </div>
                                </div> 


                                <div className={styles.clickCheckBox}>
                                    <div className={styles.mainCheckBox}>
                                        <input type="checkbox" name="checkbox2" value={checkboxes.checkbox2} onChange={handleCheckboxChange}/>
                                    </div>
                                    
                                    <div className={styles.checkBoxText}>
                                        <p>I agree to AU banks <a href="https://offers.aubank.in/info/privacy-policy" style={{color:"blue", cursor:"pointer" , textDecoration:"none"}}>Privacy Policy</a> , <a href="https://offers.aubank.in/info/terms-and-conditions" style={{color:"blue", cursor:"pointer" , textDecoration:"none"}}>Terms of use and Disclaimer</a></p>
                                    </div>
                                </div>
                                <div className={styles.submitDetailBtn}>
                                    <button className={styles.submitButton} disabled={!allChecked} onClick={registerUser}>SUBMIT</button>
                                </div>
                        </div>
                    </div>
            </div>


            {/* *******CREDIT CARD BANNER***************** */}

            <div className={styles.creditCardsBanner}>
                    <img className={styles.creditCardsImg} src={AUCards} alt="" srcset="" />
            </div>

            <div className={styles.AUbanktext}> 
                    <h1 className={styles.AUbanktext1}>CARD FEATURE'S</h1>
                    <h1 className={styles.AUbanktext2}>AND BENIFIT'S</h1>
            </div>

            <div className={styles.footerOne}>
                <div className={styles.firstFooterOne}>
                    <h1>Movie & Dining</h1>
                    <p>Get up to 30% off on your Every dining spends</p>
                </div>
                <div className={styles.secondFooterOne}>
                    <h1>Rewards Rate</h1>
                    <p>4 RPs on every offline spend of Rs. 100, 8 RPs on every online spend, and 12 RPs on every international spend of Rs. 100.</p>
                </div>
                <div className={styles.thirdFooterOne}>
                    <h1>Lounge Access</h1>
                    <p>Free domestic airport lounges</p>
                </div>
            </div>

            <div className={styles.footerOne}>
                <div className={styles.firstFooterOne}>
                    <h1>Insurance Benefits</h1>
                    <p>Get a personal accident cover worth Rs. 50 lakhs, a purchase protection cover worth Rs. 25,000, and a credit liability cover worth Rs. 2 lakhs.</p>
                </div>
                <div className={styles.thirdFooterOne}>
                    <h1>Movie Offer</h1>
                    <p>Discount offers between 25-75% on movie tickets every month on select variants</p>
                </div>
            </div>

            {/* ************************************ */}
            <hr />
            <center>
            © Copyright 2024-2025 Credgrow.in. All Rights Reserved.
            <br />
            </center>









            {/* ************POP UP PAGES***************/}

            <Modal open={openone} onClose={onCloseModalone} center>
                <p style={{marginTop: "30px"}}>
                <center> <h1>Terms of Use and Privacy Policy</h1></center><br />
                Maytawi Industries Pvt. Ltd. <a href='https://credgrow.in/'>(www.credgrow.in)</a> along with its partner companies recognizes the importance of maintaining your privacy <a href='https://credgrow.in/'>(www.credgrow.in)</a> is committed to maintain the confidentiality, integrity and security of all information of its users. This Privacy Policy describes how <a href='https://credgrow.in/'>(www.credgrow.in)</a> collects and handles certain information it may collect and/or receive from you via the use of this Website. This Privacy Policy applies to current and former visitors to our Website. By visiting and/or using our website, you are accepting and consenting to the practices described in this Privacy Policy. Your consent will be stored in our system for record purpose. <br /> <br />

                By using or continuing to use the Website you agree to our use of your information (including sensitive personal information as defined under the Information Technology Act, applicable rules, notification etc.) in accordance with this Privacy Policy, as may be amended from time to time by the Website in its discretion. <br /><br />

                We respect your privacy. You are advised to please read the Privacy Policy carefully. By accessing the services provided by <a href='https://credgrow.in/'>(www.credgrow.in)</a>, you agree to the collection and use of your data by Credgrow and you are authorizing us & our associate partners to give you a call, SMS, IVR, & Whatsapp to offer you their services for the product you have opted for, imparting product knowledge, offering promotional offers running on website & offers offered by the associated third parties. You also authorize us to give you a call, SMS, IVR & WhatsApp from Credgrow & its associate partners for the above mentioned purposes, the consent also overrides your current TRAI registrations. By Pressing 1 on Credgrow IVR Calls for any product/services, you are giving us & associate partners your consent to reach you via call, SMS, IVR, Whatsapp & to check your eligibility to offer the best product as per your profile. <br /><br />

                <b>What data is collected from you automatically?</b> <br /><br />

                We will automatically receive and collect certain anonymous information in standard usage logs through our Web server, including computer-identification information obtained from "cookies" sent to your browser from a: <br /><br />

                
                    1- Web server cookie stored on your hard drive <br />
                    2- An IP address, assigned to the computer which you use <br />
                    3- The domain server through which you access our service <br />
                    4- The type of computer you use <br />
                    5- The type of web browser you use <br /><br />

                <b>Data which we collect from you:</b> <br /><br />


                1- Personal details (Name, Mother's name, Father’s name, DOB, mobile no, email, residential address, reference details) <br />
                2- Financial details (PAN no, Salary account bank details) <br />
                3- Loan details (Amount, tenure, purpose) <br />
                4- Professional details (Company name, Official Email id, Employment type, Occupation, Salary, Annual income, Annual turnover, Type of company, Work Experience) <br />
                5- roperty details (Type of property, cost, location and other project details as provided by the builder) <br /> <br />

                <b>Why we collect the information?</b> <br /><br />

                We use contact information internally to send sms/email alerts to you for your login details and alerts on bidders requests or some advertising messages/emails/Whatsapp from us. If at any time you wish to stop these sms/email/whatsapp alerts all you have to do is write an email to us <a href="">contactus@credgrow.in</a> with your mobile numbers and your mobile number will be deleted from the alerts list. Your information may remain stored in archive on our servers even after the deletion or the termination of your account. The site contains links to other Web sites. <br /><br />

                We are not responsible for the privacy practices of such Web sites which we do not own, manage or control. <br /><br />

                We will not use or rent your financial information for any purpose other than to complete a transaction with you. By giving us the information you are giving us permission: <br /><br />

                1- To provide products or services you’ve requested <br />
                2- To disclose the information under special circumstances such as compliance with applicable local law, court summons, court orders, requests/order from legal authorities or law enforcement agencies requiring such disclosure. <br /><br />

                <b>We will send information about you to other companies or people when:</b> <br /><br />

                1- We need to share your information to provide the product or service you have requested to enable them to contact you;<br />
                2- We have your consent from you to share the information; <br />
                3- We will never share/sell your information to anyone except to banks and marketing partners (like Google, Facebook, etc.); <br />
                4- We will share the information to banks will be solely for the purpose of completion your application; <br />
                5- We need to share your information with certain service partners in order to respond to your queries / comments or to resolve service issues and to serve you better. <br />
                6- To unsubscribe for alerts, the email should be unsubscribe@credgrow.in and user needs to mention his email and/or mobile number which he wants to unsubscribe; <br />
                7- Financial information (like salary) <br /><br />

                <b>DND</b> <br /><br />

                By registering your phone number on credgrow.com, you expressly authorize us to override the national Do-Not-Disturb Registry (DND) i.e. - even if your registered phone number falls under DND list of National Consumer Preference Registry (NCPR/NDNC), you voluntarily allow us the authority to call, sms about its products, services and promotional offers. You also accept & agree to our Privacy Policy. <br /><br />

                <b>Privacy Policy Changes</b> <br /><br />

                Credgrow may amend the policy from time to time.
                </p>
            </Modal>










            {/* **************************************************************** */}



            <Modal open={opentwo} onClose={onCloseModaltwo} center>
                <p style={{marginTop: "30px"}}></p>
            <center><h3>CONSENT IN RELATION TO ACCESS TO CREDIT INFORMATION THROUGH EXPERIAN</h3></center> <br />
            This End User Agreement (the “Agreement”) is made between you (the “User” or “You”) and Maytawi Industries Pvt. Ltd. , a private limited company having its registered office at "G-45 2nd Floor G Block Sector 6 Noida Uttar  Pradesh 201301”, “Us” or “We”, which term shall include its successors and permitted assigns. The User and Credgrow shall be collectively referred to as the “Parties” and individually as a “Party”. <br /> <br />

            You hereby consent to Maytawi Industries being appointed as your authorised representative to receive your Credit Information on an ongoing basis until the (“End Use Purpose”) is satisfied or expiry of 6 months from date the consent is collected; whichever is earlier. <br /><br />

            <b>BY EXECUTING THIS AGREEMENT / CONSENT FORM, YOU ARE EXPRESSLY AGREEING TO ACCESS THE EXPERIAN CREDIT INFORMATION REPORT AND CREDIT SCORE, AGGREGATE SCORES, INFERENCES, REFERENCES AND DETAILS (AS DEFINED BELOW)(TOGETHER REFERRED AS “CREDIT INFORMATION”). YOU HEREBY ALSO IRREVOCABLY AND UNCONDITIONALLY CONSENT TO SUCH CREDIT INFORMATION BEING PROVIDED BY EXPERIAN TO YOU AND MAYTAWI INDUSTRIES BY USING EXPERIAN TOOLS, ALGORITHMS AND DEVICES AND YOU HEREBY AGREE, ACKNOWLEDGE AND ACCEPT THE TERMS AND CONDITIONS SET FORTH HEREIN.</b> <br /><br />

            <b>Terms and Conditions:</b> <br /><br />

            Information Collection, Use, Confidentiality, No-Disclosure and Data Purging <br /><br />

            1- Credgrow shall access your Credit Information as your authorized representative and Credgrow shall use the Credit Information for limited End Use Purpose consisting of and in relation to the services proposed to be availed by you from Credgrow. We shall not aggregate, retain, store, copy, reproduce, republish, upload, post, transmit, sell or rent the Credit Information to any other person and the same cannot be copied or reproduced other than as agreed herein and in furtherance to CICRA. <br /> <br />
            2- The Parties agree to protect and keep confidential the Credit Information both online and offline. <br /> <br />
            3- The Credit Information shared by you, or received on by us on your behalf shall be destroyed, purged, erased promptly within 1 (one) Business Day of upon the completion of the transaction/ End Use Purpose for which the Credit Information report was procured. <br /><br />
            <b>Governing Law and Jurisdiction</b><br /> <br />

            1- The relationship between you and Credgrowshall be governed by laws of India and all claims or disputes arising there from shall be subject to the exclusive jurisdiction of the courts of Mumbai. <br /><br />

            <b>Definitions:</b> <br /> <br />

            Capitalised terms used herein but not defined above shall have the following meanings: <br /><br />

            1- “Business Day” means a day (other than a public holiday) on which banks are open for general business in Mumbai. <br /> <br />
            2- “Credit Information Report” means the credit information / scores/ aggregates / variables / inferences or reports which shall be generated by Experian;<br /> <br />
            3- “Credit Score” means the score which shall be mentioned on the Credit Information Report which shall be computed by Experian <br /> <br />
            4- “CICRA” shall mean the Credit Information Companies (Regulation) Act, 2005 read with the Credit Information Companies Rules, 2006 and the Credit Information Companies Regulations, 2006, and shall include any other rules and regulations prescribed thereunder. <br /><br />
            PLEASE READ THE ABOVE MENTIONED TERMS AND CONDITIONS AND CLICK ON “ACCEPT” FOLLOWED BY THE LINK BELOW TO COMPLETE THE AUTHORISATION PROCESS/ FOR SHARING OF YOUR CREDIT INFORMATION BY EXPERIAN WITH CREDGROW IN ITS CAPACITY AS YOUR AUTHORISED REPRESENTATIVE. <br /> <br />

            <b>This document is an electronic record in terms of the Information Technology Act, 2000 and Rules made there under, and the amended provisions pertaining to electronic records.</b>
            </Modal>
    </div>
  )
}
