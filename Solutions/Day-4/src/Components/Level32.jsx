import CheckBadge from "./CheckBadge.jsx";
import author from "../assets/asabeneh.jpg";
export default function Level32() {
    const skills=["HTML","CSS","JavaScript","NodeJS","Sass","React", "Redux","Node","MongoDB","Python","Flask","Django","NumPy","Pandas","Data Analysis","MySQl","GraphQL","D3.js","Gatsby","Docker","Heroku","Git"];
    const allSkills = skills.map((skill)=> {
        return <li className="listItems">{skill}</li>
    })
    return (
        <>
            <div className="main-div1">
                <div className="main-div2">
                    <img className="image" src={author} alt="ASABENEH YETAYEH"/>
                    <div className="heading">
                        <h3>ASABENEH YETAYEH</h3><CheckBadge/>
                    </div>
                    <p>Senior Developer, Finland</p>
                    <h2>SKILLS</h2>
                    <div >
                        <ul className="skills">{allSkills}</ul>
                    </div>
                    <div className="footer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>

                        <p>Joined on Aug 30,2020</p>
                    </div>
                </div>
            </div>
        </>
    )
}