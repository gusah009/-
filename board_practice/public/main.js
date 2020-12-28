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
