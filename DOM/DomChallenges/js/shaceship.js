  function launch(){
            const launchRocket = document.getElementById('launchStatus');
            launchRocket.innerHTML="The shuttle has been launched";
        }
        function warning(ele){
            const missionAbort = document.getElementById('missionControl');
            missionAbort.style.backgroundColor="red";
        }
        function warningAbort(elem){
            const revertMissionAbort = document.getElementById('missionControl');
            revertMissionAbort.style.backgroundColor="";
            
        }
        function launchWarning(){
            const warningBox = document.createElement("div");
            missionControl.appendChild(warningBox);
            warningBox.className='box';
            warningBox.style.cssText
            warningBox.setAttribute
            const abortCheck = document.createElement('p');
            abortCheck.innerHTML="Are you sure you want to abort mission?";
            warningBox.appendChild('abortCheck')
        }
        
        const control2 = document.getElementById('abort');
