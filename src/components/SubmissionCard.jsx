import { deleteSubmission } from "../utils/storage";

function SubmissionCard({
  submission,
  refresh,
}) {
  const handleDelete = () => {
    deleteSubmission(submission.id);
    refresh();
  };

  return (
    <div className="submission-card">

      <div className="card-header">
        <h3>{submission.name}</h3>
      </div>

      <p className="email">
        {submission.email}
      </p>

      <div className="card-section">
        <strong>Subject:</strong>
        <p>{submission.subject}</p>
      </div>

      <div className="card-section">
        <strong>Message:</strong>
        <p>{submission.message}</p>
      </div>

      <div className="card-footer">

        <small>
          Submitted on:
          {" "}
          {submission.createdAt}
        </small>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default SubmissionCard;