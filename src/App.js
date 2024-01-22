import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import logo from './friends_1.png';
import logo2 from './friends_2.png';
import logo3 from './friends_3.png';
import './App.css';

function Page1() {
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    navigate("/2");
  };

  const drawCircle = (ctx, x, y, radius, fillColor, strokeColor, text) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = strokeColor;
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
  };
  
  const drawLine = (ctx, x1, y1, x2, y2, color) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };
  
  const Procedure = () => {
    useEffect(() => {
      const canvas = document.getElementById('procedureCanvas');
      const context = canvas.getContext('2d');
  
      drawCircle(context, 50, 50, 30, 'rgb(20, 65, 132)', 'white', '알림문');
      drawCircle(context, 150, 50, 30, 'white', 'rgb(20, 65, 132)', '규정사항'); 
      drawCircle(context, 250, 50, 30, 'white', 'rgb(20, 65, 132)', '매칭신청');
      drawCircle(context, 350, 50, 30, 'white', 'rgb(20, 65, 132)', '매칭완료');
  
      drawLine(context, 0 + 20, 50, 0, 50, 'rgb(20, 65, 132)');
      drawLine(context, 50 + 30, 50, 150 - 30, 50, 'rgb(20, 65, 132)');
      drawLine(context, 150 + 30, 50, 250 - 30, 50, 'rgb(20, 65, 132)');
      drawLine(context, 250 + 30, 50, 350 - 30, 50, 'rgb(20, 65, 132)');
      drawLine(context, 350 + 30, 50, 450 - 30, 50, 'rgb(20, 65, 132)');
   
    }, []);
  }
  
  Procedure();
  
  return (
    <div className="App">
    <div className="header">
      <div className="h1">당신의 'Friend'를 만나보세요!</div>
    </div>
    <div className="nav">
      <div className="nav1">
        <img src={logo} alt="logo"></img>
        <div className="nav2">FRIEND</div>
      </div>
      <div className="Procedure" >
        <canvas id="procedureCanvas" width="400" height="100"></canvas>
      </div>
      <div className="nav_menu">
        <div className="menu1">FRIEND</div>
        <div className="menu2">매칭방식</div>
        <div className="menu3">나의 이상형</div>
        <div className="menu4">매칭신청</div>
        <div className="menu5"><img src={logo2} alt="logo2"></img></div>
      </div>
    </div>
    <div className="body">
      <div className="container">
        <div className="announcement">
          <div className="title">
            <svg height="50" width="200">

            <text x="10" y="40" fill="white" stroke="rgb(108, 166, 253)" strokeWidth="7" fontSize="38" fontWeight="bold">
              매칭 신청
            </text>
          
            <text x="10" y="40" fill="white" fontSize="38" fontWeight="bold">
              매칭 신청
            </text>
          </svg>
        </div>
        <ul>
            <h3><li><strong>FRIEND는 대학교 내에서 다양한 인연을 찾을 수 있는 온라인 플랫폼입니다.</strong></li></h3>
            <h3><li><strong>지인 매칭이 방지되며, 개인정보 노출이 없습니다.</strong></li></h3>
            <h3><li><strong>하루에 한 번의 매칭 기회를 통해 새로운 친구를 만나보세요.</strong></li></h3>
            <h3><li><strong>매주 금요일에 발표되는 매칭 결과를 기대해주세요.</strong></li></h3>
            <h3><li><strong>매칭 방식은 [매칭방식]을 통해 확인하실 수 있습니다.</strong></li></h3>
            <h3><li><strong>나만의 이상형을 설정하고, 그에 맞는 매력적인 친구를 찾아보세요.</strong></li></h3>
            <h3><li><strong>매칭에 성공하면 운영진이 직접 매칭을 주선해 드립니다.</strong></li></h3>
          </ul>
          <hr className="hr1"/>
          <button className="confirm-button" onClick={handleConfirmClick} >확인</button>
        </div>
      </div>
    </div>
  </div>
  );
}

