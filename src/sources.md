1. Chatgpt

For the below logic in the Radio.js component I used chatgpt because I was stuck on how to deal with the new genre change.

const handleChangeGenre = () => {
dispatch(changeGenre(newGenre));
setNewGenre("");
};

<p>Current Genre: {genre}</p>
<input
  type="text"
  placeholder="Enter new genre"
  value={newGenre}
  onChange={(event) => setNewGenre(event.target.value)}
/>
<button onClick={() => handleChangeGenre()}>Change Genre</button>
</div>
