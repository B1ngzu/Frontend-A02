function validateForm(){
    const fullname = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const current_pets = document.getElementById('current_pets').value;
    const agree = document.getElementById('agree').checked;

    if(fullname === ''){
        alert('กรุณากรอกชื่อ – นามสกุล');
        return false;
    }

    if(phone === ''){
        alert('กรุณากรอกเบอร์ติดต่อ');
        return false;
    }

    if (current_pets === '' || isNaN(current_pets)) {
        alert('กรุณากรอกจำนวนสัตว์เลี้ยงเป็นตัวเลข (0 - 100)');
        return false;
    }

    const petsNum = Number(current_pets);
    if (petsNum <= 0 || petsNum >= 100) {
        alert('จำนวนสัตว์เลี้ยงต้องอยู่ระหว่าง 0 ถึง 100 เท่านั้น');
        return false;
    }

    if (!agree) {
        alert('กรุณารับทราบว่าการส่งแบบฟอร์มนี้เป็นการแจ้งความสนใจ โดยไม่รับรองการได้รับอุปการะสุนัข');
        return false;
    }

    return true;

}