function Header({ items, sortBy, setSortBy }) {
  let itemCount = items.length;
  let itemCheckedCount = items.filter((item) => item.isChecked).length;
  let percentage = Math.round((itemCheckedCount / itemCount) * 100);

  return (
    <div className="topnav">
      <div className="header">
        <h1>EXERCISES LIST</h1>
        <select
          className="sortlist"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by: Input</option>
          <option value="name">Sort by: Name</option>
          <option value="isChecked">Sort by: Checked</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
