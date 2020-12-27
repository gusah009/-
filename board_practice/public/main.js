// document.querySelectorAll('#board-list tr').forEach((el) => {
//   el.addEventListener('click', function () {
//     const id = el.querySelector('td').textContent;
//     getDocument(id);
//   });
// });

// 게시글 로딩
async function getDocument() {
  try {
    const res = await axios.get('/documents');
    const documents = res.data;
    console.log(documents);
    const tbody = document.querySelector('#board-list tbody');
    tbody.innerHTML = '';
    documents.map(function (document) {
      const row = document.createElement('tr');
      // 로우 셀 추가
      let td = document.createElement('td');
      td.textContent = document.title;
      row.appendChild(td);
      td = document.createElement('td');
      td.textContent = document.user;
      row.appendChild(td);
      td = document.createElement('td');
      td.textContent = document.views;
      row.appendChild(td);
      td = document.createElement('td');
      td.textContent = document.createdAt;
      row.appendChild(td);
      tbody.appendChild(row);
    });
  } catch (err) {
    console.error(err);
  }
}

// 게시글 등록 시
document.getElementById('board-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const user = e.target.user.value;
  if (!title) {
    return alert('제목을 입력하세요');
  }
  if (!user) {
    return alert('사용자를 입력하세요');
  }
  try {
    await axios.post('/documents', { title, user });
    getDocument();
  } catch (err) {
    console.error(err);
  }
  e.target.title.value = '';
  e.target.user.value = '';
});