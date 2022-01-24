import { Route, Routes } from "react-router-dom";


 export default function Home(){
    return(
        <div className="pl-8 pr-7">
            <h1 className=" text-yellow-600   font-bold text-center  text-5xl"> Juwel Rana</h1>
          <p className="    font-serif font-medium pt-10  capitalize">
                Hi,
                My name is juwel rana. i am a web developer. and i have been working for 2 years. 
                you have any wbsite just contact with me. i will help you.
<br/>
<br/>
                <ul className="mt-10  text-xl">
                    <li>1. html</li>
                    <li>2. css</li>
                    <li>3. javascript</li>
                    <li>4. bootstrap</li>
                    <li>5. react js</li>
                    <li>6. nodejs</li>
                    <li>7. tailwind css</li>
                    <li>8. mongoDB database</li>
                    <li>9. wordpress</li>
                    <li>10. sass</li>
                </ul>
            </p>
            <button className="mt-10">
                <a className=" text-center pt-4 pb-4 pl-3 pr-3   text-white bg-blue-600 hover:bg-pink-600  " href="https://portfoiojuwel.web.app">
                    Contact Developer
                </a>
            </button>
        </div>
    );
};
