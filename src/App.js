import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const totalItems = 71; // Total number of checkboxes
  const [checkedItems, setCheckedItems] = useState(() => {
    // Load from localStorage on initial render, default to all false if not found
    const saved = localStorage.getItem('checkedItems');
    return saved ? JSON.parse(saved) : new Array(totalItems).fill(false);
  });

  // Save to localStorage whenever checkedItems changes
  useEffect(() => {
    localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const completionPercentage = Math.round(
    (checkedItems.filter(Boolean).length / totalItems) * 100
  );

  return (
    <div className="App">
      <h1>QA CV Checklist</h1>
      <p>Completion: {completionPercentage}% ({checkedItems.filter(Boolean).length}/{totalItems})</p>
      <p>Check items to add to your CV!</p>

      <h2>Tech Stack</h2>
      <h3>Programming</h3>
      <ul>
        <li><input type="checkbox" checked={checkedItems[0]} onChange={() => handleCheckboxChange(0)} /> C# (Euromonitor, Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[1]} onChange={() => handleCheckboxChange(1)} /> Java (Rank Group, Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[2]} onChange={() => handleCheckboxChange(2)} /> JavaScript (Euromonitor, Safety io, Flash, Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[3]} onChange={() => handleCheckboxChange(3)} /> TypeScript (Euromonitor, Safety io, Webtonic, Rank - Nice)</li>
        <li><input type="checkbox" checked={checkedItems[4]} onChange={() => handleCheckboxChange(4)} /> Python (Flash, Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[5]} onChange={() => handleCheckboxChange(5)} /> SQL (Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[6]} onChange={() => handleCheckboxChange(6)} /> PHP (Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[7]} onChange={() => handleCheckboxChange(7)} /> HTML (Webtonic)</li>
      </ul>

      <h3>Automation Tools</h3>
      <ul>
        <li><input type="checkbox" checked={checkedItems[8]} onChange={() => handleCheckboxChange(8)} /> Cypress (Euromonitor, Safety io, Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[9]} onChange={() => handleCheckboxChange(9)} /> Selenium (Rank, Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[10]} onChange={() => handleCheckboxChange(10)} /> Postman (Euromonitor, Flash)</li>
        <li><input type="checkbox" checked={checkedItems[11]} onChange={() => handleCheckboxChange(11)} /> JMeter (Euromonitor, Safety io, Flash)</li>
        <li><input type="checkbox" checked={checkedItems[12]} onChange={() => handleCheckboxChange(12)} /> Appium (Safety io - Nice, Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[13]} onChange={() => handleCheckboxChange(13)} /> Cucumber (Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[14]} onChange={() => handleCheckboxChange(14)} /> Playwright (Safety io)</li>
        <li><input type="checkbox" checked={checkedItems[15]} onChange={() => handleCheckboxChange(15)} /> OWASP ZAP (Euromonitor)</li>
        <li><input type="checkbox" checked={checkedItems[16]} onChange={() => handleCheckboxChange(16)} /> REST Assured (Flash, Rank)</li>
        <li><input type="checkbox" checked={checkedItems[17]} onChange={() => handleCheckboxChange(17)} /> SoapUI (Flash)</li>
        <li><input type="checkbox" checked={checkedItems[18]} onChange={() => handleCheckboxChange(18)} /> Rapid API (Flash)</li>
        <li><input type="checkbox" checked={checkedItems[19]} onChange={() => handleCheckboxChange(19)} /> Katalon Studio (Flash)</li>
        <li><input type="checkbox" checked={checkedItems[20]} onChange={() => handleCheckboxChange(20)} /> Apigee (Flash)</li>
        <li><input type="checkbox" checked={checkedItems[21]} onChange={() => handleCheckboxChange(21)} /> Serenity (Rank)</li>
        <li><input type="checkbox" checked={checkedItems[22]} onChange={() => handleCheckboxChange(22)} /> webdriver.io (Rank)</li>
        <li><input type="checkbox" checked={checkedItems[23]} onChange={() => handleCheckboxChange(23)} /> K6 (Rank)</li>
        <li><input type="checkbox" checked={checkedItems[24]} onChange={() => handleCheckboxChange(24)} /> JUnit/TestNG/NUnit (Webtonic)</li>
      </ul>

      <h3>CI/CD & DevOps</h3>
      <ul>
        <li><input type="checkbox" checked={checkedItems[25]} onChange={() => handleCheckboxChange(25)} /> Azure DevOps (Euromonitor, Flash)</li>
        <li><input type="checkbox" checked={checkedItems[26]} onChange={() => handleCheckboxChange(26)} /> Jenkins (Euromonitor, Flash, Rank)</li>
        <li><input type="checkbox" checked={checkedItems[27]} onChange={() => handleCheckboxChange(27)} /> Git (Rank, Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[28]} onChange={() => handleCheckboxChange(28)} /> Bitbucket (Rank)</li>
      </ul>

      <h3>Version Control</h3>
      <ul>
        <li><input type="checkbox" checked={checkedItems[29]} onChange={() => handleCheckboxChange(29)} /> Git (Rank, Webtonic)</li>
      </ul>

      <h3>OS</h3>
      <ul>
        <li><input type="checkbox" checked={checkedItems[30]} onChange={() => handleCheckboxChange(30)} /> Linux (Flash, Rank)</li>
      </ul>

      <h3>Databases</h3>
      <ul>
        <li><input type="checkbox" checked={checkedItems[31]} onChange={() => handleCheckboxChange(31)} /> PostgreSQL (Safety io - Preferred)</li>
        <li><input type="checkbox" checked={checkedItems[32]} onChange={() => handleCheckboxChange(32)} /> MongoDB (Safety io - Preferred)</li>
      </ul>

      <h3>Project Tools</h3>
      <ul>
        <li><input type="checkbox" checked={checkedItems[33]} onChange={() => handleCheckboxChange(33)} /> JIRA (Rank, Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[34]} onChange={() => handleCheckboxChange(34)} /> Confluence (Rank, Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[35]} onChange={() => handleCheckboxChange(35)} /> Slack (Rank)</li>
        <li><input type="checkbox" checked={checkedItems[36]} onChange={() => handleCheckboxChange(36)} /> Atlassian Suite (Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[37]} onChange={() => handleCheckboxChange(37)} /> MS Office (Webtonic)</li>
      </ul>

      <h3>Frameworks</h3>
      <ul>
        <li><input type="checkbox" checked={checkedItems[38]} onChange={() => handleCheckboxChange(38)} /> NodeJS (Safety io)</li>
        <li><input type="checkbox" checked={checkedItems[39]} onChange={() => handleCheckboxChange(39)} /> Angular (Safety io)</li>
      </ul>

      <h3>Other</h3>
      <ul>
        <li><input type="checkbox" checked={checkedItems[40]} onChange={() => handleCheckboxChange(40)} /> AWS (Safety io - Nice, Rank - Nice)</li>
      </ul>

      <h2>Added Benefit Skills</h2>
      <h3>Certifications</h3>
      <ul>
        <li><input type="checkbox" checked={checkedItems[41]} onChange={() => handleCheckboxChange(41)} /> ISTQB Foundation (Flash, Rank, BET, Webtonic - Adv.)</li>
        <li><input type="checkbox" checked={checkedItems[42]} onChange={() => handleCheckboxChange(42)} /> ISTQB Automation (Safety io - Plus)</li>
        <li><input type="checkbox" checked={checkedItems[43]} onChange={() => handleCheckboxChange(43)} /> ISEB Foundation (Flash)</li>
      </ul>

      <h3>Testing Knowledge</h3>
      <ul>
        <li><input type="checkbox" checked={checkedItems[44]} onChange={() => handleCheckboxChange(44)} /> Unit Testing (Safety io, Rank - Nice)</li>
        <li><input type="checkbox" checked={checkedItems[45]} onChange={() => handleCheckboxChange(45)} /> Integration Testing (Safety io)</li>
        <li><input type="checkbox" checked={checkedItems[46]} onChange={() => handleCheckboxChange(46)} /> Performance Testing (Safety io, Rank - Nice)</li>
        <li><input type="checkbox" checked={checkedItems[47]} onChange={() => handleCheckboxChange(47)} /> Security Testing (Rank - Nice)</li>
        <li><input type="checkbox" checked={checkedItems[48]} onChange={() => handleCheckboxChange(48)} /> Mobile Testing (Safety io - Nice, Appium)</li>
        <li><input type="checkbox" checked={checkedItems[49]} onChange={() => handleCheckboxChange(49)} /> Experience-Based Testing (Webtonic)</li>
      </ul>

      <h3>Specialized Tools</h3>
      <ul>
        <li><input type="checkbox" checked={checkedItems[50]} onChange={() => handleCheckboxChange(50)} /> Containerisation (Docker, Kubernetes, Swarm - Rank, Nice)</li>
        <li><input type="checkbox" checked={checkedItems[51]} onChange={() => handleCheckboxChange(51)} /> Service Virtualisation (Rank - Nice)</li>
        <li><input type="checkbox" checked={checkedItems[52]} onChange={() => handleCheckboxChange(52)} /> Monitoring Tools (New Relic, Nagios, ELK, etc. - Rank, Nice)</li>
        <li><input type="checkbox" checked={checkedItems[53]} onChange={() => handleCheckboxChange(53)} /> Networking (Rank - Nice)</li>
      </ul>

      <h3>Domains</h3>
      <ul>
        <li><input type="checkbox" checked={checkedItems[54]} onChange={() => handleCheckboxChange(54)} /> Fintech/Payments (Flash - Pref.)</li>
        <li><input type="checkbox" checked={checkedItems[55]} onChange={() => handleCheckboxChange(55)} /> Gambling (Rank)</li>
        <li><input type="checkbox" checked={checkedItems[56]} onChange={() => handleCheckboxChange(56)} /> Cloud/IoT (Safety io)</li>
        <li><input type="checkbox" checked={checkedItems[57]} onChange={() => handleCheckboxChange(57)} /> Broad IT (Webtonic)</li>
      </ul>

      <h3>Soft Skills & Methods</h3>
      <ul>
        <li><input type="checkbox" checked={checkedItems[58]} onChange={() => handleCheckboxChange(58)} /> Agile (Euromonitor, Safety io, Flash, Rank, Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[59]} onChange={() => handleCheckboxChange(59)} /> DevOps (Rank)</li>
        <li><input type="checkbox" checked={checkedItems[60]} onChange={() => handleCheckboxChange(60)} /> Mentoring (Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[61]} onChange={() => handleCheckboxChange(61)} /> Business Acumen (Webtonic)</li>
        <li><input type="checkbox" checked={checkedItems[62]} onChange={() => handleCheckboxChange(62)} /> Training (Rank - Nice)</li>
      </ul>

      <h3>Other</h3>
      <ul>
        <li><input type="checkbox" checked={checkedItems[63]} onChange={() => handleCheckboxChange(63)} /> Driver’s License (Webtonic - Pref.)</li>
        <li><input type="checkbox" checked={checkedItems[64]} onChange={() => handleCheckboxChange(64)} /> SA Citizenship/Permit (Webtonic - Pref.)</li>
      </ul>

      <h2>CV Tips</h2>
      <ul>
        <li><input type="checkbox" checked={checkedItems[65]} onChange={() => handleCheckboxChange(65)} /> Highlight Cypress, Selenium, JS</li>
        <li><input type="checkbox" checked={checkedItems[66]} onChange={() => handleCheckboxChange(66)} /> Quantify: “Automated 50+ tests”</li>
        <li><input type="checkbox" checked={checkedItems[67]} onChange={() => handleCheckboxChange(67)} /> Fit: 1-5 yrs testing (BET entry-level)</li>
        <li><input type="checkbox" checked={checkedItems[68]} onChange={() => handleCheckboxChange(68)} /> Get ISTQB</li>
        <li><input type="checkbox" checked={checkedItems[69]} onChange={() => handleCheckboxChange(69)} /> GitHub portfolio</li>
        <li><input type="checkbox" checked={checkedItems[70]} onChange={() => handleCheckboxChange(70)} /> Practice Cypress</li>
      </ul>
    </div>
  );
}

export default App;