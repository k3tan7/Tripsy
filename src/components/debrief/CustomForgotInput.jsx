// Free text for items not on list
export default function CustomForgotInput({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.customItem;
    if (input.value.trim()) {
      onSubmit(input.value);
      input.value = '';
    }
  };

  return (
    <form className="custom-forgot-input" onSubmit={handleSubmit}>
      <input
        type="text"
        name="customItem"
        placeholder="Add custom forgotten item..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
