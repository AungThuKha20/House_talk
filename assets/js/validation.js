$(document).ready(function () {
    document.getElementById('submitForm').addEventListener('click', function(event) {
        event.preventDefault(); 
        var inquiryType = document.getElementById('inquiryType').value;
        var name = document.getElementById('name').value.trim();
        var contact1 = document.getElementById('contact1').value;
        var contact2 = document.getElementById('contact2').value.trim();
        var contact3 = document.getElementById('contact3').value.trim();
        var email1 = document.getElementById('email1').value.trim();
        var email2 = document.getElementById('email_input').value.trim();
        var buildingLocation = document.getElementById('buildingLocation').value;
        var buildingTime = document.getElementById('buildingTime').value;
        var expectedArea = document.getElementById('expectedArea').value;
        var title = document.getElementById('title').value.trim();
        var details = document.getElementById('details').value.trim();
        var password = document.getElementById('password').value.trim();
        var robot = document.getElementById('robot').checked;
        var checkbox = document.getElementById('checkbox_id').checked;
        
        var alertMessage = '';
        var emptyFields = [];
    
        if (inquiryType === 'option1') emptyFields.push('문의종류 선택해 주세요.');
        if (name === '') emptyFields.push('이름을 입력해 주세요.');
        if (contact2 === '') emptyFields.push('연락처를 입력해 주세요.');
        if (contact3 === '') emptyFields.push('연락처를 입력해 주세요.');
        if (email1 === '') emptyFields.push('이메일을 입력해 주세요.');
        if (email2 === '') emptyFields.push('이메일을 입력해 주세요.');
        if (buildingLocation === 'option1') emptyFields.push('건축 예정지를 선택해 주세요.');
        if (buildingTime === 'option1') emptyFields.push('건축 시기를 선택해 주세요.');
        if (expectedArea === 'option1') emptyFields.push('예상 평수를 선택해 주세요.');
        if (title === '') emptyFields.push('제목을 입력해 주세요.');
        if (details === '') emptyFields.push('세부내용을 입력해 주세요.');
        if (password === '') emptyFields.push('비밀번호를 입력해 주세요.');
        if (!robot) emptyFields.push('캡챠를 체크해 주세요.');
        if (!checkbox) emptyFields.push('개인정보수집 및 이용동의서에 동의해 주세요.');
    
        if (emptyFields.length > 0) {
            if (emptyFields.length > 1) {
                alertMessage = '모든 필수 입력 항목을 작성해 주세요.';
            } else {
                alertMessage = emptyFields[0];
            }
            window.alert('localhost:8080 내용:\n' + alertMessage);
            return;
        }
    
        document.getElementById('consultForm').submit();
    });
});
