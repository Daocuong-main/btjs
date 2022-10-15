let student = []

student.push({ id: 0, name: "Nguyen Van A", birthday: "01/01/2001", mssv: "00001" },
    { id: 1, name: "Nguyen Van B", birthday: "02/01/2001", mssv: "00002" },
    { id: 2, name: "Nguyen Van c", birthday: "03/01/2001", mssv: "00003" },
    { id: 3, name: "Nguyen Van D", birthday: "04/01/2001", mssv: "00004" },
    { id: 4, name: "Nguyen Van E", birthday: "05/01/2001", mssv: "00005" },
    { id: 5, name: "Nguyen Van F", birthday: "06/01/2001", mssv: "00006" });



console.table(student)
console.log("Cap nhat id 1");
student.find(s => {
    if (s.id === 1) {
        s.name = "Le Van A";
        s.birthday = "01/02/2001";
        s.mssv = "2312332"
    }
})
console.table(student);

console.log("Sap xep");
student.sort(function (s1, s2) {
    return s1.mssv - s2.mssv
})
console.table(student)

console.log("Xoa id 1");
idToRemove = 1
index = student.map(s => {
    return s.id
}).indexOf(idToRemove)
student.splice(index, 1)
console.table(student)