function Page2() {
  const navigate = useNavigate();

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);

  const handleConfirmClick2 = () => {
    if ((isChecked1 && isChecked2 && isChecked3 && isChecked4 && isChecked5) || isChecked6) {
      navigate("/3");
    } else {
      alert("규정에 모두 동의해 주시기 바랍니다.");
    }
  };

  function toggleAllCheckboxes() {
    // 전체 동의 체크박스의 상태를 토글
    setIsChecked6(!isChecked6);

    // 개별 동의사항 체크박스들을 전체 동의 체크박스 상태에 따라 설정
    setIsChecked1(!isChecked6);
    setIsChecked2(!isChecked6);
    setIsChecked3(!isChecked6);
    setIsChecked4(!isChecked6);
    setIsChecked5(!isChecked6);
  }

  const drawCircle = (ctx, x, y, radius, fillColor, strokeColor, text) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = strokeColor;
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
  };
  
  const drawLine = (ctx, x1, y1, x2, y2, color) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };
  
  const Procedure = () => {
    useEffect(() => {
      const canvas = document.getElementById('procedureCanvas');
      const context = canvas.getContext('2d');
  
      drawCircle(context, 50, 50, 30, 'white', 'rgb(20, 65, 132)', '알림문');
      drawCircle(context, 150, 50, 30, 'rgb(20, 65, 132)', 'white', '규정사항'); 
      drawCircle(context, 250, 50, 30, 'white', 'rgb(20, 65, 132)', '매칭신청');
      drawCircle(context, 350, 50, 30, 'white', 'rgb(20, 65, 132)', '매칭완료');
  
      drawLine(context, 0 + 20, 50, 0, 50, 'rgb(20, 65, 132)');
      drawLine(context, 50 + 30, 50, 150 - 30, 50, 'rgb(20, 65, 132)');
      drawLine(context, 150 + 30, 50, 250 - 30, 50, 'rgb(20, 65, 132)');
      drawLine(context, 250 + 30, 50, 350 - 30, 50, 'rgb(20, 65, 132)');
      drawLine(context, 350 + 30, 50, 450 - 30, 50, 'rgb(20, 65, 132)');
   
    }, []);
  }
  
  Procedure();

  return (
    <div className="App">
      <div className="header">
        <div className="h1">당신의 'Friend'를 만나보세요!</div>
      </div>
      <div className="nav">
        <div className="nav1">
          <img src={logo} alt="logo"></img>
          <div className="nav2">FRIEND</div>
        </div>
        <div className="Procedure" >
        <canvas id="procedureCanvas" width="400" height="100"></canvas>
      </div>
        <div className="nav_menu">
          <div className="menu1">FRIEND</div>
          <div className="menu2">매칭방식</div>
          <div className="menu3">나의 이상형</div>
          <div className="menu4">매칭신청</div>
          <div className="menu5"><img src={logo2} alt="logo2"></img></div>
        </div>
      </div>
      <div className="body">
        <div className="container">
          <div className="ConsentForm2">
            <h2>개인정보 활용 동의서</h2>
            <p>&nbsp;안녕하세요. FRIEND를 이용해 주셔서 감사합니다. 본 어플리케이션은 회원님의 개인정보를 안전하게 관리하고 
             <br/>활용하기 위해 다음과 같은 내용으로 개인정보를 수집 및 이용합니다.</p>

            <div className="consentAll">
            <h3><ul className="c_ul">
                <li className="c_li">
                <input type="checkbox" id="allConsentCheckbox" checked={isChecked6} onChange={toggleAllCheckboxes} />
                <label htmlFor="allConsentCheckbox"><span className="c6_text" id="allConsentCheckbox"> 전체 규정에 동의합니다.</span></label><br />
                </li>
              </ul></h3>  <hr className="hr2"/>
            </div>
            
            <h3>1. 수집하는 개인정보 항목</h3>
            <p>
              - 이름: 회원 가입 시 입력하신 이름 <br />
              - 이메일: 회원 가입 시 입력하신 이메일 주소 <br />
              - 연락처: 회원 가입 시 입력하신 전화번호 <br />
              - 기타: 기타 필요한 정보 (선택 항목)
            </p>
            <input type="checkbox" id="additionalConsent1" checked={isChecked1} onChange={() => setIsChecked1(!isChecked1)} /> 
            <label htmlFor="additionalConsent1"><strong> 수집하는 개인정보 항목에 동의합니다.</strong></label>
            <h3>2. 개인정보의 수집 및 이용목적</h3>
            <p>
              - 매칭 서비스 제공을 위한 회원 확인<br />
              - 서비스 이용에 따른 본인식별 및 회원 관리<br />
              - 매칭 결과 발송 및 기타 안내사항 전달
            </p>
            <input type="checkbox" id="additionalConsent2" checked={isChecked2} onChange={() => setIsChecked2(!isChecked2)} /> 
            <label htmlFor="additionalConsent2"><strong> 개인정보 수집 및 이용목적에 동의합니다.</strong></label>
            <h3>3. 개인정보의 보유 및 이용기간</h3>
            <p>
              - 회원 탈퇴 시 또는 개인정보 이용 동의 철회 시까지
            </p>
            <input type="checkbox" id="additionalConsent3" checked={isChecked3} onChange={() => setIsChecked3(!isChecked3)} /> 
            <label htmlFor="additionalConsent3"><strong> 개인정보의 보유 및 이용기간에 동의합니다.</strong></label>
            <h3>4. 개인정보의 보호 및 권리</h3>
            <p>
              - 회원님의 개인정보는 안전하게 보호되며, 언제든지 열람, 수정, 삭제 요청이 가능합니다. 자세한 내용은 개인정보 처리방침을 확인해주세요.
            </p>
            <input type="checkbox" id="additionalConsent4" checked={isChecked4} onChange={() => setIsChecked4(!isChecked4)} /> 
            <label htmlFor="additionalConsent4"><strong> 개인정보의 보호 및 권리에 동의합니다.</strong></label>
            <h3>마지막으로,</h3>
            <p>
              본 동의서의 내용에 동의하실 경우에만 '프렌즈 어플'을 이용하실 수 있습니다. 동의하지 않을 경우, 서비스 이용이 제한될 수 있습니다.
            </p>
            <input type="checkbox" id="additionalConsent5" checked={isChecked5} onChange={() => setIsChecked5(!isChecked5)} />
            <label htmlFor="additionalConsent5"><strong> 개인정보 활용에 동의합니다.</strong></label>
        
            <hr className="hr3"/>
            
            <br />
            <button className="confirm-button2" onClick={handleConfirmClick2}>확인</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page3(){

  const navigate = useNavigate();

  const handleConfirmClick3 = () => {
    const isConfirmed = window.confirm("매칭 신청 하시겠습니까?");
    
    if (isConfirmed) {
      navigate("/4");
    }
  };

  const drawCircle = (ctx, x, y, radius, fillColor, strokeColor, text) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = strokeColor;
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
  };
  
  const drawLine = (ctx, x1, y1, x2, y2, color) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };
  
  const Procedure = () => {
    useEffect(() => {
      const canvas = document.getElementById('procedureCanvas');
      const context = canvas.getContext('2d');
  
      drawCircle(context, 50, 50, 30, 'white', 'rgb(20, 65, 132)', '알림문');
      drawCircle(context, 150, 50, 30, 'white', 'rgb(20, 65, 132)', '규정사항'); 
      drawCircle(context, 250, 50, 30, 'rgb(20, 65, 132)', 'white', '매칭신청');
      drawCircle(context, 350, 50, 30, 'white', 'rgb(20, 65, 132)', '매칭완료');
  
      drawLine(context, 0 + 20, 50, 0, 50, 'rgb(20, 65, 132)');
      drawLine(context, 50 + 30, 50, 150 - 30, 50, 'rgb(20, 65, 132)');
      drawLine(context, 150 + 30, 50, 250 - 30, 50, 'rgb(20, 65, 132)');
      drawLine(context, 250 + 30, 50, 350 - 30, 50, 'rgb(20, 65, 132)');
      drawLine(context, 350 + 30, 50, 450 - 30, 50, 'rgb(20, 65, 132)');
   
    }, []);
  }
  
  Procedure();

  return (
    <div className="App">
    <div className="header">
      <div className="h1">당신의 'Friend'를 만나보세요!</div>
    </div>
    <div className="nav">
      <div className="nav1">
        <img src={logo} alt="logo"></img>
        <div className="nav2">FRIEND</div>
      </div>
      <div className="Procedure" >
        <canvas id="procedureCanvas" width="400" height="100"></canvas>
      </div>
      <div className="nav_menu">
        <div className="menu1">FRIEND</div>
        <div className="menu2">매칭방식</div>
        <div className="menu3">나의 이상형</div>
        <div className="menu4">매칭신청</div>
        <div className="menu5"><img src={logo2} alt="logo2"></img></div>
      </div>
    </div>
    <div className="body">
      <div className="container">
        <div className="ConsentForm3">
        <img src={ logo3 } className="logo3"  alt="logo3"></img><br />
        <br />
        <h2 className="consentLast">약관에 동의하셨으며, 매칭 신청 하시겠습니까?</h2>
        <button className="confirm-button3" onClick={handleConfirmClick3}>매칭 신청</button>
        </div>
      </div>
    </div>
  </div>
  );
}

