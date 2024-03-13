function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function saveToSeatable() {
    // �������� �������� �� ����� �����
    const FIO = document.getElementById("FIO").value;
    const Phone = document.getElementById("Phone").value;
    const GroupText = document.getElementById("GroupText").value;
    const GroupNumber = document.getElementById("GroupNumber").value;

    // ������� ������ � �������
    const data = {
        "field_1": FIO,
        "field_2": Phone,
        "field_3": GroupText,
        "field_4": GroupNumber,
    };

    // ���������� ������ � Seatable
    fetch("https://cloud.seatable.io/workspace/51965/dtable/ProgectUnion/?tid=0000&vid=0000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bf0532a641e2a6df0ef9b98dd11e4671adb25ef3",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        // ������ ������� ���������
        alert("������ ������� ���������");
        closeForm();
    })
    .catch(error => {
        // ������ ��� ���������� ������
        alert("������ ��� ���������� ������");
    });
}
