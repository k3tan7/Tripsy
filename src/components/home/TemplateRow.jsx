// Saved templates pill row
export default function TemplateRow({ templates }) {
  return (
    <div className="template-row">
      <h3>Saved Templates</h3>
      <div className="template-pills">
        {templates.map(template => (
          <button key={template.id} className="template-pill">
            {template.name}
          </button>
        ))}
      </div>
    </div>
  );
}
