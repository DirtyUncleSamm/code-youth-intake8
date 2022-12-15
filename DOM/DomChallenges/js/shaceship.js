        const dbclc = document.getElementById('takeoff');
        dbclc.ondblclick = function(){
            const divr = document.createElement('div');
            divr.className="missionFailed"

        }
        function warning(){
            const missionAbort = document.getElementById('missionControl');
            missionAbort.style.backgroundColor="red";
        }
        function warningAbort(){
            const revertMissionAbort = document.getElementById('missionControl');
            revertMissionAbort.style.backgroundColor="";
            
        }
        function launchWarning(ele){
            const warningBox = document.createElement("div");
            missionControl.appendChild(warningBox);
            warningBox.className='box';
            const abortCheck = document.createElement('p');
            abortCheck.innerHTML="Are you sure you want to abort mission?";
            warningBox.appendChild('abortCheck')
        }
        
        const control2 = document.getElementById('abort');
