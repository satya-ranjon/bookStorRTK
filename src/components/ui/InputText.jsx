const InputText = ({ label, cls, ...attributes }) => {
  return (
    <div className="space-y-2">
      {attributes.type !== "checkbox" && <label> {label}</label>}
      <input className={`text-input ${cls}`} {...attributes} />
      {attributes.type === "checkbox" && <label> {label}</label>}
    </div>
  );
};

export default InputText;
