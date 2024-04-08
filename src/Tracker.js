function Tracker({ items }) {
  let itemCount = items.length;
  let itemCheckedCount = items.filter((item) => item.isChecked).length;
  let percentage = Math.round((itemCheckedCount / itemCount) * 100);

  console.log(itemCheckedCount);

  return (
    <div className="tracker-main">
      {/* <div className="tracker-text">
        <p>Tracking your progress...</p>
      </div> */}
      <div className="tracker">
        <p>
          <b>Item Count:</b> {itemCount}
        </p>
        <p>
          <b>Completion:</b> {percentage}%
        </p>
      </div>
    </div>
  );
}

export default Tracker;
