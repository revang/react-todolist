function handleBtnClick() {
  alert('click');
}

function TodoList() {
  return (
    <div>
      <div>
        <input />
        <button onClick={handleBtnClick}>add</button>
      </div>
      <ul>
        <li>learn react</li>
        <li>learn english</li>
      </ul>
    </div>
  );
}

export default TodoList;
