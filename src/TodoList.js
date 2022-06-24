const state = { list: ['learn react', 'learn english', 'learn vue'] }

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
        {state.list.map((item) => { return <li>{item}</li> })}
      </ul>
    </div>
  );
}

export default TodoList;
