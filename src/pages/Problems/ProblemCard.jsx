import React from "react";
import "./Problems.css";

const difficultyColor = {
  Easy: "var(--accent-primary, #00ff88)",
  Medium: "var(--accent-secondary, #00d4ff)",
  Hard: "var(--accent-danger, #ff3366)",
};

const ProblemCard = ({ problem, onClick }) => {
  return (
    <div className="prob-card" onClick={() => onClick(problem)}>
      <div className="prob-card-header">
        <span className="prob-id">#{problem.id}</span>
        <span
          className="prob-difficulty"
          style={{ color: difficultyColor[problem.difficulty] }}
        >
          {problem.difficulty}
        </span>
      </div>
      <h3 className="prob-title">{problem.title}</h3>
      <p className="prob-desc">{problem.description.slice(0, 80)}…</p>
      <div className="prob-tags">
        {problem.tags.map((tag) => (
          <span key={tag} className="prob-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="prob-footer">
        <span className="prob-io">
          {problem.inputs.length} inputs · {problem.outputs.length} outputs
        </span>
        <button className="prob-solve-btn">Solve →</button>
      </div>
    </div>
  );
};

export default ProblemCard;
