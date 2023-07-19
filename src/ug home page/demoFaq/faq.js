import React from 'react'
import './Faq.css'

export const Faq = () => {
    let toggles=document.getElementsByClassName("toggle");
let contentDiv=document.getElementsByClassName("contentfaq");
let icons=document.getElementsByClassName("icon")
// console.log(toggles,contentDiv,icons); 


for(let i=0; i<toggles.length;i++){
    toggles[i].addEventListener("click",() => {
// console.log(contentDiv[i].style.height,contentDiv[i].scrollHeight + "px");
        if(parseInt(contentDiv[i].style.height)!== contentDiv[i].scrollHeight){
            contentDiv[i].style.height=contentDiv[i].scrollHeight + "px";
            toggles[i].style.color="black";
            icons[i].classList.remove("uil-plus");
            icons[i].classList.add("uil-minus")

        }

        else{
            contentDiv[i].style.height="0px";
            toggles[i].style.color="black";
            icons[i].classList.remove("uil-minus");
            icons[i].classList.add("uil-plus");
        }

        for(let j=0;j<contentDiv.length;j++){
            if(j!==i){
                contentDiv[j].style.height="0px";
            toggles[j].style.color="black";
            icons[j].classList.remove("uil-minus");
            icons[j].classList.add("uil-plus");
            }
        }
    });
}



  return (
    <div className='faq-container' id='fqs' >
        <section class="faqs ">
    <h1>FREQUENTLY ASKED QUESTIONS</h1>

<div class="main main-container">
<div class="faq-content">
    <div class="wrapper">
        <button class="toggle">
            <i class="uil uil-plus icon"></i>What is the mode of registration?</button>
            <div class="contentfaq">
                <p>Registration mode will be online.</p>
            </div>
    </div>


    <div class="wrapper">
        <button class="toggle">
            <i class="uil uil-plus icon"></i>What is the mode of payment?</button>
            <div class="contentfaq">
                <p>Payment can be done through debit card, credit card, UPI, Net banking.</p>
            </div>
    </div>


    <div class="wrapper">
        <button class="toggle">
            <i class="uil uil-plus icon"></i>What if the money debited and the test is not accessible?</button>
            <div class="contentfaq">
                <p>Please contact our web team -info@egradtutor.in they will try to resolve it in 24 hours.</p>
            </div>
    </div>


    <div class="wrapper">
        <button class="toggle">
            <i class="uil uil-plus icon"></i> 
   Do we need to make a payment to get registered?</button>
            <div class="contentfaq">
                <p>No. Registration is free of cost, and you need to make payment only when you subscribe to any of our products.</p>
            </div>

            
    </div>

    <div class="wrapper">
        <button class="toggle">
            <i class="uil uil-plus icon"></i> 
           
            Who created the test series?</button>
            <div class="contentfaq">
                <p>These tests are created by top faculty across India who have 10+Years of experience and by the graduates from IIT/ IISC, IISER.

            </p>
            </div>

            
    </div>
    </div>



    <div class="faq-content">
        <div class="wrapper">
            <button class="toggle">
                <i class="uil uil-plus icon"></i>What information do we need for registration?</button>
                <div class="contentfaq">
                    <p>Name, contact number, email id, password, country, city. </p>
                </div>
        </div>


        <div class="wrapper">
            <button class="toggle">
                <i class="uil uil-plus icon"></i>Will the money be refunded?</button>
                <div class="contentfaq">
                    <p>No refund will be given if a student wishes to opt out during the period of subscription. We will try to resolve any technical issues in the payment within 48 hours of credit to our account.</p>
                </div>
        </div>


        <div class="wrapper">
            <button class="toggle">
                <i class="uil uil-plus icon"></i> 
                Do we provide any demo tests?</button>
                <div class="contentfaq">
                    <p> Yes, we provide the demo test for those who get registered.</p>
                </div>
        </div>


        <div class="wrapper">
            <button class="toggle">
                <i class="uil uil-plus icon"></i>Are there any discount/coupons available for OTS?</button>
                <div class="contentfaq">
                    <p>Yes, if you are referred by any of our faculty. You can use the same while making the payment.</p>
                </div>
        </div>


        <div class="wrapper">
            <button class="toggle">
                <i class="uil uil-plus icon"></i>
                I did not get my answer from the above FAQs, whom should I contact?</button>
                <div class="contentfaq">
                    <p>In case you didn’t get the information, you are looking for, you can contact the eGRADTutor Helpdesk number: +91-7993270532, Email: Info@egradtutor.in.</p>
                </div>
        </div>


    

</div>
</div>
</section>
    </div>
  )
}
