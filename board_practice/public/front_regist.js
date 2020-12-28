// 게시글 등록 시
document.getElementById('board-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const user = e.target.user.value;
  const content = e.target.content.value;
  if (!title) {
    return alert('제목을 입력하세요');
  }
  if (!user) {
    return alert('사용자를 입력하세요');
  }
  if (!content) {
    return alert('내용을 입력하세요');
  }
  try {
    await axios.post('/documents', { title, user, content });
    getDocument();
  } catch (err) {
    console.error(err);
  }
  e.target.title.value = '';
  e.target.user.value = '';
  e.target.content.value = '';
  location.replace("/");
});