function Page4() {

  const drawCircle = (ctx, x, y, radius, fillColor, strokeColor, text) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = strokeColor;
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
  };
  
  const drawLine = (ctx, x1, y1, x2, y2, color) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };
  
  const Procedure = () => {
    useEffect(() => {
      const canvas = document.getElementById('procedureCanvas');
      const context = canvas.getContext('2d');
  
      drawCircle(context, 50, 50, 30, 'white', 'rgb(20, 65, 132)', '알림문');
      drawCircle(context, 150, 50, 30, 'white', 'rgb(20, 65, 132)', '규정사항'); 
      drawCircle(context, 250, 50, 30, 'white', 'rgb(20, 65, 132)', '매칭신청');
      drawCircle(context, 350, 50, 30, 'rgb(20, 65, 132)', 'white', '매칭완료');
  
      drawLine(context, 0 + 20, 50, 0, 50, 'rgb(20, 65, 132)');
      drawLine(context, 50 + 30, 50, 150 - 30, 50, 'rgb(20, 65, 132)');
      drawLine(context, 150 + 30, 50, 250 - 30, 50, 'rgb(20, 65, 132)');
      drawLine(context, 250 + 30, 50, 350 - 30, 50, 'rgb(20, 65, 132)');
      drawLine(context, 350 + 30, 50, 450 - 30, 50, 'rgb(20, 65, 132)');
   
    }, []);
  }
  
  Procedure();

  return (
    <div className="App">
    <div className="header">
      <div className="h1">당신의 'Friend'를 만나보세요!</div>
    </div>
    <div className="nav">
      <div className="nav1">
        <img src={logo} alt="logo"></img>
        <div className="nav2">FRIEND</div>
      </div>
      <div className="Procedure" >
        <canvas id="procedureCanvas" width="400" height="100"></canvas>
      </div>
      <div className="nav_menu">
        <div className="menu1">FRIEND</div>
        <div className="menu2">매칭방식</div>
        <div className="menu3">나의 이상형</div>
        <div className="menu4">매칭신청</div>
        <div className="menu5"><img src={logo2} alt="logo2"></img></div>
      </div>
    </div>
    <div className="body">
      <div className="container">
        <div className="ConsentForm4">
    
        <h1 className="consentCP">매칭 신청이 완료되었습니다!</h1><br />
        <h2 className="consentCP2">매칭 결과는 매주 금요일에 확인 하실 수 있습니다.</h2>
        <p className="consentCP2">
              매주 기다리시는 동안 FRIEND 어플을 자주 이용해보세요. 다양한 기능과 소식이 여러분을 기다리고 있습니다.
            </p>
       
        </div>
      </div>
    </div>
  </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
        <Route path="/3" element={<Page3 />} />
        <Route path="/4" element={<Page4 />} />
      </Routes>
    </Router>
  );
}

export default App;