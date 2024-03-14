const { SeatableAPI } = require('seatable-api');

async function saveData() {
    const FIO = document.getElementById("FIO").value;
    const Phone = document.getElementById("Phone").value;
    const GroupText = document.getElementById("GroupText").value;
    const GroupNumber = parseInt(document.getElementById("GroupNumber").value);

    const data = {
        FIO: FIO,
        Phone: Phone,
        GroupText: GroupText,
        GroupNumber: GroupNumber
    };

    try {
        const seatable = new SeatableAPI('bf0532a641e2a6df0ef9b98dd11e4671adb25ef3', 'cefb40bc4233a568b6900c3a0a7e99cb42e5fbe6');
        const record = await seatable.createRecord('User', data);
        console.log('User registered:', record);
    } catch (error) {
        console.error('Failed to register user:', error);
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
